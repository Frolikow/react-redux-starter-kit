import { IProfile } from 'shared/types/models';
import { IAction, IPlainAction } from 'shared/types/redux';

export interface IReduxState {
  edit: {
    profile: IProfile;
  };
}

export type IProfileEditFormFields = IProfile;

export type ILogOutProfile = IPlainAction<'PROFILE:LOGOUT_PROFILE'>;

export type IAction = ILogOutProfile;
