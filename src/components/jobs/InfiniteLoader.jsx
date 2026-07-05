const InfiniteLoader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="infinite-loader">
      <div className="loader-spinner"></div>

      <p>Loading more jobs...</p>
    </div>
  );
};

export default InfiniteLoader;