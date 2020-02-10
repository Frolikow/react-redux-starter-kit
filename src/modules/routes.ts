import { routes as searchRoutes } from './Search/routes';
import { routes as profileRoutes } from './Profile/routes';
import { routes as login } from './Login/routes';

export const routes = {
  ...login,
  ...searchRoutes,
  ...profileRoutes,
};
