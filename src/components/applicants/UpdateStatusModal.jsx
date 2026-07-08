import { useEffect, useState } from "react";

import { APPLICANT_STATUS } from "../../constants/applicantStatus";

const UpdateStatusModal = ({
  isOpen,
  applicant,
  onClose,
  onSave,
}) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (applicant) {
      setStatus(applicant.status);
    }
  }, [applicant]);

  if (!isOpen || !applicant) return null;

  return (
    <div className="modal-overlay">
      <div className="status-modal">

        <h2>Update Applicant Status</h2>

        <p>
          {applicant.firstName} {applicant.lastName}
        </p>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          {APPLICANT_STATUS.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

        <div className="modal-actions">
          <button
            className="secondary-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="primary-btn"
            onClick={() => onSave(status)}
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default UpdateStatusModal;