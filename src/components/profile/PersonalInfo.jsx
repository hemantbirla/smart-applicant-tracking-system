import "../../styles/profile.css";

const profile = {
  firstName: "Hemant",
  lastName: "Birla",
  title: "Frontend React Developer",
  email: "hemant@example.com",
  phone: "+91 9876543210",
  dob: "12 Mar 1999",
  location: "Pune, Maharashtra",
  linkedin: "linkedin.com/in/hemantbirla",
  github: "github.com/hemantbirla",
  portfolio: "hemantbirla.dev",
};

const PersonalInfo = () => {
  return (
    <section className="profile-section">
      <h2 className="profile-section-title">
        Personal Information
      </h2>

      <div className="profile-grid">

        <div className="profile-item">
          <label>First Name</label>
          <p>{profile.firstName}</p>
        </div>

        <div className="profile-item">
          <label>Last Name</label>
          <p>{profile.lastName}</p>
        </div>

        <div className="profile-item">
          <label>Job Title</label>
          <p>{profile.title}</p>
        </div>

        <div className="profile-item">
          <label>Email</label>
          <p>{profile.email}</p>
        </div>

        <div className="profile-item">
          <label>Phone</label>
          <p>{profile.phone}</p>
        </div>

        <div className="profile-item">
          <label>Date of Birth</label>
          <p>{profile.dob}</p>
        </div>

        <div className="profile-item">
          <label>Location</label>
          <p>{profile.location}</p>
        </div>

        <div className="profile-item">
          <label>LinkedIn</label>
          <a
            href={`https://${profile.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            {profile.linkedin}
          </a>
        </div>

        <div className="profile-item">
          <label>GitHub</label>
          <a
            href={`https://${profile.github}`}
            target="_blank"
            rel="noreferrer"
          >
            {profile.github}
          </a>
        </div>

        <div className="profile-item profile-full-width">
          <label>Portfolio</label>
          <a
            href={`https://${profile.portfolio}`}
            target="_blank"
            rel="noreferrer"
          >
            {profile.portfolio}
          </a>
        </div>

      </div>
    </section>
  );
};

export default PersonalInfo;