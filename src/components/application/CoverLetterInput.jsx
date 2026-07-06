const CoverLetterInput = ({
  register,
  error,
}) => {
  return (
    <div className="form-group">
      <label>
        Cover Letter
      </label>

      <textarea
        rows={6}
        placeholder="Write your cover letter..."
        className="form-control"
        {...register("coverLetter")}
      />

      {error && (
        <p className="form-error">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default CoverLetterInput;