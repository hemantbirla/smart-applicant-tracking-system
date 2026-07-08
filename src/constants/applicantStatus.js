// ==========================================
// Applicant Status List
// ==========================================

export const APPLICANT_STATUS = [
  "Applied",
  "Screening",
  "Interview Scheduled",
  "Technical Round",
  "HR Round",
  "Selected",
  "Offer",
  "Hired",
  "Rejected",
  "Withdrawn",
];

// ==========================================
// Status Badge Colors
// ==========================================

export const STATUS_COLORS = {
  Applied: "#2563EB",
  Screening: "#F59E0B",
  "Interview Scheduled": "#8B5CF6",
  "Technical Round": "#0EA5E9",
  "HR Round": "#14B8A6",
  Selected: "#22C55E",
  Offer: "#10B981",
  Hired: "#059669",
  Rejected: "#EF4444",
  Withdrawn: "#6B7280",
};

// ==========================================
// Status Background Colors
// ==========================================

export const STATUS_BACKGROUNDS = {
  Applied: "#DBEAFE",
  Screening: "#FEF3C7",
  "Interview Scheduled": "#EDE9FE",
  "Technical Round": "#E0F2FE",
  "HR Round": "#CCFBF1",
  Selected: "#DCFCE7",
  Offer: "#D1FAE5",
  Hired: "#A7F3D0",
  Rejected: "#FEE2E2",
  Withdrawn: "#E5E7EB",
};

// ==========================================
// Default Filters
// ==========================================

export const DEFAULT_APPLICANT_FILTERS = {
  search: "",
  status: "All",
  sortBy: "Newest",
};

// ==========================================
// Sort Options
// ==========================================

export const APPLICANT_SORT_OPTIONS = [
  "Newest",
  "Oldest",
  "Name (A-Z)",
  "Name (Z-A)",
  "Experience (High-Low)",
  "Experience (Low-High)",
];