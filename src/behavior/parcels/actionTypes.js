import { parcels } from '../../data/data';

export const GET_PARCELS = "GET_PARCELS";
export const getParcels = () => ({
  type: GET_PARCELS,
  parcels,
});
