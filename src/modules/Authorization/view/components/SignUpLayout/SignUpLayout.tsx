import React from 'react';
import block from 'bem-cn';

import { Layout } from 'modules/shared';
import { SignUpForm } from 'shared/view/components';
import './SignUpLayout.scss';


const b = block('sign-up-layout');

function SignUpLayoutComponent() {
  return (
    <Layout>
      <div className={b()}>
        <SignUpForm />
      </div>
    </Layout>
  );
}

export { SignUpLayoutComponent};
