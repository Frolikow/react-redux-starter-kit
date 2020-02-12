import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { Link } from 'react-router-dom';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import './SignInForm.scss';

type Props = {
  submitButtonText?: string;
}

type State = {
  email: string | null;
  isCorrectEmail: boolean
  password: string | null;
  isVisiblePassword: boolean;
}


const b = block('sign-in-form');

class SignInForm extends React.PureComponent<Props, State> {
  private passwordInput = React.createRef<HTMLInputElement>();

  public state: State = {
    email: null,
    isCorrectEmail: false,
    password: null,
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
    const { submitButtonText } = this.props;
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
            <button className={b('submit')} type="submit" value={submitButtonText} onClick={this.handleFormSubmit} disabled={!isCorrectEmail || !password}>
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
    console.log('SignInForm', email, password);
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

export { SignInForm };
