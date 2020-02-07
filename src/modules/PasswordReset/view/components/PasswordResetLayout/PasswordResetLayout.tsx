import React from 'react';
import block from 'bem-cn';

import * as features from 'features';
import { withAsyncFeatures } from 'core';
import { useTranslation, tKeys } from 'services/i18n';

import { Layout } from '../../../../shared';
import { AuthorizationForm } from 'shared/view/components/AuthorizationForm/AuthorizationForm'; // ?????
import './PasswordResetLayout.scss';

interface IFeatureProps {
  authorizationFeatureEntry: features.authorization.Entry;
}

type IProps = IFeatureProps;

const b = block('password-reset-layout');

function PasswordResetLayoutComponent(/* props: IProps */) {
  // const { authorizationFeatureEntry: { containers } } = props;
  // const { ProfileEdit } = containers;
  const { t } = useTranslation();

  return (
    <Layout title={t(tKeys.features.profile.editProfile)}>
      <div className={b()}>
        <AuthorizationForm /> {/* ??? */}
      </div>
    </Layout>
  );
}

const PasswordResetLayout = withAsyncFeatures({
  passwordResetFeatureEntry: features.passwordReset.loadEntry,
})(PasswordResetLayoutComponent);

export { PasswordResetLayout, PasswordResetLayoutComponent, IProps as IPasswordResetLayoutProps };
