const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="filter by name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
