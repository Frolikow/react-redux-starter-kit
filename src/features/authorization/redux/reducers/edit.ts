import * as NS from '../../namespace';
import { initial } from '../initial';

function editReducer(state: NS.IReduxState['data'] = initial.data, action: NS.Action): NS.IReduxState['data'] {
  switch (action.type) {
    case 'AUTHORIZATION:SIGN_UP_SUCCESS': {
      return {
        ...state,
      };
    }

    case 'AUTHORIZATION:SIGN_IN_SUCCESS': {
      return {
        ...state,
        user: {
          email: action.payload.email,
          password: action.payload.password,
        },
        isAuth: true,
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
        user: {
          email: '',
          password: '',
        },
        isAuth: false,
      };
    }
    default:
      return state;
  }
}

export { editReducer };
