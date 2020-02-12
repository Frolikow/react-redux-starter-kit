import React from 'react';
import block from 'bem-cn';


import { Layout } from 'modules/shared';
import { SignInForm } from 'shared/view/components';
import './SignInLayout.scss';


const b = block('sign-in-layout');

function SignInLayoutComponent() {
  return (
    <Layout>
      <div className={b()}>
        <SignInForm />
      </div>
    </Layout>
  );
}

export {  SignInLayoutComponent};
