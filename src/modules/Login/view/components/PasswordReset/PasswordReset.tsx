import React from 'react';
import { Route } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { PasswordResetLayout } from './view/components';

const PasswordReset: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.passwordReset.getElementKey()}
        path={routes.passwordReset.getRoutePath()}
        component={PasswordResetLayout}
      />
    );
  },
};

export { PasswordReset };
