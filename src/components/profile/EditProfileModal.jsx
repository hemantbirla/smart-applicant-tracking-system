import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthButton from "../auth/AuthButton";
import ProfileForm from "./ProfileForm";

import { editProfileSchema } from "../../constants/profileValidation";
import { useUser } from "../../context/UserContext";

import "../../styles/profile.css";

const EditProfileModal = ({ isOpen, onClose }) => {
  const { profile, updateProfile } = useUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editProfileSchema),
    defaultValues: profile || {},
  });

  useEffect(() => {
    if (profile) {
      reset(profile);
    }
  }, [profile, reset]);

  const onSubmit = (data) => {
    updateProfile(data);

    // Later:
    // await profileService.updateProfile(data);
    // updateProfile(response.data);

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Edit Profile</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="profile-form"
        >
          <ProfileForm
            register={register}
            errors={errors}
          />

          <div className="modal-actions">
            <AuthButton
              type="button"
              onClick={onClose}
              className="secondary-btn"
            >
              Cancel
            </AuthButton>

            <AuthButton type="submit">
              Save Changes
            </AuthButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;