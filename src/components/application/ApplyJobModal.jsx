import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { applicationSchema } from "../../validation/applicationSchema";

import ResumeSelector from "./ResumeSelector";
import CoverLetterInput from "./CoverLetterInput";

const ApplyJobModal = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      applicationSchema
    ),
  });

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="application-modal">

        <h2>
          Apply Job
        </h2>

        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
        >
          <ResumeSelector
            register={register}
            error={errors.resume}
          />

          <CoverLetterInput
            register={register}
            error={
              errors.coverLetter
            }
          />

          <div className="form-group">
            <label>
              Portfolio URL
            </label>

            <input
              className="form-control"
              {...register(
                "portfolio"
              )}
            />

            <p className="form-error">
              {
                errors.portfolio
                  ?.message
              }
            </p>
          </div>

          <div className="form-group">
            <label>
              LinkedIn URL
            </label>

            <input
              className="form-control"
              {...register(
                "linkedin"
              )}
            />

            <p className="form-error">
              {
                errors.linkedin
                  ?.message
              }
            </p>
          </div>

          <div className="modal-actions">
            <button
              type="submit"
              className="apply-btn"
            >
              Submit
              Application
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ApplyJobModal;