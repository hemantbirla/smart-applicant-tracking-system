const CoverLetterInput = ({
  register,
  errors,
}) => {
  return (
    <div className="form-group">
      <label>Cover Letter</label>

      <textarea
        rows={6}
        placeholder="Write your cover letter..."
        {...register("coverLetter")}
        className="form-control"
      />

      {errors.coverLetter && (
        <p className="form-error">
          {errors.coverLetter.message}
        </p>
      )}
    </div>
  );
};

export default CoverLetterInput;