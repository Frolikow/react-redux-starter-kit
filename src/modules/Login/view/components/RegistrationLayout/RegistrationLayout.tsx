import React from 'react';
import block from 'bem-cn';

import * as features from 'features';
import { withAsyncFeatures } from 'core';
import { useTranslation, tKeys } from 'services/i18n';

import { Layout } from 'modules/shared';
import { RegistrationForm } from 'shared/view/components';
import './RegistrationLayout.scss';

interface IFeatureProps {
  registrationFeatureEntry: features.registration.Entry;
}

type IProps = IFeatureProps;

const b = block('registration-layout');

function RegistrationLayoutComponent() {
  const { t } = useTranslation();

  return (
    <Layout title={t(tKeys.features.profile.editProfile)}>
      <div className={b()}>
        <RegistrationForm />
      </div>
    </Layout>
  );
}

const RegistrationLayout = withAsyncFeatures({
  registrationFeatureEntry: features.registration.loadEntry,
})(RegistrationLayoutComponent);

export { RegistrationLayout, RegistrationLayoutComponent, IProps as IRegistrationLayoutProps };
