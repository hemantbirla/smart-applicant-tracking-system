import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { interviewSchema } from "../../validations/interviewSchema";
import { INTERVIEW_TYPES } from "../../constants/interviewTypes";

const InterviewForm = ({
  onSubmit,
  initialData,
  onCancel,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(interviewSchema),

    defaultValues: {
      candidate: "",
      job: "",
      type: "",
      date: "",
      time: "",
      duration: 60,
      interviewer: "",
      meetingLink: "",
      notes: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  return (
    <form
      className="interview-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-grid">
        {/* Candidate */}
        <div className="form-group">
          <label>Candidate</label>

          <input
            {...register("candidate")}
            placeholder="Candidate Name"
          />

          <p className="error">
            {errors.candidate?.message}
          </p>
        </div>

        {/* Job */}
        <div className="form-group">
          <label>Job</label>

          <input
            {...register("job")}
            placeholder="React Developer"
          />

          <p className="error">
            {errors.job?.message}
          </p>
        </div>

        {/* Interview Type */}
        <div className="form-group">
          <label>Interview Type</label>

          <select {...register("type")}>
            <option value="">
              Select Interview Type
            </option>

            {INTERVIEW_TYPES.map((type) => (
              <option
                key={type}
                value={type}
              >
                {type}
              </option>
            ))}
          </select>

          <p className="error">
            {errors.type?.message}
          </p>
        </div>

        {/* Date */}
        <div className="form-group">
          <label>Date</label>

          <input
            type="date"
            {...register("date")}
          />

          <p className="error">
            {errors.date?.message}
          </p>
        </div>

        {/* Time */}
        <div className="form-group">
          <label>Time</label>

          <input
            type="time"
            {...register("time")}
          />

          <p className="error">
            {errors.time?.message}
          </p>
        </div>

        {/* Duration */}
        <div className="form-group">
          <label>Duration (minutes)</label>

          <input
            type="number"
            {...register("duration")}
          />

          <p className="error">
            {errors.duration?.message}
          </p>
        </div>

        {/* Interviewer */}
        <div className="form-group">
          <label>Interviewer</label>

          <input
            {...register("interviewer")}
            placeholder="Rahul Sharma"
          />

          <p className="error">
            {errors.interviewer?.message}
          </p>
        </div>

        {/* Meeting Link */}
        <div className="form-group">
          <label>Meeting Link</label>

          <input
            {...register("meetingLink")}
            placeholder="https://meet.google.com/..."
          />

          <p className="error">
            {errors.meetingLink?.message}
          </p>
        </div>

        {/* Notes */}
        <div className="form-group full-width">
          <label>Notes</label>

          <textarea
            rows="4"
            {...register("notes")}
            placeholder="Interview notes..."
          />

          <p className="error">
            {errors.notes?.message}
          </p>
        </div>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="btn-primary"
        >
          {initialData
            ? "Update Interview"
            : "Schedule Interview"}
        </button>

        <button
          type="button"
          className="btn-secondary"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default InterviewForm;