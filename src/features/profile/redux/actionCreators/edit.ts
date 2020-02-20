import * as NS from '../../namespace';

export function logOutProfile(): NS.ILogOutProfile {
  return { type: 'PROFILE:LOGOUT_PROFILE' };
}
