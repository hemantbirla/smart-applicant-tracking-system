import {
  APPLICATION_STATUS,
} from "../../constants/applicationStatus";

const WithdrawApplicationButton = ({
  application,
  onWithdraw,
}) => {
  const canWithdraw =
    application.status ===
      APPLICATION_STATUS.APPLIED ||
    application.status ===
      APPLICATION_STATUS.UNDER_REVIEW;

  return (
    <button
      className="withdraw-btn"
      disabled={!canWithdraw}
      onClick={() =>
        onWithdraw(application.id)
      }
    >
      Withdraw
    </button>
  );
};

export default WithdrawApplicationButton;