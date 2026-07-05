import { toast } from "react-toastify";

import DropZone from "./DropZone";
import ResumePreview from "./ResumePreview";
import UploadProgress from "./UploadProgress";
import ResumeActions from "./ResumeActions";

import useResumeUpload from "../../hooks/useResumeUpload";

import "../../styles/resume.css";

const ResumeUpload = () => {
  const {
    file,
    error,
    dragActive,
    progress,
    uploading,
    handleFileChange,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    removeFile,
    uploadFile,
  } = useResumeUpload();

  const handleUpload = async () => {
    try {
      await uploadFile();
      toast.success("Resume uploaded successfully.");
    } catch {
      toast.error("Resume upload failed.");
    }
  };

  return (
    <div className="resume-upload-card">
      <h2 className="resume-title">Resume Upload</h2>

      <DropZone
        dragActive={dragActive}
        onFileChange={handleFileChange}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      />

      {error && <p className="resume-error">{error}</p>}

      {file && (
        <>
          <ResumePreview
            file={file}
            onRemove={removeFile}
          />

          <UploadProgress
            progress={progress}
            uploading={uploading}
          />
        </>
      )}

      <ResumeActions
        file={file}
        uploading={uploading}
        onUpload={handleUpload}
        onReplace={removeFile}
        onRemove={removeFile}
      />
    </div>
  );
};

export default ResumeUpload;