import * as NS from '../../namespace';
import { initial } from '../initial';

function editReducer(state: NS.IReduxState['edit'] = initial.edit, action: NS.IAction): NS.IReduxState['edit'] {
  switch (action.type) {
    case 'PROFILE:LOGOUT_PROFILE': {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export { editReducer };
