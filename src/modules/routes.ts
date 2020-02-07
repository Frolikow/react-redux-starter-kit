import { routes as searchRoutes } from './Search/routes';
import { routes as profileRoutes } from './Profile/routes';
import { routes as authorizationRoutes } from './Authorization/routes';
import { routes as passwordReset } from './PasswordReset/routes';
import { routes as registration } from './Registration/routes';

export const routes = {
  ...authorizationRoutes,
  ...passwordReset,
  ...registration,
  ...searchRoutes,
  ...profileRoutes,
};
