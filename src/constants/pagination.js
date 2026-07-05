// =========================================
// Pagination Configuration
// =========================================

// Default page shown when component loads
export const DEFAULT_PAGE = 1;

// Default number of records per page
export const DEFAULT_PAGE_SIZE = 3;

// Page size options (for future dropdown)
export const PAGE_SIZE_OPTIONS = [
  5,
  10,
  20,
  50,
];

// Maximum page buttons to display
export const MAX_PAGE_BUTTONS = 5;

// Infinite Scroll Configuration
export const INFINITE_SCROLL = {
  PAGE_SIZE: 10,
  ROOT_MARGIN: "200px",
  THRESHOLD: 0.5,
};

// Pagination Labels
export const PAGINATION_LABELS = {
  PREVIOUS: "Previous",
  NEXT: "Next",
  FIRST: "First",
  LAST: "Last",
};

// Empty State Messages
export const PAGINATION_MESSAGES = {
  NO_DATA: "No jobs found.",
  LOADING: "Loading jobs...",
  LOAD_MORE: "Loading more jobs...",
};