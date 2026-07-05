import jobData from "../constants/jobData";

const delay = (ms = 600) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/*
====================================
Get Jobs (Pagination Ready)
====================================
*/
export const getJobs = async ({
  page = 1,
  limit = 10,
  search = "",
  location = "",
  experience = "",
  employmentType = "",
  workMode = "",
  sort = "",
} = {}) => {
  await delay();

  let jobs = [...jobData];

  /*
  ==========================
  Search
  ==========================
  */
  if (search.trim()) {
    const keyword = search.toLowerCase();

    jobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(keyword)
        )
    );
  }

  /*
  ==========================
  Location
  ==========================
  */
  if (location) {
    jobs = jobs.filter(
      (job) => job.location === location
    );
  }

  /*
  ==========================
  Experience
  ==========================
  */
  if (experience) {
    jobs = jobs.filter(
      (job) => job.experience === experience
    );
  }

  /*
  ==========================
  Employment Type
  ==========================
  */
  if (employmentType) {
    jobs = jobs.filter(
      (job) =>
        job.employmentType === employmentType
    );
  }

  /*
  ==========================
  Work Mode
  ==========================
  */
  if (workMode) {
    jobs = jobs.filter(
      (job) => job.workMode === workMode
    );
  }

  /*
  ==========================
  Sorting
  ==========================
  */

  switch (sort) {
    case "latest":
      jobs.sort(
        (a, b) =>
          new Date(b.postedDate) -
          new Date(a.postedDate)
      );
      break;

    case "oldest":
      jobs.sort(
        (a, b) =>
          new Date(a.postedDate) -
          new Date(b.postedDate)
      );
      break;

    case "company":
      jobs.sort((a, b) =>
        a.company.localeCompare(b.company)
      );
      break;

    default:
      break;
  }

  /*
  ==========================
  Pagination
  ==========================
  */

  const total = jobs.length;

  const totalPages = Math.ceil(total / limit);

  const startIndex = (page - 1) * limit;

  const endIndex = startIndex + limit;

  const paginatedJobs = jobs.slice(
    startIndex,
    endIndex
  );

  return {
    jobs: paginatedJobs,
    page,
    limit,
    total,
    totalPages,
    hasMore: page < totalPages,
  };
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
export const searchJobs = async (keyword) => {
  await delay();

  if (!keyword) return [...jobData];

  return jobData.filter(
    (job) =>
      job.title
        .toLowerCase()
        .includes(keyword.toLowerCase()) ||
      job.company
        .toLowerCase()
        .includes(keyword.toLowerCase())
  );
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
    message:
      "Application submitted successfully.",
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
export const removeSavedJob = async (
  jobId
) => {
  await delay();

  return {
    success: true,
    jobId,
    message: "Saved job removed.",
  };
};