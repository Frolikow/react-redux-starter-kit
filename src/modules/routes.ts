import { routes as profileRoutes } from './Profile/routes';
import { routes as authorizationRoutes } from './Authorization/routes';

export const routes = {
  ...authorizationRoutes,
  ...profileRoutes,
};
