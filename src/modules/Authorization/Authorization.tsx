import React from 'react';
import { Route } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { AuthorizationLayout } from './view/components';

const Authorization: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.authorization.getElementKey()}
        path={routes.authorization.getRoutePath()}
        component={AuthorizationLayout}
      />
    );
  },
};

export { Authorization };
