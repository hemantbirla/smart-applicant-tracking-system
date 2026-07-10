import "./Skeleton.css";

const SkeletonTable = ({ rows = 6, columns = 5 }) => {
  return (
    <div className="skeleton-table">
      {/* Header */}
      <div className="skeleton-table-header">
        {Array.from({ length: columns }).map((_, index) => (
          <div
            key={index}
            className="skeleton skeleton-header"
          />
        ))}
      </div>

      {/* Body */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="skeleton-table-row"
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div
              key={colIndex}
              className="skeleton skeleton-cell"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkeletonTable;