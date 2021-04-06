// NPM Packages
import { useRecoilValue } from "recoil";

// Components
import { Map } from "../components/Map";

// Global state
import { parcelStateSelector } from "../state/parcelsData";

export const Parcel = ({ match, history }) => {
  const routerID = match.params.parcel_id;
  const parcels = useRecoilValue(parcelStateSelector);
  const currentParcel = parcels.find((item) => item.parcel_id === routerID);

  const {
    parcel_id,
    sender,
    status,
    location_name,
    location_coordinate_latitude: lat,
    location_coordinate_longitude: lng,
    notes,
    verification_required,
  } = currentParcel;

  const eta = currentParcel.eta.split("T")[0];

  const location = {
    lat,
    lng,
  };

  function transformStatus(status) {
    return status
      .split("-")
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ");
  }

  return (
    <div className="parcel-details">
      <div className="parcel container">
        <h1 className="parcel-header">Delivery Details:</h1>
        <div className="grid">
          <div className="meta-data">
            <h2 className="order-num">
              Order <span>&#8470;</span> {parcel_id}
            </h2>
            <p>1 item</p>
          </div>
          <div className="pickup-details">
            <h2>Pick Up</h2>
            <h3 className="subheader">Location:</h3>
            <p>{location_name}</p>
            <h3 className="subheader">Delivery Date:</h3>
            <p>{eta}</p>
            <h3 className="subheader">Order Status:</h3>
            <p>{transformStatus(status)}</p>
          </div>
          <div className="other-details">
            <h2>Other details</h2>
            <h3 className="subheader">Sender:</h3>
            <p>{sender}</p>
            <h3 className="subheader">Notes:</h3>
            <p>{notes}</p>
            <h3 className="subheader">Verification:</h3>
            <p>{verification_required ? "Required" : "Not required"}</p>
          </div>
        </div>
        <Map location={location} zoomLevel={15} />
      </div>
    </div>
  );
};
