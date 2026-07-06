import JobCard from "./JobCard";
import Pagination from "./Pagination";
import InfiniteLoader from "./InfiniteLoader";
import EmptyState from "./EmptyState";

const JobList = ({
  jobs = [],

  // Pagination
  currentPage = 1,
  totalPages = 1,
  onPageChange,

  // Infinite Scroll
  useInfiniteScroll = false,
  lastElementRef,
  hasMore = false,

  // Loading
  loading = false,
}) => {
  // Initial Loading
  if (loading && jobs.length === 0) {
    return <InfiniteLoader />;
  }

  // Empty State
  if (!loading && jobs.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <div className="job-list">
        {jobs.map((job, index) => {
          const isLastItem = index === jobs.length - 1;

          return (
            <div
              key={job.id}
              ref={
                useInfiniteScroll &&
                isLastItem &&
                hasMore
                  ? lastElementRef
                  : null
              }
            >
              <JobCard job={job} />
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {!useInfiniteScroll && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}

      {/* Infinite Scroll Loader */}
      {useInfiniteScroll &&
        loading &&
        jobs.length > 0 && <InfiniteLoader />}
    </>
  );
};

export default JobList;