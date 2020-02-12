import * as NS from '../../namespace';
import { initial } from '../initial';

function editReducer(state: NS.IReduxState['user'] = initial.user, action: NS.Action): NS.IReduxState['user'] {
  switch (action.type) {
    case 'AUTHORIZATION:SIGN_UP_SUCCESS': {
      return {
        ...state,
        email: action.payload,
      };
    }
    default:
      return state;
  }
}

export { editReducer };
