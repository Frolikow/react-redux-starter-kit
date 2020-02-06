import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import block from 'bem-cn';
import { autobind } from 'core-decorators';



import './RegistrationForm.scss';

interface IProps {
  submitButtonText?: string;

}

const b = block('registration-form');

class RegistrationForm extends React.PureComponent<IProps> {

  public render() {
    return (
      <div>
        <h2>Зарегистрироваться</h2>
        <Form
          onSubmit={() => console.log('RegistrationForm')}
          render={this.renderForm}
        />
      </div>
    );
  }

  @autobind
  private renderForm({ handleSubmit }: FormRenderProps) {
    const { submitButtonText } = this.props;
    return (
      <form onSubmit={handleSubmit} className={b()}>
        <input type="submit" value={submitButtonText} />
      </form>
    );
  }
}

export { RegistrationForm };
