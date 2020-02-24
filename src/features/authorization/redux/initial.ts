import { IReduxState } from '../namespace';

const initial: IReduxState = {
  data: {
    user: {
      email: '',
      password: '',
    },
    isAuth: false,
  }
};

export { initial };
