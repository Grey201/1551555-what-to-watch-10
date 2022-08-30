export default function ShowMoreButton({
  getIncrement,
}: {
  getIncrement: () => void;
}): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => getIncrement()}
      >
        Show more
      </button>
    </div>
  );
}
