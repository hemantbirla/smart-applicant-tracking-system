// Maximum file size (5 MB)
export const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Allowed MIME Types
export const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

// Allowed File Extensions
export const ALLOWED_EXTENSIONS = [
  ".pdf",
  ".doc",
  ".docx",
];

// Upload Messages
export const UPLOAD_MESSAGES = {
  REQUIRED: "Please select a resume.",
  INVALID_TYPE: "Only PDF, DOC and DOCX files are allowed.",
  FILE_TOO_LARGE: "File size must not exceed 5 MB.",
};

// Upload Status
export const UPLOAD_STATUS = {
  IDLE: "idle",
  VALIDATING: "validating",
  READY: "ready",
  UPLOADING: "uploading",
  SUCCESS: "success",
  ERROR: "error",
};