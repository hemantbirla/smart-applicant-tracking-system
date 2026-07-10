const SkeletonCard = ({ rows = 5 }) => {
  return (
    <div className="skeleton-container">
      {Array.from({ length: rows }).map((_, index) => (
        <div
          className="skeleton-card"
          key={index}
        >
          <div className="skeleton skeleton-title"></div>

          <div className="skeleton skeleton-text"></div>

          <div className="skeleton skeleton-text short"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCard;