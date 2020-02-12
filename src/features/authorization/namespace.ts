import { IAction, IPlainAction } from 'shared/types/redux';
import { User } from 'shared/types/models';

export interface IReduxState {
  user: User,
}

export type SignUp = IAction<'AUTHORIZATION:SIGN_UP', User>;
export type SignUpSuccess = IAction<'AUTHORIZATION:SIGN_UP_SUCCESS',string>;
export type SignUpFail = IPlainAction<'AUTHORIZATION:SIGN_UP_FAIL'>;

export type SignIn = IAction<'AUTHORIZATION:SIGN_IN', User>;
export type SignInSuccess = IAction<'AUTHORIZATION:SIGN_IN_SUCCESS', string>;
export type SignInFail = IPlainAction<'AUTHORIZATION:SIGN_IN_FAIL'>;

export type PasswordReset = IAction<'AUTHORIZATION:PASSWORD_RESET', Pick<User, 'email'>>;
export type PasswordResetSuccess = IPlainAction<'AUTHORIZATION:PASSWORD_RESET_SUCCESS'>;
export type PasswordResetFail = IPlainAction<'AUTHORIZATION:PASSWORD_RESET_FAIL'>;

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
