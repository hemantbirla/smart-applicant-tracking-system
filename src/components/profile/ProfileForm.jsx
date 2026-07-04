import AuthInput from "../auth/AuthInput";

const ProfileForm = ({
  register,
  errors,
}) => {
  return (
    <>
      <AuthInput
        label="Full Name"
        name="name"
        placeholder="Enter full name"
        register={register}
        error={errors.name}
      />

      <AuthInput
        label="Phone"
        name="phone"
        placeholder="Enter phone number"
        register={register}
        error={errors.phone}
      />

      <AuthInput
        label="Address"
        name="address"
        placeholder="Enter address"
        register={register}
        error={errors.address}
      />

      <AuthInput
        label="LinkedIn"
        name="linkedin"
        placeholder="LinkedIn URL"
        register={register}
        error={errors.linkedin}
      />

      <AuthInput
        label="GitHub"
        name="github"
        placeholder="GitHub URL"
        register={register}
        error={errors.github}
      />

      <AuthInput
        label="Portfolio"
        name="portfolio"
        placeholder="Portfolio URL"
        register={register}
        error={errors.portfolio}
      />
    </>
  );
};

export default ProfileForm;