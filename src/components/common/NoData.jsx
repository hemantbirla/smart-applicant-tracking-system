import { FiInbox } from "react-icons/fi";

import "../../styles/common.css";

const NoData = ({
  title = "No Data Found",
  description = "There is nothing to display at the moment.",
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="no-data">
      <div className="no-data-icon">
        <FiInbox />
      </div>

      <h3 className="no-data-title">{title}</h3>

      <p className="no-data-description">
        {description}
      </p>

      {buttonText && (
        <button
          className="no-data-button"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default NoData;