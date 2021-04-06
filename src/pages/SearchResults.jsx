// NPM Package
import { useState } from "react";
import { useRecoilValue } from "recoil";

// Project files
import { ParcelCard } from "../components/ParcelCard";
import { parcelStateSelector } from "../state/parcelsData";

export const SearchResults = ({ match, history }) => {
  // State
  const [sortKey, setSortKey] = useState("parcel_id");
  const parcels = useRecoilValue(parcelStateSelector);

  // Consts
  const query = match.params.query.toUpperCase();
  const filteredResults = parcels.filter((item) => {
    const searchString = [
      item.location_name,
      item.sender,
      item.status,
      item.parcel_id,
    ].join(" ");
    return searchString.toUpperCase().match(query);
  });
  const sortedResults = filteredResults.sort((a, b) =>
    a[sortKey] > b[sortKey] ? 1 : -1
  );

  // Components
  const CardsArray = sortedResults.map((item) => (
    <ParcelCard key={item.id} parcel={item} />
  ));

  return (
    <div id="results" className="search-results">
      <section className="container parcel-list">
        {CardsArray.length > 0 ? (
          CardsArray
        ) : (
          <h2 class="no-results">No results</h2>
        )}
      </section>
    </div>
  );
};
