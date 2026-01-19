
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleClick = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <div className="search">
      <input
        placeholder="Search movies or books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleClick}>Search</button>
    </div>
  );
}
