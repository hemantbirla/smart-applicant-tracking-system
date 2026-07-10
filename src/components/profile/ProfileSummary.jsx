import profileData from "../../constants/profileData";
import { calculateProfileCompletion } from "../../utils/profileCompletion";

import "../../styles/dashboard.css";
import { memo } from "react";

const ProfileSummary = ({ profile = profileData }) => {
  const completion = calculateProfileCompletion(profile);

  return (
    <section className="profile-summary">
      <h2 className="section-title">Profile Summary</h2>

      <div className="profile-card">
        <div className="profile-header">
          <img
            src={profile.profileImage}
            alt={profile.fullName}
            className="profile-image"
          />

          <div>
            <h3>{profile.fullName}</h3>
            <p>{profile.email}</p>
          </div>
        </div>

        <div className="profile-details">
          <div className="profile-item">
            <strong>Phone</strong>
            <span>{profile.phone || "-"}</span>
          </div>

          <div className="profile-item">
            <strong>Experience</strong>

            <span>
              {profile.experiences?.length
                ? profile.experiences[0].role
                : "Not Added"}
            </span>
          </div>

          <div className="profile-item">
            <strong>Education</strong>

            <span>
              {profile.education?.length
                ? profile.education
                    .map(
                      (edu) =>
                        `${edu.degree} - ${edu.college} (${edu.year})`
                    )
                    .join(", ")
                : "Not Added"}
            </span>
          </div>

          <div className="profile-item">
            <strong>Resume</strong>

            <span>
              {profile.resumeUploaded
                ? "Uploaded"
                : "Not Uploaded"}
            </span>
          </div>
        </div>

        <div className="skills-section">
          <strong>Skills</strong>

          <div className="skills-list">
            {profile.skills?.map((skill) => (
              <span
                key={skill}
                className="skill-badge"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="completion-section">
          <div className="completion-header">
            <span>Profile Completion</span>

            <span>{completion}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${completion}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ProfileSummary);