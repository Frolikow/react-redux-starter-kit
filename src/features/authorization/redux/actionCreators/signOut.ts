import * as NS from '../../namespace';
import { User } from 'shared/types/models';

export function signOut(payload:User): NS.SignUp {
  return { type: 'AUTHORIZATION:SIGN_UP' , payload};
}
