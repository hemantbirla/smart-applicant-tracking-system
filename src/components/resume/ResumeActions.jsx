import "../../styles/resume.css";

const ResumeActions = ({
  file,
  uploading,
  onUpload,
  onReplace,
  onRemove,
}) => {
  return (
    <div className="resume-actions">
      {!file ? (
        <button
          type="button"
          className="resume-btn primary"
          disabled
        >
          Upload Resume
        </button>
      ) : (
        <>
          <button
            type="button"
            className="resume-btn primary"
            onClick={onUpload}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload Resume"}
          </button>

          <button
            type="button"
            className="resume-btn secondary"
            onClick={onReplace}
            disabled={uploading}
          >
            Replace Resume
          </button>

          <button
            type="button"
            className="resume-btn danger"
            onClick={onRemove}
            disabled={uploading}
          >
            Remove Resume
          </button>
        </>
      )}
    </div>
  );
};

export default ResumeActions;