import {
  FiFileText,
  FiTrash2,
  FiCalendar,
  FiHardDrive,
} from "react-icons/fi";

import "../../styles/resume.css";

const ResumePreview = ({ file, onRemove }) => {
  if (!file) return null;

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} Bytes`;

    if (bytes < 1024 * 1024)
      return `${(bytes / 1024).toFixed(2)} KB`;

    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const extension = file.name.split(".").pop().toUpperCase();

  const lastModified = new Date(
    file.lastModified
  ).toLocaleDateString();

  return (
    <div className="resume-preview">
      <div className="resume-icon">
        <FiFileText />
      </div>

      <div className="resume-details">
        <h3>{file.name}</h3>

        <div className="resume-meta">
          <span>
            <FiHardDrive />
            {formatFileSize(file.size)}
          </span>

          <span>
            <FiCalendar />
            {lastModified}
          </span>

          <span className="resume-extension">
            {extension}
          </span>
        </div>
      </div>

      <button
        type="button"
        className="resume-remove-btn"
        onClick={onRemove}
      >
        <FiTrash2 />

        Remove
      </button>
    </div>
  );
};

export default ResumePreview;