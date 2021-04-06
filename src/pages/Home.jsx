// NPM Package
import { useRecoilValue } from "recoil";

// Components
import { ParcelCard } from "../components/ParcelCard";
import { parcelStateSelector } from "../state/parcelsData";
import { SearchBar } from "../components/SearchBar";

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
      <SearchBar />
      <div className="parcels-container container">{ParcelsArray}</div>
    </div>
  );
};
