import profileData from "../../constants/profileData";
import "../../styles/dashboard.css";

const ProfileSummary = ({ profile = profileData }) => {
  return (
    <section className="profile-summary">
      <h2 className="section-title">Profile Summary</h2>

      <div className="profile-card">
        <div className="profile-header">
          <img
            src={profile.profileImage}
            alt={profile.name}
            className="profile-image"
          />

          <div>
            <h3>{profile.name}</h3>
            <p>{profile.email}</p>
          </div>
        </div>

        <div className="profile-details">
          <div className="profile-item">
            <strong>Phone</strong>
            <span>{profile.phone}</span>
          </div>

          <div className="profile-item">
            <strong>Experience</strong>
            <span>{profile.experience}</span>
          </div>

          <div className="profile-item">
            <strong>Resume</strong>
            <span>{profile.resumeUploaded ? "Uploaded" : "Not Uploaded"}</span>
          </div>
        </div>

        <div className="skills-section">
          <strong>Skills</strong>

          <div className="skills-list">
            {profile.skills.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="completion-section">
          <div className="completion-header">
            <span>Profile Completion</span>

            <span>{profile.profileCompletion}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${profile.profileCompletion}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSummary;
