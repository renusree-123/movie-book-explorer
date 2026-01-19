import Card from "./Card";

export default function MovieList({ movies }) {
  return (
    <div className="grid">
      {movies.map((m) => (
        <Card
          key={m.id}
          id={m.id}
          title={m.title}
          desc={m.overview}
          rating={m.vote_average}
          img={
            m.poster_path
              ? `https://image.tmdb.org/t/p/w200${m.poster_path}`
              : ""
          }
        />
      ))}
    </div>
  );
}
