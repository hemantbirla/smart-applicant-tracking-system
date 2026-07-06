const ResumeSelector = ({
  register,
  errors,
}) => {
  return (
    <div className="form-group">
      <label>Resume</label>

      <select
        {...register("resume")}
        className="form-control"
      >
        <option value="">
          Select Resume
        </option>

        <option value="resume.pdf">
          Hemant_Birla_Resume.pdf
        </option>
      </select>

      {errors.resume && (
        <p className="form-error">
          {errors.resume.message}
        </p>
      )}
    </div>
  );
};

export default ResumeSelector;