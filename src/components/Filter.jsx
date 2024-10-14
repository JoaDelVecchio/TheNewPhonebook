const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter-container">
      <input
        className="filter-input"
        type="text"
        placeholder="Filter by name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
