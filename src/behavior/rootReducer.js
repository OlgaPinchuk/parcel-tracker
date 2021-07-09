import { combineReducers } from 'redux';
import { reducer as parcelsReducer } from './parcels';

export default combineReducers({
  parcels: parcelsReducer,
});