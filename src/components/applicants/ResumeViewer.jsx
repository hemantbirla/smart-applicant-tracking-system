import { FiDownload, FiX } from "react-icons/fi";
import "../../styles/applicants.css";

const ResumeViewer = ({
  isOpen,
  resumeUrl,
  applicantName,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="resume-modal">

        <div className="resume-header">
          <h2>{applicantName} Resume</h2>

          <button
            className="icon-btn"
            onClick={onClose}
          >
            <FiX />
          </button>
        </div>

        <iframe
          src={resumeUrl}
          title="Resume"
          className="resume-frame"
        />

        <div className="resume-footer">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            download
            className="resume-download-btn"
          >
            <FiDownload />
            Download Resume
          </a>
        </div>

      </div>
    </div>
  );
};

export default ResumeViewer;