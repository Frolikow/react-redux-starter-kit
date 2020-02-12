import { combineReducers } from 'redux';

import { editReducer } from './edit';
import * as NS from '../../namespace';

export const reducer = combineReducers<NS.IReduxState>({
  data: editReducer,
});
