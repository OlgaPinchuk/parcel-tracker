import { Link } from "react-router-dom";

export const ParcelCard = ({ parcel }) => {
  // const deliveredImgObject = require("../media/images/icons/delivered.png");
  // const infoReceivedImage = require("../media/images/icons/info-received.png");
  // const inProgressImg = require("../media/images/icons/in-progress.png");
  // const readyToPickupImg = require("../media/images/icons/ready-to-pickup.png");

  const eta = parcel.eta.split("T")[0];
  
  return (
    <article className="parcel-info">
      <Link to={`/parcels/${parcel.parcel_id}`}>
        {/* <i
           className="delivery-status"
           src={videoThumbURL}
           alt={information.description}
         /> */}

        <span className={`status-icon ${parcel.status}`}></span>
        <div className="parcel-description">
          <p>{parcel.sender}</p>
          <p>{parcel.parcel_id}</p>
          <p>{eta}</p>
        </div>
      </Link>
    </article>
  );
};
