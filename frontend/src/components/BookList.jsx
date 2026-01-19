import Card from "./Card";

export default function BookList({ books }) {
  return (
    <div className="grid">
      {books.map((b, i) => (
        <Card
          key={i}
          id={b.id || i}
          title={b.volumeInfo.title}
          desc={b.volumeInfo.description}
          img={
            b.volumeInfo.imageLinks
              ? b.volumeInfo.imageLinks.thumbnail
              : ""
          }
        />
      ))}
    </div>
  );
}
