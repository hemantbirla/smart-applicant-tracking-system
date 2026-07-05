const ActiveFilters = ({
  searchTerm,
  filters,
  clearFilters,
}) => {
  return (
    <div className="active-filters">
      {searchTerm && (
        <span className="filter-chip">
          Search: {searchTerm}
        </span>
      )}

      {Object.entries(filters).map(([key, value]) =>
        value ? (
          <span key={key} className="filter-chip">
            {value}
          </span>
        ) : null
      )}

      {(searchTerm ||
        Object.values(filters).some(Boolean)) && (
        <button
          className="clear-filters-btn"
          onClick={clearFilters}
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default ActiveFilters;