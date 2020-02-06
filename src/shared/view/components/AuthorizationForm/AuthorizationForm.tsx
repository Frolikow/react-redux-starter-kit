import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import block from 'bem-cn';
import { autobind } from 'core-decorators';



import './AuthorizationForm.scss';

interface IProps {
  submitButtonText?: string;

}

const b = block('authorization-form');

class AuthorizationForm extends React.PureComponent<IProps> {

  public render() {
    return (
      <Form
        onSubmit={() => console.log('submit')}
        render={this.renderForm}
        subscription={{}}
      />
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

export { AuthorizationForm };
