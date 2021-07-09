// NPM Packages
import { useState } from "react";
import { connect } from "react-redux";

//Global state
import { getParcels } from "../behavior/parcels"

// Components
import { ParcelsList } from "../components/ParcelsList";


 const SearchResults = ({ match, history, parcels }) => {
  // State
  const sortKey = useState("parcel_id");
  if(!parcels) {
    return null;
  }

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

export default connect(
  ({ parcels }) => ({ parcels }),
  { getParcels }
)(SearchResults);