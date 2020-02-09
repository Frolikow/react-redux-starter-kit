import React from 'react';
import block from 'bem-cn';

import * as features from 'features';
import { withAsyncFeatures } from 'core';
import { useTranslation, tKeys } from 'services/i18n';

import { Layout } from 'modules/shared';
import { AuthorizationForm } from 'shared/view/components/AuthorizationForm/AuthorizationForm'; // ??????
import './RegistrationLayout.scss';

interface IFeatureProps {
  authorizationFeatureEntry: features.authorization.Entry;
}

type IProps = IFeatureProps;

const b = block('registration-layout');

function RegistrationLayoutComponent(/* props: IProps */) {
  // const { authorizationFeatureEntry: { containers } } = props;
  // const { ProfileEdit } = containers;
  const { t } = useTranslation();

  return (
    <Layout title={t(tKeys.features.profile.editProfile)}>
      <div className={b()}>
        <AuthorizationForm /> {/* ????? */}
      </div>
    </Layout>
  );
}

const RegistrationLayout = withAsyncFeatures({
  registrationFeatureEntry: features.registration.loadEntry,
})(RegistrationLayoutComponent);

export { RegistrationLayout, RegistrationLayoutComponent, IProps as IRegistrationLayoutProps };
