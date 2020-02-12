import React from 'react';
import block from 'bem-cn';
// import {  RouteComponentProps } from 'react-router-dom';

// import {  ITranslationProps } from 'services/i18n';

import './Layout.scss';

interface IOwnProps {
  title?: string;
}

type IProps = IOwnProps/*  & RouteComponentProps & ITranslationProps; */

const b = block('layout');

class LayoutComponent extends React.Component<IProps> {
  public render() {
    const {children} = this.props;
    return (
      <div className={b()}>
        <div className={b('content')}>
          {children}
        </div>
      </div>
    );
  }
}

export { LayoutComponent, IProps as ILayoutProps };
