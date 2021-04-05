import GoogleMapReact from "google-map-react";
import { LocationPin } from './LocationPin';
 
const { REACT_APP_MAP_KEY } = process.env;

export const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: REACT_APP_MAP_KEY,
        }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin lat={location.lat} lng={location.lng} />
      </GoogleMapReact>
    </div>
  </div>
);