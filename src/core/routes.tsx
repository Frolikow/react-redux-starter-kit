import React from 'react';
import { Route, RouteComponentProps, Redirect, Switch } from 'react-router-dom';

import { App } from 'modules/App';
import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';
import { ReactReduxContext } from 'react-redux';

function getRoutes(modules: IModule[]): React.ReactElement<RouteComponentProps<any>> {
  return (
    <Route path="/">
      <App>
        <Switch>
          {modules.map(module => (module.getRoutes ? module.getRoutes() : null))}
          <Route
            key={routes.authorization.getElementKey()}
            path={routes.authorization.getRoutePath()}
          />
          <PrivateRoute>
            <Route
              key={routes.profile.getElementKey()}
              path={routes.profile.getRoutePath()}
            />
          </PrivateRoute>
          <Redirect to={routes.authorization.signIn.getRedirectPath()} />
        </Switch>
      </App>
    </Route>
  );
}

function PrivateRoute(props: any) {
  const { children, ...rest } = props;
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Route
          {...rest}
          render={() =>
            store.getState().user.email
              ? children
              : <Redirect to={routes.authorization.signIn.getRedirectPath()} />
          }
        />
      )}
    </ReactReduxContext.Consumer>
  );
}

export { getRoutes };
