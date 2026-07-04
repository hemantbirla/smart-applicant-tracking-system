import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiFileText,
  FiEdit,
} from "react-icons/fi";

import { useUser } from "../../context/UserContext";

import "../../styles/profile.css";

const ProfileHeader = ({ onEdit }) => {
  const { profile } = useUser();

  if (!profile) {
    return (
      <section className="profile-header-card">
        <h3>No profile found.</h3>
      </section>
    );
  }

  return (
    <section className="profile-header-card">
      <div className="profile-left">
        <img
          src={profile.avatar || "/images/default-avatar.png"}
          alt={profile.name || "Profile"}
          className="profile-avatar"
          onError={(e) => {
            e.target.src = "/images/default-avatar.png";
          }}
        />

        <div className="profile-info">
          <h2>{profile.name || "N/A"}</h2>

          <p className="profile-job-title">
            {profile.title || profile.jobTitle || "Frontend Developer"}
          </p>

          <p>
            <FiMail />
            <span>{profile.email || "Not Available"}</span>
          </p>

          <p>
            <FiPhone />
            <span>{profile.phone || "Not Available"}</span>
          </p>

          <p>
            <FiMapPin />
            <span>{profile.location || "Not Available"}</span>
          </p>

          <p>
            <FiFileText />
            <span>
              {profile.resumeUploaded
                ? "Resume Uploaded"
                : "Resume Not Uploaded"}
            </span>
          </p>
        </div>
      </div>

      <div className="profile-right">
        <div className="completion-circle">
          <span>{profile.profileCompletion ?? 0}%</span>
        </div>

        <button
          type="button"
          className="edit-profile-btn"
          onClick={onEdit}
        >
          <FiEdit />
          <span>Edit Profile</span>
        </button>
      </div>
    </section>
  );
};

export default ProfileHeader;