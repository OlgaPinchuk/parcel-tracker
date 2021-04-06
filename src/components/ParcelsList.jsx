// Project files
import { ParcelCard } from "./ParcelCard";

export const ParcelsList = ({ parcels }) => {
  const ParcelsArray = parcels.map((item) => (
    <ParcelCard key={item.parcel_id} parcel={item} />
  ));
  return (
    <div className="container parcel-list">
      <div className="list-header">
        <p>Status</p>
        <p>Sender</p>
        <p>ID</p>
        <p>ETA</p>
      </div>
      {ParcelsArray}
    </div>
  );
};
