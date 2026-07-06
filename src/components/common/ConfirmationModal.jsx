const ConfirmationModal = ({
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="modal-overlay">
      <div className="confirm-modal">

        <h3>{title}</h3>

        <p>{message}</p>

        <div className="confirm-actions">

          <button
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
          >
            Confirm
          </button>

        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;