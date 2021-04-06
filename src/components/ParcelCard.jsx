// NPM Packages
import { Link } from "react-router-dom";

export const ParcelCard = ({ parcel }) => {
  const eta = parcel.eta.split("T")[0];

  return (
    <article className="parcel-info">
      <Link to={`/parcels/${parcel.parcel_id}`}>
        <div className="parcel-description">
          <span className={`status-icon ${parcel.status}`}></span>
          <p>{parcel.sender}</p>
          <p>{parcel.parcel_id}</p>
          <p className="eta">{eta}</p>
        </div>
      </Link>
    </article>
  );
};
