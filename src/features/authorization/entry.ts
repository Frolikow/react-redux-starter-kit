import { makeFeatureEntry } from 'shared/helpers/makeFeatureEntry';

import { actionCreators, selectors, reducer } from './redux';

const entry = makeFeatureEntry({
  actionCreators,
  selectors,
  reduxEntry: {
    reducers: { user: reducer },
  },
});

type Entry = typeof entry;
export { Entry, entry };
