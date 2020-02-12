import React from 'react';
import block from 'bem-cn';

import { useTranslation, tKeys } from 'services/i18n';

import { Layout } from 'modules/shared';
import { SignInForm } from 'shared/view/components';
import './SignInLayout.scss';


const b = block('sign-in-layout');

function SignInLayoutComponent() {
  const { t } = useTranslation();

  return (
    <Layout title={t(tKeys.features.authorization.signIn)}>
      <div className={b()}>
        <SignInForm />
      </div>
    </Layout>
  );
}

export {  SignInLayoutComponent};
