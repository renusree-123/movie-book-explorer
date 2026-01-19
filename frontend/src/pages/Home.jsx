import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import BookList from "../components/BookList";
import Pagination from "../components/Pagination";
import { fetchMovies, fetchBooks } from "../services/api";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);
  const [type, setType] = useState("movie");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = async (q, p = 1) => {
    console.log("Searching for:", q, "Page:", p);
    setQuery(q);
    setPage(p);

    if (type === "movie") {
      setMovies(await fetchMovies(q, p));
      setBooks([]);
    } else {
      setBooks(await fetchBooks(q, p));
      setMovies([]);
    }
  };

  return (
    <div className="container">
      <div className="toggle">
        <button onClick={() => setType("movie")}>Movies</button>
        <button onClick={() => setType("book")}>Books</button>
      </div>
        <h2 style={{ textAlign: "center" }}>
  {type === "movie" ? "Explore Movies" : "Explore Books"}
</h2>

      <SearchBar onSearch={handleSearch} />

      {type === "movie" ? (
        <MovieList movies={movies} />
      ) : (
        <BookList books={books} />
      )}

      <Pagination
        page={page}
        setPage={setPage}
        onChange={handleSearch}
        query={query}
      />
    </div>
  );
}
