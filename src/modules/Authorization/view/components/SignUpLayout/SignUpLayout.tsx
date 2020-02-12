import React from 'react';
import block from 'bem-cn';

import { useTranslation, tKeys } from 'services/i18n';

import { Layout } from 'modules/shared';
import { SignUpForm } from 'shared/view/components';
import './SignUpLayout.scss';


const b = block('sign-up-layout');

function SignUpLayoutComponent() {
  const { t } = useTranslation();

  return (
    <Layout title={t(tKeys.features.authorization.signUp)}>
      <div className={b()}>
        <SignUpForm />
      </div>
    </Layout>
  );
}

export { SignUpLayoutComponent};
