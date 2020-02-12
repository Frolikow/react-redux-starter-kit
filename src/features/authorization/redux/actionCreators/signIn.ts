import { makeCommunicationActionCreators } from 'redux-make-communication';

import * as NS from '../../namespace';

export const {
  execute: signIn,
  completed: signInSuccess,
  failed: signInFail,
} = makeCommunicationActionCreators<NS.SignIn, NS.SignInSuccess, NS.SignInFail>(
  'AUTHORIZATION:SIGN_IN',
  'AUTHORIZATION:SIGN_IN_SUCCESS',
  'AUTHORIZATION:SIGN_IN_FAIL',
);
