export const getStatusColor = (
  status
) => {

  switch (status) {

    case "Applied":
      return "#2563EB";

    case "Interview":
      return "#F59E0B";

    case "Offer":
      return "#10B981";

    case "Rejected":
      return "#EF4444";

    default:
      return "#6B7280";

  }

};