const DeleteJobModal = ({
  isOpen,
  onClose,
  onConfirm,
  jobTitle,
  loading = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="delete-modal">
        <h2 className="delete-title">
          Delete Job
        </h2>

        <p className="delete-message">
          Are you sure you want to delete
          <strong> {jobTitle}</strong>?
        </p>

        <p className="delete-warning">
          This action cannot be undone.
        </p>

        <div className="delete-actions">
          <button
            type="button"
            className="modal-btn cancel-btn"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </button>

          <button
            type="button"
            className="modal-btn delete-btn"
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteJobModal;