const ResumeSelector = ({
  register,
  error,
}) => {
  return (
    <div className="form-group">
      <label>
        Resume
      </label>

      <select
        {...register("resume")}
        className="form-control"
      >
        <option value="">
          Select Resume
        </option>

        <option value="Hemant_Birla_Resume.pdf">
          Hemant_Birla_Resume.pdf
        </option>
      </select>

      {error && (
        <p className="form-error">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default ResumeSelector;