import { makeCommunicationActionCreators } from 'redux-make-communication';

import * as NS from '../../namespace';

export const {
  execute: signUp,
  completed: signUpSuccess,
  failed: signUpFail,
} = makeCommunicationActionCreators<NS.SignUp, NS.SignUpSuccess, NS.SignUpFail>(
  'AUTHORIZATION:SIGN_UP',
  'AUTHORIZATION:SIGN_UP_SUCCESS',
  'AUTHORIZATION:SIGN_UP_FAIL',
);
