import { useState, useCallback } from "react";

import { validateResumeFile } from "../utils/fileValidation";

const useResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  /**
   * Validate and store selected file
   */
  const handleFileSelect = useCallback((selectedFile) => {
    if (!selectedFile) return false;

    const validation = validateResumeFile(selectedFile);

    if (!validation.isValid) {
      setError(validation.message);
      setFile(null);
      return false;
    }

    setError("");
    setFile(selectedFile);

    return true;
  }, []);

  /**
   * Remove current resume
   */
  const removeFile = useCallback(() => {
    setFile(null);
    setError("");
    setProgress(0);
    setUploading(false);
  }, []);

  /**
   * Drag Events
   */

  const handleDragEnter = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();

    setDragActive(true);
  }, []);

  const handleDragLeave = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();

    setDragActive(false);
  }, []);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();

    setDragActive(true);
  }, []);

  const handleDrop = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      setDragActive(false);

      const droppedFile = event.dataTransfer.files[0];

      handleFileSelect(droppedFile);
    },
    [handleFileSelect]
  );

  /**
   * Upload State Helpers
   */

  const startUpload = () => {
    setUploading(true);
    setProgress(0);
  };

  const updateProgress = (value) => {
    setProgress(value);
  };

  const finishUpload = () => {
    setUploading(false);
    setProgress(100);
  };

  const failUpload = (message) => {
    setUploading(false);
    setError(message);
  };

  return {
    file,
    dragActive,
    uploading,
    progress,
    error,

    handleFileSelect,
    removeFile,

    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,

    startUpload,
    updateProgress,
    finishUpload,
    failUpload,
  };
};

export default useResumeUpload;