import "../../styles/resume.css";

const UploadProgress = ({
  progress = 0,
  uploading = false,
}) => {
  if (!uploading) return null;

  return (
    <div className="upload-progress-card">
      <div className="upload-progress-header">
        <span>Uploading Resume...</span>

        <span>{progress}%</span>
      </div>

      <div className="upload-progress-bar">
        <div
          className="upload-progress-fill"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>

      <p className="upload-progress-text">
        Please wait while your resume is being uploaded.
      </p>
    </div>
  );
};

export default UploadProgress;