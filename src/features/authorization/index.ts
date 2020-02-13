import * as namespace from './namespace';
import { IReduxEntry } from 'shared/types/app';
import { reducer, getSaga } from './redux';

export { namespace };

export const reduxEntry: IReduxEntry = {
  reducers: { user: reducer },
  sagas: [getSaga],
};