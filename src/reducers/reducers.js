import { combineReducers } from 'redux';
import sportReducer from './sportReducer';
import scienceReducer from './scienceReducer';

import * as constantsActions from '../utils/constants_actions';

const appReducers = combineReducers({
  sportReducer,
  scienceReducer
});

const reducers = (state, action) => {
  if (action.type === constantsActions.CLEAR_STORE) {
    state = undefined;
  }

  return appReducers(state, action);
};

export default reducers;
