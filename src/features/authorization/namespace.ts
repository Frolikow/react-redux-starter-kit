import { IAction, IPlainAction, IPlainFailAction } from 'shared/types/redux';
import { User } from 'shared/types/models';

export interface IReduxState {
  data: User,
}

export type SignUp = IAction<'AUTHORIZATION:SIGN_UP', User>;
export type SignUpSuccess = IPlainAction<'AUTHORIZATION:SIGN_UP_SUCCESS'>;
export type SignUpFail = IPlainFailAction<'AUTHORIZATION:SIGN_UP_FAIL', string>;

export type SignIn = IAction<'AUTHORIZATION:SIGN_IN', User>;
export type SignInSuccess = IPlainAction<'AUTHORIZATION:SIGN_IN_SUCCESS'>;
export type SignInFail = IPlainFailAction<'AUTHORIZATION:SIGN_IN_FAIL', string>;

export type PasswordReset = IAction<'AUTHORIZATION:PASSWORD_RESET', Pick<User, 'email'>>;
export type PasswordResetSuccess = IPlainAction<'AUTHORIZATION:PASSWORD_RESET_SUCCESS'>;
export type PasswordResetFail = IPlainFailAction<'AUTHORIZATION:PASSWORD_RESET_FAIL', string>;

export type SignOut = IPlainAction<'AUTHORIZATION:SIGN_OUT'>;

export type Action =
  SignUp
  | SignUpSuccess
  | SignUpFail
  | SignIn
  | SignInSuccess
  | SignInFail
  | PasswordReset
  | PasswordResetSuccess
  | PasswordResetFail
  | SignOut;
