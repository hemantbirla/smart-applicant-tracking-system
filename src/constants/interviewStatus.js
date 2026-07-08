export const INTERVIEW_STATUS = {
  SCHEDULED: "Scheduled",
  CONFIRMED: "Confirmed",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
  RESCHEDULED: "Rescheduled",
  NO_SHOW: "No Show",
};

export const STATUS_OPTIONS = Object.values(INTERVIEW_STATUS);

export const STATUS_COLORS = {
  Scheduled: "#2563EB",
  Confirmed: "#10B981",
  Completed: "#16A34A",
  Cancelled: "#DC2626",
  Rescheduled: "#F59E0B",
  "No Show": "#6B7280",
};