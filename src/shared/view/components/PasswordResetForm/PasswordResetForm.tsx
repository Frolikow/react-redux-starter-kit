import React from 'react';
import { connect } from 'react-redux';
import { Form, FormRenderProps } from 'react-final-form';
import { Link } from 'react-router-dom';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { selectors, actionCreators } from 'features/authorization/redux';
import { User } from 'shared/types/models';
import { IAppReduxState } from 'shared/types/app';
import './PasswordResetForm.scss';

type Props = StateProps & IActionProps;

type IActionProps = typeof mapDispatch;

type State = {
  email: string;
  isCorrectEmail: boolean;
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
  passwordReset: actionCreators.passwordReset,
};

const b = block('password-reset-form');

class PasswordResetForm extends React.PureComponent<Props, State> {
  public state: State = {
    email: '',
    isCorrectEmail: false,
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
    const { isCorrectEmail } = this.state;

    return (
      <div className={b()}>
        <Link to='signIn' className={b('change-form')}>Войти &#8658;</Link>
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
            <button className={b('submit')} type="submit" onClick={this.handleFormSubmit} disabled={!isCorrectEmail}>
              Отправить новый пароль
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
    const { email } = this.state;
    this.props.passwordReset({ email })
  }

  @autobind
  private handleEmailChange(event: any) {
    this.checkEmail(event.target.value);
    this.setState({ email: event.target.value });
  }
}

const connectedComponent = connect(mapState, mapDispatch)(PasswordResetForm);

export { connectedComponent as PasswordResetForm };
