import { IAppReduxState } from 'shared/types/app';
import { User } from 'shared/types/models';

function selectFeatureState(state: IAppReduxState) {
  return state.user;
}

export function selectUser(state: IAppReduxState): User {
  return selectFeatureState(state).data;
}
