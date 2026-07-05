import {
  MAX_FILE_SIZE,
  ALLOWED_TYPES,
  ALLOWED_EXTENSIONS,
  UPLOAD_MESSAGES,
} from "../constants/uploadConfig";

/**
 * Validate Resume File
 * @param {File} file
 * @returns {{ valid: boolean, message: string }}
 */
export const validateResumeFile = (file) => {
  if (!file) {
    return {
      valid: false,
      message: UPLOAD_MESSAGES.REQUIRED,
    };
  }

  // Validate File Size
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      message: UPLOAD_MESSAGES.FILE_TOO_LARGE,
    };
  }

  // Validate MIME Type
  if (!ALLOWED_TYPES.includes(file.type)) {
    return {
      valid: false,
      message: UPLOAD_MESSAGES.INVALID_TYPE,
    };
  }

  // Validate Extension
  const extension = `.${file.name.split(".").pop().toLowerCase()}`;

  if (!ALLOWED_EXTENSIONS.includes(extension)) {
    return {
      valid: false,
      message: UPLOAD_MESSAGES.INVALID_TYPE,
    };
  }

  return {
    valid: true,
    message: "",
  };
};


/**
 * Convert bytes to readable format
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";

  const units = ["Bytes", "KB", "MB", "GB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1024));

  return `${(bytes / Math.pow(1024, index)).toFixed(2)} ${units[index]}`;
};

/**
 * Get File Extension
 */
export const getFileExtension = (fileName) => {
  return fileName.split(".").pop().toUpperCase();
};

/**
 * Format Last Modified Date
 */
export const formatLastModified = (timestamp) => {
  return new Date(timestamp).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};