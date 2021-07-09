// NPM Packages
import { useEffect } from "react";
import { connect, useDispatch } from 'react-redux';

// Project files
import { getParcels } from "../behavior/parcels";
 
 const ParcelsLoader  = ({parcels, getParcels}) => {
    const dispatch = useDispatch();
    useEffect(() => {
      if(!parcels) {
        dispatch(getParcels());
      }
    }, []);
    return null;
 }

 export default connect(
    ({ parcels }) => ({ parcels }),
    {getParcels}
  )(ParcelsLoader);