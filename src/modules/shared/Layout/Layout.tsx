import React from 'react';
import block from 'bem-cn';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { withTranslation, ITranslationProps } from 'services/i18n';
import { AuthorizationForm } from 'shared/view/components/AuthorizationForm/AuthorizationForm';
// import { RegistrationForm } from 'shared/view/components/RegistrationForm/RegistrationForm';
import { withAsyncFeatures } from 'core';
import * as features from 'features';

import './Layout.scss';

interface IOwnProps {
  title: string;
}

interface IFeatureProps {
  profileFeatureEntry: features.profile.Entry;
}

type IProps = IOwnProps & IFeatureProps & RouteComponentProps & ITranslationProps;

const b = block('layout');

class LayoutComponent extends React.Component<IProps> {
  public render() {

    return (
      <div className={b()}>
        <div className={b('content')}>
          <AuthorizationForm />
          {/* <RegistrationForm /> */}
        </div>
      </div>
    );
  }
}

const wrappedComponent = withTranslation()(withRouter(LayoutComponent));
const Layout = withAsyncFeatures({
  profileFeatureEntry: features.profile.loadEntry,
})(wrappedComponent);

export { Layout, LayoutComponent, IProps as ILayoutProps };
