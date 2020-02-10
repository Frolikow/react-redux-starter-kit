import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { Link } from 'react-router-dom';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import './PasswordResetForm.scss';

type Props = {
  submitButtonText?: string;
}

type State = {
  email: string | null;
}


const b = block('password-reset-form');

class PasswordResetForm extends React.PureComponent<Props, State> {
  public state: State = {
    email: null,
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

    return (
      <div className={b()}>
        <Link to='authorization' className={b('change-form')}>Войти &#8658;</Link>
        <h2>Восстановить пароль</h2>
        <span className={b('description')}>Напомните вашу почту, и мы вышлем новый пароль.</span>
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
            <button className={b('submit')} type="submit" value={submitButtonText} onClick={this.handleFormSubmit}>
              Отправить новый пароль
            </button>
          </span>
        </form>
      </div>

    );
  }

  @autobind
  private handleFormSubmit() {
    const { email } = this.state;
    console.log('PasswordResetForm', email);
  }

  @autobind
  private handleEmailChange(event: any) {
    this.setState({ email: event.target.value });
  }
}

export { PasswordResetForm };
