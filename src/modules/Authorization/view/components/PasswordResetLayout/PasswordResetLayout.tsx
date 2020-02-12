import React from 'react';
import block from 'bem-cn';


import { Layout } from 'modules/shared';
import { PasswordResetForm } from 'shared/view/components';
import './PasswordResetLayout.scss';

const b = block('password-reset-layout');

function PasswordResetLayoutComponent() {
  return (
    <Layout>
      <div className={b()}>
        <PasswordResetForm />
      </div>
    </Layout>
  );
}

export { PasswordResetLayoutComponent };
