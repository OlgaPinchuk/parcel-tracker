import { createReducer } from "../createReducer";
import { GET_PARCELS } from "./actionTypes";

const initialState = null;

export default createReducer(initialState, {
  [GET_PARCELS]: getParcels,
});

function getParcels(state, action) {
  if(state !== null) {
    return state;
  }
  return action.parcels;
}
