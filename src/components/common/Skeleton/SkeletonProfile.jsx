import "./Skeleton.css";

const SkeletonProfile = () => {
  return (
    <div className="skeleton-profile">
      {/* Header */}
      <div className="skeleton-profile-header">
        <div className="skeleton skeleton-avatar"></div>

        <div className="skeleton-profile-info">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-subtitle"></div>
          <div className="skeleton skeleton-subtitle short"></div>
        </div>
      </div>

      {/* Personal Info */}
      <div className="skeleton-profile-section">
        <div className="skeleton skeleton-heading"></div>

        <div className="skeleton-grid">
          <div className="skeleton skeleton-input"></div>
          <div className="skeleton skeleton-input"></div>
          <div className="skeleton skeleton-input"></div>
          <div className="skeleton skeleton-input"></div>
          <div className="skeleton skeleton-input"></div>
          <div className="skeleton skeleton-input"></div>
        </div>
      </div>

      {/* Skills */}
      <div className="skeleton-profile-section">
        <div className="skeleton skeleton-heading"></div>

        <div className="skeleton-skills">
          <div className="skeleton skeleton-chip"></div>
          <div className="skeleton skeleton-chip"></div>
          <div className="skeleton skeleton-chip"></div>
          <div className="skeleton skeleton-chip"></div>
          <div className="skeleton skeleton-chip"></div>
        </div>
      </div>

      {/* Resume */}
      <div className="skeleton-profile-section">
        <div className="skeleton skeleton-heading"></div>

        <div className="skeleton skeleton-resume"></div>
      </div>
    </div>
  );
};

export default SkeletonProfile;