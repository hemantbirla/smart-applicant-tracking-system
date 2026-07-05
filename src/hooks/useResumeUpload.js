import { useState } from "react";

import { validateFile } from "../utils/fileValidation";

const useResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  // Select File
  const selectFile = (selectedFile) => {
    if (!selectedFile) return;

    const validationError = validateFile(selectedFile);

    if (validationError) {
      setError(validationError);
      setFile(null);
      return;
    }

    setError("");
    setFile(selectedFile);
  };

  // Browse File
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    selectFile(selectedFile);
  };

  // Drag Events
  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setDragActive(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setDragActive(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setDragActive(true);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setDragActive(false);

    const droppedFile = event.dataTransfer.files[0];

    selectFile(droppedFile);
  };

  // Remove Resume
  const removeFile = () => {
    setFile(null);
    setProgress(0);
    setUploading(false);
    setError("");
  };

  /*
    Placeholder Upload

    Will be replaced with:

    await resumeService.uploadResume(file);

    during API Integration.
  */

  const uploadFile = async () => {
    if (!file) return;

    setUploading(true);

    setProgress(0);

    const timer = setInterval(() => {
      setProgress((previous) => {
        if (previous >= 100) {
          clearInterval(timer);

          setUploading(false);

          return 100;
        }

        return previous + 10;
      });
    }, 200);
  };

  return {
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
  };
};

export default useResumeUpload;