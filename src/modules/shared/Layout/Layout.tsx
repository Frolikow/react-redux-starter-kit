import React from 'react';
import block from 'bem-cn';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { withTranslation, ITranslationProps } from 'services/i18n';
// import { RegistrationForm } from 'shared/view/components/RegistrationForm/RegistrationForm';
import { withAsyncFeatures } from 'core';
import * as features from 'features';

import './Layout.scss';

interface IOwnProps {
  title: string;
}

interface IFeatureProps {
  authorizationFeatureEntry: features.authorization.Entry;
}

type IProps = IOwnProps & IFeatureProps & RouteComponentProps & ITranslationProps;

const b = block('layout');

class LayoutComponent extends React.Component<IProps> {
  public render() {
    const {children} = this.props;
    return (
      <div className={b()}>
        <div className={b('content')}>
          {children}
          {/* <RegistrationForm /> */}
        </div>
      </div>
    );
  }
}

const wrappedComponent = withTranslation()(withRouter(LayoutComponent));
const Layout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(wrappedComponent);

export { Layout, LayoutComponent, IProps as ILayoutProps };
