import { makeCommunicationActionCreators } from 'redux-make-communication';

import * as NS from '../../namespace';

export const {
  execute: passwordReset,
  completed: passwordResetSuccess,
  failed: passwordResetFail,
} = makeCommunicationActionCreators<NS.PasswordReset, NS.PasswordResetSuccess, NS.PasswordResetFail>(
  'AUTHORIZATION:PASSWORD_RESET',
  'AUTHORIZATION:PASSWORD_RESET_SUCCESS',
  'AUTHORIZATION:PASSWORD_RESET_FAIL',
);
