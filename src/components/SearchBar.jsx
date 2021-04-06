import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
  // State
  const [query, setQuery] = useState("");

  // Property
  const history = useHistory();

  // Methods
  function onSearch(event) {
    event.preventDefault();

    history.push(`/results/${query}`);
  }

  return (
    <section className="search-section">
      <form onSubmit={onSearch} className="search-bar">
        <input
          className="bar"
          type="text"
          name="search"
          placeholder="Find a parcel"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit" className="submit-btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </section>
  );
};
