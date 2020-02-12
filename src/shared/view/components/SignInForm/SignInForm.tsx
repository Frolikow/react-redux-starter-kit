import React from 'react';
import { connect } from 'react-redux';
import { Form, FormRenderProps } from 'react-final-form';
import { Link } from 'react-router-dom';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { selectors, actionCreators } from 'features/authorization/redux';
import { IAppReduxState } from 'shared/types/app';
import { User } from 'shared/types/models';
import './SignInForm.scss';

type Props = StateProps & IActionProps;

type IActionProps = typeof mapDispatch;

type StateProps = {
  user: User;
}

function mapState(state: IAppReduxState): StateProps {
  return {
    user: selectors.selectUser(state),
  };
}

const mapDispatch = {
  signIn: actionCreators.signIn,
};

type State = {
  email: string;
  isCorrectEmail: boolean
  password: string;
  isVisiblePassword: boolean;
}


const b = block('sign-in-form');

class SignInForm extends React.PureComponent<Props, State> {
  private passwordInput = React.createRef<HTMLInputElement>();

  public state: State = {
    email: '',
    isCorrectEmail: false,
    password: '',
    isVisiblePassword: false,
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
    const { isVisiblePassword, password, isCorrectEmail } = this.state;

    return (
      <div className={b()}>
        <Link to='signUp' className={b('change-form')}>Зарегистрироваться &#8658;</Link>
        <h2>Войти</h2>
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
          <Link to='passwordReset' className={b('password-reset')} >Восстановить пароль</Link>

          <span className={b('item')}>
            <button className={b('submit')} type="submit" onClick={this.handleFormSubmit} disabled={!isCorrectEmail || !password}>
              Войти
            </button>
          </span>
        </form>
      </div>
    );
  }

  @autobind
  private checkEmail(email: string) {
    this.setState({ isCorrectEmail: /(\w{1,}\@\w{1,}[\.]\w{1,})/g.test(email) })
  }

  @autobind
  private handleFormSubmit() {
    const { email, password } = this.state;
    this.props.signIn({ email, password });
  }

  @autobind
  private handleEmailChange(event: any) {
    this.checkEmail(event.target.value);
    this.setState({ email: event.target.value });
  }

  @autobind
  private handlePasswordChange(event: any) {
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

const connectedComponent = connect(mapState, mapDispatch)(SignInForm);

export { connectedComponent as SignInForm };
