import { Link } from "react-router-dom";

export const ParcelCard = ({ parcel }) => {
  const deliveredImg = require("../media/images/icons/delivered.png").default;
  const infoReceivedImg = require("../media/images/icons/info-received.png")
    .default;
  const inProgressImg = require("../media/images/icons/in-progress.png")
    .default;
  const readyToPickupImg = require("../media/images/icons/ready-to-pickup.png")
    .default;

  const eta = parcel.eta.split("T")[0];

  return (
    <article className="parcel-info">
      <Link to={`/parcels/${parcel.parcel_id}`}>
        {/* <i
           className="delivery-status"
           src={videoThumbURL}
           alt={information.description}
         /> */}

        <span className={`status-icon ${parcel.status}`}>
        </span>
        <div className="parcel-description">
          <p>{parcel.sender}</p>
          <p>{parcel.parcel_id}</p>
          <p>{eta}</p>
        </div>
      </Link>
    </article>
  );
};
