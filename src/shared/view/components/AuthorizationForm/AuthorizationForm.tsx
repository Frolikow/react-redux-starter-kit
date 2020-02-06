import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
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
  unsubscribe: boolean;
}


const b = block('authorization-form');

class AuthorizationForm extends React.PureComponent<Props, State> {
  private passwordInput = React.createRef<HTMLInputElement>();

  public state: State = {
    isVisiblePassword: false,
    email: null,
    password: null,
    unsubscribe: false,
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
        <span>Зарегистрироваться -></span>
        <h2>Войти</h2>
        <form onSubmit={handleSubmit} className={b('form')} action="data:text/plain;,">
          <span className={b('item')}>
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

          <span className={b('item')}>
            <button className={b('submit')} type="submit" value={submitButtonText} onClick={this.handleFormSubmit}>
              Войти
            </button>
          </span>
          <label>
            <input type="checkbox" onClick={this.handleUnsubscribeChange} defaultChecked={this.state.unsubscribe} />
            Я не хочу получать новостную рассылку
        </label>
        </form>
      </div>

    );
  }

  @autobind
  private handleFormSubmit() {
    const { email, password, unsubscribe } = this.state;
    console.log('AuthorizationForm', email, password, unsubscribe);
  }

  @autobind
  private handleUnsubscribeChange(event: any) {
    this.setState({ unsubscribe: event.target.checked });
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
    if (this.passwordInput.current) { // does not work
      const el = this.passwordInput.current;
      el.focus();
      el.setSelectionRange(3, el.value.length);
    }

    this.setState(state => ({
      isVisiblePassword: !state.isVisiblePassword,
    }));
  }
}

export { AuthorizationForm };
