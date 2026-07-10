import { memo } from "react";

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Smart Applicant Tracking System</p>
    </footer>
  );
};

export default memo(Footer);