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
  try {
    const users = yield call(api.getUsers);
    yield call(api.signUp, payload, Object.keys(users));
    yield put(actionCreators.signUpSuccess());
    yield put(notificationActionCreators.setNotification({ kind: 'info', text: 'Регистрация успешна! Можете войти используя свои данные.' }));
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    yield put(actionCreators.signUpFail(errorMsg));
    yield put(notificationActionCreators.setNotification({ kind: 'error', text: errorMsg }));
  }
}

function* executeSignIn({ api }: IDependencies, { payload }: NS.SignIn) {
  try {
    const users = yield call(api.getUsers);
    yield call(api.signIn, payload, users);
    yield put(actionCreators.signInSuccess());
    yield put(notificationActionCreators.setNotification({ kind: 'info', text: 'Успех!' }));
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    yield put(actionCreators.signInFail(errorMsg));
    yield put(notificationActionCreators.setNotification({ kind: 'error', text: errorMsg }));
  }
}

function* executePasswordReset({ api }: IDependencies, { payload }: NS.PasswordReset) {
  try {
    const users = yield call(api.getUsers);
    const password = yield call(api.passwordReset, payload, users);
    yield put(actionCreators.passwordResetSuccess());
    yield put(notificationActionCreators.setNotification({ kind: 'info', text: `Теперь у вас пароль такой: ${password}` }));
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    yield put(actionCreators.passwordResetFail(errorMsg));
    yield put(notificationActionCreators.setNotification({ kind: 'error', text: errorMsg }));
  }
}

export { getSaga };
