import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { SignInLayout, SignUpLayout, PasswordResetLayout } from './view/components';

const Authorization: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.authorization.getElementKey()}
        path={routes.authorization.getRoutePath()}
      >
        <Switch>
          <Route
            key={routes.authorization.signIn.getElementKey()}
            path={routes.authorization.signIn.getRoutePath()}
            component={SignInLayout}
          />
          <Route
            key={routes.authorization.passwordReset.getElementKey()}
            path={routes.authorization.passwordReset.getRoutePath()}
            component={PasswordResetLayout}
          />
          <Route
            key={routes.authorization.signUp.getElementKey()}
            path={routes.authorization.signUp.getRoutePath()}
            component={SignUpLayout}
          />
        </Switch>
      </Route>
    );
  },
};

export { Authorization };
