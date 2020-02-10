import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { AuthorizationLayout, RegistrationLayout, PasswordResetLayout } from './view/components';

const Login: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.login.getElementKey()}
        path={routes.login.getRoutePath()}
      >
        <Switch>
          <Route
            key={routes.login.authorization.getElementKey()}
            path={routes.login.authorization.getRoutePath()}
            component={AuthorizationLayout}
          />
          <Route
            key={routes.login.passwordReset.getElementKey()}
            path={routes.login.passwordReset.getRoutePath()}
            component={PasswordResetLayout}
          />
          <Route
            key={routes.login.registration.getElementKey()}
            path={routes.login.registration.getRoutePath()}
            component={RegistrationLayout}
          />
        </Switch>
      </Route>
    );
  },
};

export { Login };
