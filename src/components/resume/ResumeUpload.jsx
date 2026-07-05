import { useResumeUpload } from "../../hooks/useResumeUpload";
import DropZone from "./DropZone";

const ResumeUpload = () => {
  const {
    file,
    setFile,
    error,
    setError,
    isDragging,
    setIsDragging,
  } = useResumeUpload();

  return (
    <>
      <DropZone
        onFileSelect={setFile}
        setError={setError}
        isDragging={isDragging}
        setIsDragging={setIsDragging}
      />

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}

      {file && (
        <p style={{ marginTop: "10px" }}>
          Selected: {file.name}
        </p>
      )}
    </>
  );
};

export default ResumeUpload;