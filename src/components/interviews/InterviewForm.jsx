import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { interviewSchema } from "../../constants/interviewSchema";
import { INTERVIEW_TYPES } from "../../constants/interviewTypes";
import { STATUS_OPTIONS } from "../../constants/interviewStatus";

import "../../styles/interview.css";

const InterviewForm = ({ onSubmit, initialData, onCancel }) => {
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
      status: "Scheduled",
      date: "",
      time: "",
      duration: 60,
      interviewer: "",
      meetingLink: "",
      notes: "",
    },
  });

  const handleFormSubmit = async (data) => {
    await onSubmit(data);

    // Clear form only after scheduling a new interview
    if (!initialData) {
      reset({
        candidate: "",
        job: "",
        type: "",
        status: "Scheduled",
        date: "",
        time: "",
        duration: 60,
        interviewer: "",
        meetingLink: "",
        notes: "",
      });
    }
  };

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset({
        candidate: "",
        job: "",
        type: "",
        status: "Scheduled",
        date: "",
        time: "",
        duration: 60,
        interviewer: "",
        meetingLink: "",
        notes: "",
      });
    }
  }, [initialData, reset]);

  return (
    <form className="interview-form" onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className="form-title">
        {initialData ? "Update Interview" : "Schedule Interview"}
      </h2>

      <div className="form-grid">
        {/* Candidate */}
        <div className="form-group">
          <label>Candidate</label>

          <input {...register("candidate")} placeholder="Candidate Name" />

          <p className="error">{errors.candidate?.message}</p>
        </div>

        {/* Job */}
        <div className="form-group">
          <label>Job</label>

          <input {...register("job")} placeholder="React Developer" />

          <p className="error">{errors.job?.message}</p>
        </div>

        {/* Interview Type */}
        <div className="form-group">
          <label>Interview Type</label>

          <select {...register("type")}>
            <option value="">Select Interview Type</option>

            {INTERVIEW_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <p className="error">{errors.type?.message}</p>
        </div>

        {/* Status */}
        <div className="form-group">
          <label>Status</label>

          <select {...register("status")}>
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <p className="error">{errors.status?.message}</p>
        </div>

        {/* Date */}
        <div className="form-group">
          <label>Date</label>

          <input type="date" {...register("date")} />

          <p className="error">{errors.date?.message}</p>
        </div>

        {/* Time */}
        <div className="form-group">
          <label>Time</label>

          <input type="time" {...register("time")} />

          <p className="error">{errors.time?.message}</p>
        </div>

        {/* Duration */}
        <div className="form-group">
          <label>Duration (Minutes)</label>

          <input type="number" {...register("duration")} />

          <p className="error">{errors.duration?.message}</p>
        </div>

        {/* Interviewer */}
        <div className="form-group">
          <label>Interviewer</label>

          <input {...register("interviewer")} placeholder="Rahul Sharma" />

          <p className="error">{errors.interviewer?.message}</p>
        </div>

        {/* Meeting Link */}
        <div className="form-group full-width">
          <label>Meeting Link</label>

          <input
            {...register("meetingLink")}
            placeholder="https://meet.google.com/..."
          />

          <p className="error">{errors.meetingLink?.message}</p>
        </div>

        {/* Notes */}
        <div className="form-group full-width">
          <label>Notes</label>

          <textarea
            rows={4}
            {...register("notes")}
            placeholder="Interview notes..."
          />

          <p className="error">{errors.notes?.message}</p>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {initialData ? "Update Interview" : "Schedule Interview"}
        </button>

        <button type="button" className="btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default InterviewForm;
