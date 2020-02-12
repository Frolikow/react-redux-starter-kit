import React from 'react';
import block from 'bem-cn';
import './Layout.scss';

interface IOwnProps {
  title?: string;
}

type IProps = IOwnProps;

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
