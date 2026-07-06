export const APPLICATION_STATUS = {
  APPLIED: "Applied",

  UNDER_REVIEW: "Under Review",

  INTERVIEW: "Interview Scheduled",

  SHORTLISTED: "Shortlisted",

  OFFER: "Offer",

  REJECTED: "Rejected",

  WITHDRAWN: "Withdrawn",
};

export const WITHDRAW_ALLOWED = [
  APPLICATION_STATUS.APPLIED,
  APPLICATION_STATUS.UNDER_REVIEW,
];