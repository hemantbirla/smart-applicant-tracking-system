import AuthInput from "../auth/AuthInput";

const PersonalInfo = ({ register, errors }) => {
  return (
    <section className="profile-section">
      <h2 className="profile-section-title">
        Personal Information
      </h2>

      <div className="profile-grid">
        <AuthInput
          label="First Name"
          name="firstName"
          placeholder="Enter first name"
          register={register}
          error={errors.firstName}
        />

        <AuthInput
          label="Last Name"
          name="lastName"
          placeholder="Enter last name"
          register={register}
          error={errors.lastName}
        />

        <AuthInput
          label="Job Title"
          name="title"
          placeholder="e.g. Frontend Developer"
          register={register}
          error={errors.title}
        />

        <AuthInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          register={register}
          error={errors.email}
        />

        <AuthInput
          label="Phone"
          name="phone"
          type="tel"
          placeholder="Enter phone number"
          register={register}
          error={errors.phone}
        />

        <AuthInput
          label="Date of Birth"
          name="dob"
          type="date"
          register={register}
          error={errors.dob}
        />

        <AuthInput
          label="Location"
          name="location"
          placeholder="Enter your location"
          register={register}
          error={errors.location}
        />

        <AuthInput
          label="LinkedIn"
          name="linkedin"
          type="url"
          placeholder="https://linkedin.com/in/username"
          register={register}
          error={errors.linkedin}
        />

        <AuthInput
          label="GitHub"
          name="github"
          type="url"
          placeholder="https://github.com/username"
          register={register}
          error={errors.github}
        />

        <div className="profile-full-width">
          <AuthInput
            label="Portfolio"
            name="portfolio"
            type="url"
            placeholder="https://yourportfolio.com"
            register={register}
            error={errors.portfolio}
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;