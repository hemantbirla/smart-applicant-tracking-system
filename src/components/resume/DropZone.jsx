import { useRef } from "react";

import { validateResumeFile } from "../../utils/fileValidation";

import "../../styles/resume.css";

const DropZone = ({
  onFileSelect,
  setError,
  isDragging,
  setIsDragging,
}) => {
  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;

    const validation = validateResumeFile(file);

    if (!validation.valid) {
      setError(validation.message);
      return;
    }

    setError("");
    onFileSelect(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    setIsDragging(false);

    const file = e.dataTransfer.files[0];

    handleFile(file);
  };

  const handleBrowse = (e) => {
    const file = e.target.files[0];

    handleFile(file);
  };

  return (
    <>
      <div
        className={`drop-zone ${
          isDragging ? "dragging" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
      >
        <div className="drop-zone-icon">
          📄
        </div>

        <h3>Drag & Drop Resume</h3>

        <p>or</p>

        <button
          type="button"
          className="browse-btn"
        >
          Browse Files
        </button>

        <small>
          PDF • DOC • DOCX
        </small>

        <small>
          Maximum File Size: 5 MB
        </small>

        <input
          ref={fileInputRef}
          type="file"
          hidden
          accept=".pdf,.doc,.docx"
          onChange={handleBrowse}
        />
      </div>
    </>
  );
};

export default DropZone;