// NPM Packages
import { useState } from "react";
import { useRecoilValue } from "recoil";

// Project files
import { ParcelsList } from "../components/ParcelsList";
import { parcelStateSelector } from "../state/parcelsData";

export const SearchResults = ({ match, history }) => {
  // State
  const sortKey = useState("parcel_id");
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


  return (
    <div id="results" className="search-results">
      {sortedResults.length > 0 ? (
        <ParcelsList parcels={sortedResults} />
      ) : (
        <div className="container">
          <h2 className="no-results">No results</h2>
        </div>
      )}
    </div>
  );
};
