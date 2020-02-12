import React from 'react';
import block from 'bem-cn';

import { useTranslation, tKeys } from 'services/i18n';

import { Layout } from 'modules/shared';
import { PasswordResetForm } from 'shared/view/components';
import './PasswordResetLayout.scss';

const b = block('password-reset-layout');

function PasswordResetLayoutComponent() {
  const { t } = useTranslation();

  return (
    <Layout title={t(tKeys.features.authorization.passwordReset)}>
      <div className={b()}>
        <PasswordResetForm />
      </div>
    </Layout>
  );
}

export { PasswordResetLayoutComponent };
