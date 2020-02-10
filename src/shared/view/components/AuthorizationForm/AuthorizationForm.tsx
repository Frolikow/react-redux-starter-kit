import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { Link } from 'react-router-dom';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import './AuthorizationForm.scss';

type Props = {
  submitButtonText?: string;
}

type State = {
  isVisiblePassword: boolean;
  email: string | null;
  password: string | null;
}


const b = block('authorization-form');

class AuthorizationForm extends React.PureComponent<Props, State> {
  private passwordInput = React.createRef<HTMLInputElement>();

  public state: State = {
    isVisiblePassword: false,
    email: null,
    password: null,
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
    const { submitButtonText } = this.props;
    const { isVisiblePassword } = this.state;

    return (
      <div className={b()}>
        <Link to='registration' className={b('change-form')}>Зарегистрироваться &#8658;</Link>
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
            <button className={b('submit')} type="submit" value={submitButtonText} onClick={this.handleFormSubmit}>
              Войти
            </button>
          </span>
        </form>
      </div>
    );
  }

  @autobind
  private handleFormSubmit() {
    const { email, password } = this.state;
    console.log('AuthorizationForm', email, password);
  }

  @autobind
  private handleEmailChange(event: any) {
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

export { AuthorizationForm };
