import "../../styles/application.css";

const WithdrawConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="confirm-modal">
        <h2>
          Withdraw Application
        </h2>

        <p>
          Are you sure you want to withdraw
          this application?
        </p>

        <div className="confirm-actions">
          <button
            className="secondary-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="danger-btn"
            onClick={onConfirm}
            disabled={loading}
          >
            {loading
              ? "Withdrawing..."
              : "Withdraw"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawConfirmationModal;