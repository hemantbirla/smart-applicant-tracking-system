import { useState } from "react";

import { validateResumeFile } from "../utils/fileValidation";
import { uploadResume, deleteResume } from "../services/resumeService";

const USE_MOCK_UPLOAD = true;

const useResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const selectFile = (selectedFile) => {
    if (!selectedFile) return;

    const { valid, message } = validateResumeFile(selectedFile);

    if (!valid) {
      setError(message);
      setFile(null);
      return;
    }

    setError("");
    setFile(selectedFile);
  };

  const handleFileChange = (event) => {
    selectFile(event.target.files[0]);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragActive(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);

    if (event.dataTransfer.files.length > 0) {
      selectFile(event.dataTransfer.files[0]);
    }
  };

  const removeFile = async () => {
    try {
      if (!USE_MOCK_UPLOAD) {
        await deleteResume();
      }
    } catch (error) {
      console.error(error);
    }

    setFile(null);
    setProgress(0);
    setUploading(false);
    setError("");
  };

  const uploadFile = async () => {
    if (!file) return;

    setUploading(true);
    setProgress(0);

    // ---------- Mock Upload ----------
    if (USE_MOCK_UPLOAD) {
      return new Promise((resolve) => {
        let value = 0;

        const timer = setInterval(() => {
          value += 10;

          setProgress(value);

          if (value >= 100) {
            clearInterval(timer);
            setUploading(false);

            resolve({
              success: true,
            });
          }
        }, 200);
      });
    }

    // ---------- Real API ----------
    try {
      await uploadResume(file, (event) => {
        const percent = Math.round(
          (event.loaded * 100) / event.total
        );

        setProgress(percent);
      });
    } finally {
      setUploading(false);
    }
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