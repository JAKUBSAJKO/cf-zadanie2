export default function Pagination() {
  return (
    <ul className="pagination">
      <li>
        <button>goToFirstPage</button>
      </li>
      <li>
        <button>goToPrevPage</button>
      </li>
      <li>
        <button>goToNextPage</button>
      </li>
      <li>
        <button>goToLastPage</button>
      </li>
    </ul>
  );
}
