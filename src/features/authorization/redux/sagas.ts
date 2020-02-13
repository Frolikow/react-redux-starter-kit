import { put, call, all, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { IDependencies } from 'shared/types/app';
import { getErrorMsg } from 'shared/helpers';
import { actionCreators as notificationActionCreators } from 'services/notification';

import * as NS from '../namespace';
import * as actionCreators from './actionCreators';

function getSaga(deps: IDependencies) {
  const signUpType: NS.SignUp['type'] = 'AUTHORIZATION:SIGN_UP';
  const signInType: NS.SignIn['type'] = 'AUTHORIZATION:SIGN_IN';
  const passwordResetType: NS.PasswordReset['type'] = 'AUTHORIZATION:PASSWORD_RESET';
  return function* saga(): SagaIterator {
    yield all([
      takeLatest(signUpType, executeSignUp, deps),
      takeLatest(signInType, executeSignIn, deps),
      takeLatest(passwordResetType, executePasswordReset, deps),
    ]);
  };
}

function* executeSignUp({ api }: IDependencies, { payload }: NS.SignUp) {
  console.log('executeSignUp')
  try {
    yield call(api.signUp, payload);
    yield put(actionCreators.signUpSuccess());
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    yield put(actionCreators.signUpFail(errorMsg));
    yield put(notificationActionCreators.setNotification({ kind: 'error', text: errorMsg }));
  }
}

function* executeSignIn({ api }: IDependencies, { payload }: NS.SignIn) {
  console.log('executeSignIn')
  try {
    // yield put(actionCreators.signIn(payload));
    yield call(api.signIn, payload);
    yield put(actionCreators.signInSuccess());
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    yield put(actionCreators.signInFail(errorMsg));
    yield put(notificationActionCreators.setNotification({ kind: 'error', text: errorMsg }));
  }
}

function* executePasswordReset({ api }: IDependencies, { payload }: NS.PasswordReset) {
  console.log('executePasswordReset')
  try {
    // yield put(actionCreators.passwordReset(payload));
    yield call(api.passwordReset, payload);
    yield put(actionCreators.passwordResetSuccess());
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    yield put(actionCreators.passwordResetFail(errorMsg));
    yield put(notificationActionCreators.setNotification({ kind: 'error', text: errorMsg }));
  }
}

export { getSaga };
