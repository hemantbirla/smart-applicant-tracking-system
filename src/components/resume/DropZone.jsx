import { useRef } from "react";

import "../../styles/resume.css";

const DropZone = ({
  dragActive,
  onFileChange,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
}) => {
  const inputRef = useRef(null);

  return (
    <>
      <div
        className={`drop-zone ${
          dragActive ? "dragging" : ""
        }`}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onClick={() =>
          inputRef.current.click()
        }
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

        <small>Maximum 5 MB</small>

        <input
          ref={inputRef}
          hidden
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={onFileChange}
        />
      </div>
    </>
  );
};

export default DropZone;