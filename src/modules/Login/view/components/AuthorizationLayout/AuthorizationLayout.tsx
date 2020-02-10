import React from 'react';
import block from 'bem-cn';

import * as features from 'features';
import { withAsyncFeatures } from 'core';
import { useTranslation, tKeys } from 'services/i18n';

import { Layout } from '../../../../shared';
import { AuthorizationForm } from 'shared/view/components/AuthorizationForm/AuthorizationForm';
import './AuthorizationLayout.scss';

interface IFeatureProps {
  authorizationFeatureEntry: features.authorization.Entry;
}

type IProps = IFeatureProps;

const b = block('authorization-layout');

function AuthorizationLayoutComponent(/* props: IProps */) {
  // const { authorizationFeatureEntry: { containers } } = props;
  // const { ProfileEdit } = containers;
  const { t } = useTranslation();

  return (
    <Layout title={t(tKeys.features.profile.editProfile)}>
      <div className={b()}>
        <AuthorizationForm />
      </div>
    </Layout>
  );
}

const AuthorizationLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(AuthorizationLayoutComponent);

export { AuthorizationLayout, AuthorizationLayoutComponent, IProps as IAuthorizationLayoutProps };