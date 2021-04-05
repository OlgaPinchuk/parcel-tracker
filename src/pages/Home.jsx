// NPM Package
import { useRecoilValue } from "recoil";

// Components
import { ParcelCard } from "../components/ParcelCard";
import { parcelStateSelector } from "../state/parcelsData";


export const Home = () => {
  //State
 
  const parcels = useRecoilValue(parcelStateSelector);
  //const [parcels, setParcels] = useRecoilState(parcelsState);

  // Components
  const ParcelsArray = parcels.map((item) => (
    <ParcelCard key={item.parcel_id} parcel={item} />
  ));

  return (
    <div className="home">
        <div className="parcels-container">{ParcelsArray}</div>
    </div>
  );
};
