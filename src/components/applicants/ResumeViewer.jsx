const ResumeViewer = ({ applicant }) => {
  if (!applicant) return null;

  return (
    <div className="resume-viewer">
      <h3>Resume</h3>

      <p>
        <strong>File:</strong> {applicant.resume}
      </p>

      <div className="resume-buttons">
        <button className="primary-btn">
          View Resume
        </button>

        <button className="secondary-btn">
          Download
        </button>
      </div>
    </div>
  );
};

export default ResumeViewer;