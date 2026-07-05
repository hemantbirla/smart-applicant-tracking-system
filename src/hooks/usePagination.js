import { useMemo, useState } from "react";

import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
} from "../constants/pagination";

import {
  paginate,
  calculateTotalPages,
} from "../utils/pagination";

const usePagination = (
  items = [],
  pageSize = DEFAULT_PAGE_SIZE
) => {
  const [currentPage, setCurrentPage] =
    useState(DEFAULT_PAGE);

  // Total Pages
  const totalPages = useMemo(() => {
    return calculateTotalPages(
      items.length,
      pageSize
    );
  }, [items, pageSize]);

  // Current Page Data
  const currentItems = useMemo(() => {
    return paginate(
      items,
      currentPage,
      pageSize
    );
  }, [items, currentPage, pageSize]);

  // Next Page
  const nextPage = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, totalPages)
    );
  };

  // Previous Page
  const previousPage = () => {
    setCurrentPage((prev) =>
      Math.max(prev - 1, 1)
    );
  };

  // Go to Specific Page
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Reset Pagination
  const resetPagination = () => {
    setCurrentPage(DEFAULT_PAGE);
  };

  return {
    currentItems,
    currentPage,
    pageSize,
    totalPages,

    setCurrentPage,
    nextPage,
    previousPage,
    goToPage,
    resetPagination,
  };
};

export default usePagination;