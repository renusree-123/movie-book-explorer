export default function Pagination({ page, setPage, onChange, query }) {
  return (
    <div className="pagination">
      <button
        onClick={() => {
          setPage(page - 1);
          onChange(query, page - 1);
        }}
        disabled={page === 1}
      >
        Prev
      </button>

      <span>Page {page}</span>

      <button
        onClick={() => {
          setPage(page + 1);
          onChange(query, page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}
