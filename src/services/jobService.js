import axiosInstance from "../api/axios";

import { jobData } from "../constants/jobData";

/**
 * Get All Jobs
 * Currently returns mock data.
 * Replace with API later.
 */
export const getJobs = async () => {
  try {
    // Future API
    // const response = await axiosInstance.get("/jobs");
    // return response.data;

    return Promise.resolve(jobData);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

/**
 * Get Job By ID
 */
export const getJobById = async (jobId) => {
  try {
    // Future API
    // const response = await axiosInstance.get(`/jobs/${jobId}`);
    // return response.data;

    const job = jobData.find(
      (item) => item.id === Number(jobId)
    );

    return Promise.resolve(job);
  } catch (error) {
    console.error("Error fetching job:", error);
    throw error;
  }
};

/**
 * Search Jobs
 */
export const searchJobs = async (filters = {}) => {
  try {
    // Future API
    // const response = await axiosInstance.get("/jobs", {
    //   params: filters,
    // });
    // return response.data;

    let jobs = [...jobData];

    if (filters.keyword) {
      const keyword = filters.keyword.toLowerCase();

      jobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(keyword) ||
          job.company.toLowerCase().includes(keyword)
      );
    }

    if (filters.location) {
      jobs = jobs.filter(
        (job) => job.location === filters.location
      );
    }

    if (filters.experience) {
      jobs = jobs.filter(
        (job) => job.experience === filters.experience
      );
    }

    if (filters.employmentType) {
      jobs = jobs.filter(
        (job) =>
          job.employmentType ===
          filters.employmentType
      );
    }

    return Promise.resolve(jobs);
  } catch (error) {
    console.error("Search failed:", error);
    throw error;
  }
};

/**
 * Apply Job
 */
export const applyJob = async (jobId) => {
  try {
    // Future API
    // const response = await axiosInstance.post(
    //   `/jobs/${jobId}/apply`
    // );
    // return response.data;

    return Promise.resolve({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (error) {
    console.error("Application failed:", error);
    throw error;
  }
};