import "./Skeleton.css";

const SkeletonCard = ({ count = 4 }) => {
  return (
    <div className="skeleton-card-grid">
      {Array.from({ length: count }).map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton skeleton-icon"></div>

          <div className="skeleton-content">
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCard;