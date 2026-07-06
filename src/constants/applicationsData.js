import { APPLICATION_STATUS } from "./applicationStatus";

const applications = [
  {
    id: 1,
    jobId: 101,
    company: "Google",
    position: "Frontend Developer",
    location: "Remote",
    appliedDate: "2026-07-02",
    status: APPLICATION_STATUS.APPLIED,
  },
  {
    id: 2,
    jobId: 102,
    company: "Amazon",
    position: "React Developer",
    location: "Hyderabad",
    appliedDate: "2026-06-30",
    status: APPLICATION_STATUS.INTERVIEW,
  },
  {
    id: 3,
    jobId: 103,
    company: "Microsoft",
    position: "MERN Stack Developer",
    location: "Bangalore",
    appliedDate: "2026-06-28",
    status: APPLICATION_STATUS.REJECTED,
  },
];

export default applications;