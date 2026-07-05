import jobData from "../constants/jobData";

const delay = (ms = 600) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/*
====================================
Get All Jobs
====================================
*/
export const getJobs = async () => {
  await delay();

  return [...jobData];
};

/*
====================================
Get Single Job
====================================
*/
export const getJobById = async (id) => {
  await delay();

  return jobData.find(
    (job) => job.id === Number(id)
  );
};

/*
====================================
Search Jobs
====================================
*/
export const searchJobs = async () => {
  await delay();

  return [...jobData];
};

/*
====================================
Apply Job
====================================
*/
export const applyJob = async (jobId) => {
  await delay();

  return {
    success: true,
    jobId,
    message: "Application submitted successfully.",
  };
};

/*
====================================
Save Job
====================================
*/
export const saveJob = async (jobId) => {
  await delay();

  return {
    success: true,
    jobId,
    message: "Job saved successfully.",
  };
};

/*
====================================
Remove Saved Job
====================================
*/
export const removeSavedJob = async (jobId) => {
  await delay();

  return {
    success: true,
    jobId,
    message: "Saved job removed.",
  };
};