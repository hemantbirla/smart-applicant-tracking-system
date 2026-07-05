import jobData from "../constants/jobData";

/*
====================================
Get All Jobs
====================================
*/
export const getJobs = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jobData);
    }, 600);
  });
};

/*
====================================
Get Single Job
====================================
*/
export const getJobById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        jobData.find((job) => job.id === Number(id))
      );
    }, 500);
  });
};

/*
====================================
Search Jobs
====================================
*/
export const searchJobs = async () => {
  return jobData;
};

/*
====================================
Apply Job
====================================
*/
export const applyJob = async () => {
  return {
    success: true,
    message: "Applied Successfully",
  };
};