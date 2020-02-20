import * as NS from '../../namespace';
import { initial } from '../initial';

function editReducer(state: NS.IReduxState['user'] = initial.user, action: NS.Action): NS.IReduxState['user'] {
  switch (action.type) {
    case 'AUTHORIZATION:SIGN_UP_SUCCESS': {
      return {
        ...state,
      };
    }

    case 'AUTHORIZATION:SIGN_IN_SUCCESS': {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    }

    case 'AUTHORIZATION:PASSWORD_RESET_SUCCESS': {
      return {
        ...state,
      };
    }

    case 'AUTHORIZATION:SIGN_OUT': {
      return {
        ...state,
        email: '',
        password: '',
      };
    }
    default:
      return state;
  }
}

export { editReducer };
