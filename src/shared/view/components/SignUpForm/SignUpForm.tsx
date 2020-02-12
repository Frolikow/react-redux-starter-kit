import React from 'react';
import { connect } from 'react-redux';
import { Form, FormRenderProps } from 'react-final-form';
import { Link } from 'react-router-dom';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { selectors, actionCreators } from 'features/authorization/redux';
import { IAppReduxState } from 'shared/types/app';
import { User } from 'shared/types/models';
import './SignUpForm.scss';

type Props = StateProps & IActionProps;

type IActionProps = typeof mapDispatch;

type State = {
  isVisiblePassword: boolean;
  email: string;
  password: string;
  unsubscribe: boolean;
  passwordOptions: PasswordOptions;
}

type PasswordOptions = {
  hasOneLowercaseLetter: boolean;
  hasOneUppercaseLetter: boolean;
  hasNumber: boolean;
  hasMinimumLength: boolean;
}

type StateProps = {
  user: User;
}

function mapState(state: IAppReduxState): StateProps {
  return {
    user: selectors.selectUser(state),
  };
}

const mapDispatch = {
  signUp: actionCreators.signUp,
};

const b = block('sign-up-form');

class SignUpForm extends React.PureComponent<Props, State> {
  private passwordInput = React.createRef<HTMLInputElement>();

  public state: State = {
    isVisiblePassword: false,
    email: '',
    password: '',
    unsubscribe: false,
    passwordOptions: {
      hasOneLowercaseLetter: false,
      hasOneUppercaseLetter: false,
      hasNumber: false,
      hasMinimumLength: false,
    },
  }

  public render() {
    return (
      <Form
        onSubmit={this.handleFormSubmit}
        render={this.renderForm}
      />
    );
  }

  @autobind
  private renderForm({ handleSubmit }: FormRenderProps) {
    const { isVisiblePassword, passwordOptions: {
      hasOneLowercaseLetter,
      hasOneUppercaseLetter,
      hasNumber,
      hasMinimumLength } } = this.state;

    return (
      <div className={b()}>
        <Link to='signIn' className={b('change-form')}>Войти &#8658;</Link>
        <h2>Зарегистрироваться</h2>
        <form onSubmit={handleSubmit} className={b('form')} action="data:text/plain;,">
          <span className={b('item')}>
            <span className={b('input-title')}>Email</span>
            <input
              className={b('input')}
              type="email"
              required
              value={this.state.email || ''}
              onChange={this.handleEmailChange}
              placeholder="ivanova@mail.com"
            />
          </span>

          <span className={b('item')}>
            <span className={b('input-title')}>Пароль</span>
            <span className={b('password')}>
              <input
                className={b('input')}
                type={isVisiblePassword ? "text" : "password"}
                required
                value={this.state.password || ''}
                onChange={this.handlePasswordChange}
                ref={this.passwordInput}
              />
              <span className={b('password-icon')} onClick={this.handleShowPasswordClick}>
                {isVisiblePassword ? 'HIDE' : 'SHOW'}
              </span>
            </span>
          </span>

          <div className={b('password-check')}>
            <div>
              <p className={b('password-check-option', { correct: hasOneLowercaseLetter })}> Одна строчная буква</p>
              <p className={b('password-check-option', { correct: hasOneUppercaseLetter })}> Одна заглавная буква</p>
            </div>
            <div>
              <p className={b('password-check-option', { correct: hasNumber })}> Одна цифра</p>
              <p className={b('password-check-option', { correct: hasMinimumLength })}> Минимум 8 знаков</p>
            </div>
          </div>

          <span className={b('item')}>
            <button
              className={b('submit')}
              type="submit"
              onClick={this.handleFormSubmit}
              disabled={Object.values(this.state.passwordOptions).some(i => i === false)}
            >
              Зарегистрироваться
            </button>
          </span>
          <label className={b('unsubscribe')}>
            <input
              type="checkbox"
              onClick={this.handleUnsubscribeChange}
              defaultChecked={this.state.unsubscribe}
            />
            Я не хочу получать новостную рассылку
        </label>
        </form>
      </div>

    );
  }

  private checkPassword(password: string) {
    const hasOneLowercaseLetter = /[a-z]/g.test(password);
    const hasOneUppercaseLetter = /[A-Z]/g.test(password);
    const hasNumber = /\d/g.test(password);
    const hasMinimumLength = password.length >= 8;
    this.setState({ passwordOptions: { hasOneLowercaseLetter, hasOneUppercaseLetter, hasNumber, hasMinimumLength } })
  }

  @autobind
  private handleFormSubmit() {
    const { email, password } = this.state;
    this.props.signUp({ email, password });
  }

  @autobind
  private handleUnsubscribeChange(event: any) {
    this.setState({ unsubscribe: event.target.checked });
    console.log(this.props)
  }

  @autobind
  private handleEmailChange(event: any) {
    this.setState({ email: event.target.value });
  }

  @autobind
  private handlePasswordChange(event: any) {
    this.checkPassword(event.target.value);
    this.setState({ password: event.target.value });
  }

  @autobind
  private handleShowPasswordClick() {
    this.setState(state => ({
      isVisiblePassword: !state.isVisiblePassword,
    }), this.setCaretPosition);
  }

  @autobind
  private setCaretPosition() {
    if (this.passwordInput.current) {
      const el = this.passwordInput.current;
      el.focus();
      el.selectionStart = el.value.length;
    }
  }
}

const connectedComponent = connect(mapState, mapDispatch)(SignUpForm);

export { connectedComponent as SignUpForm };
