import buildRouteTree from 'build-route-tree';

export const routes = buildRouteTree({
  login: {
    authorization: null,
    registration: null,
    passwordReset: null,
  },
});
