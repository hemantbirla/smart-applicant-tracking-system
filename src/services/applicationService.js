import applications from "../constants/applicationsData";

import { APPLICATION_STATUS } from "../constants/applicationStatus";

// Local Mock Database
let applicationList = [...applications];

/**
 * Get all applications
 */
export const getApplications = async () => {
  return Promise.resolve(applicationList);
};

/**
 * Get application by ID
 */
export const getApplicationById = async (id) => {
  const application = applicationList.find(
    (item) => item.id === Number(id)
  );

  return Promise.resolve(application);
};

/**
 * Check if candidate already applied for a job
 */
export const hasApplied = async (jobId) => {
  const exists = applicationList.some(
    (item) => item.jobId === Number(jobId)
  );

  return Promise.resolve(exists);
};

/**
 * Apply for a job
 */
export const applyJob = async (jobId, data) => {
  const alreadyApplied = applicationList.some(
    (item) => item.jobId === Number(jobId)
  );

  if (alreadyApplied) {
    return Promise.reject(
      new Error("You have already applied for this job.")
    );
  }

  const newApplication = {
    id: Date.now(),

    jobId: Number(jobId),

    company: data.company,

    position: data.position,

    location: data.location,

    resume: data.resume,

    coverLetter: data.coverLetter,

    portfolio: data.portfolio || "",

    linkedin: data.linkedin || "",

    appliedDate: new Date()
      .toISOString()
      .split("T")[0],

    status: APPLICATION_STATUS.APPLIED,
  };

  applicationList.unshift(newApplication);

  return Promise.resolve(newApplication);
};

/**
 * Withdraw application
 */
export const withdrawApplication = async (id) => {
  applicationList = applicationList.map((item) =>
    item.id === Number(id)
      ? {
          ...item,
          status: APPLICATION_STATUS.WITHDRAWN,
        }
      : item
  );

  return Promise.resolve(true);
};