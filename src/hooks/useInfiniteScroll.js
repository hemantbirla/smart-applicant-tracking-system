import { useCallback, useRef } from "react";

const useInfiniteScroll = ({
  loading,
  hasMore,
  onLoadMore,
}) => {
  const observer = useRef(null);

  const lastElementRef = useCallback(
    (node) => {
      // Don't observe while loading
      if (loading) return;

      // Remove previous observer
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(
        (entries) => {
          const firstEntry = entries[0];

          if (
            firstEntry.isIntersecting &&
            hasMore
          ) {
            onLoadMore();
          }
        },
        {
          root: null,
          rootMargin: "100px",
          threshold: 0.1,
        }
      );

      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore, onLoadMore]
  );

  return {
    lastElementRef,
  };
};

export default useInfiniteScroll;