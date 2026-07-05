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

      <button
        type="button"
        className="resume-btn primary"
        onClick={onUpload}
        disabled={!file || uploading}
      >
        {uploading ? "Uploading..." : "Upload Resume"}
      </button>

      <button
        type="button"
        className="resume-btn secondary"
        onClick={onReplace}
        disabled={!file || uploading}
      >
        Replace Resume
      </button>

      <button
        type="button"
        className="resume-btn danger"
        onClick={onRemove}
        disabled={!file || uploading}
      >
        Remove Resume
      </button>

    </div>
  );
};

export default ResumeActions;