// Components
import { SearchBar } from "../components/SearchBar";
import ParcelsList from "../components/ParcelsList";

export const Home = () => {
  return (
    <div className="home">
      <SearchBar />
      <ParcelsList />
    </div>
  );
};