// NPM Packages
import { useRecoilValue } from "recoil";

// Components
import { parcelStateSelector } from "../state/parcelsData";
import { SearchBar } from "../components/SearchBar";
import { ParcelsList } from "../components/ParcelsList";

export const Home = () => {
  //State
  const parcels = useRecoilValue(parcelStateSelector);

  return (
    <div className="home">
      <SearchBar />
      <ParcelsList parcels={parcels} />
    </div>
  );
};
