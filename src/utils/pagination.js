/**
 * Calculate Total Pages
 * @param {number} totalItems
 * @param {number} pageSize
 * @returns {number}
 */
export const calculateTotalPages = (
  totalItems,
  pageSize
) => {
  if (pageSize <= 0) return 0;

  return Math.ceil(totalItems / pageSize);
};

/**
 * Get Items for Current Page
 * @param {Array} items
 * @param {number} currentPage
 * @param {number} pageSize
 * @returns {Array}
 */
export const paginate = (
  items = [],
  currentPage = 1,
  pageSize = 10
) => {
  const startIndex =
    (currentPage - 1) * pageSize;

  const endIndex =
    startIndex + pageSize;

  return items.slice(
    startIndex,
    endIndex
  );
};

/**
 * Generate Page Numbers
 * Example:
 * totalPages = 5
 * returns [1,2,3,4,5]
 */
export const getPageNumbers = (
  totalPages
) => {
  return Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
};

/**
 * Check Previous Page
 */
export const hasPreviousPage = (
  currentPage
) => {
  return currentPage > 1;
};

/**
 * Check Next Page
 */
export const hasNextPage = (
  currentPage,
  totalPages
) => {
  return currentPage < totalPages;
};

/**
 * Get Page Information
 */
export const getPaginationInfo = (
  totalItems,
  currentPage,
  pageSize
) => {
  if (totalItems === 0) {
    return {
      start: 0,
      end: 0,
      total: 0,
    };
  }

  const start =
    (currentPage - 1) * pageSize + 1;

  const end = Math.min(
    currentPage * pageSize,
    totalItems
  );

  return {
    start,
    end,
    total: totalItems,
  };
};