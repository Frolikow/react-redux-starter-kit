import buildRouteTree from 'build-route-tree';

export const routes = buildRouteTree({
  authorization: {
    signIn: null,
    signUp: null,
    passwordReset: null,
  },
});
