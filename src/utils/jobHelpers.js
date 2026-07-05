/**
 * Search Jobs
 * Search by:
 * - Job Title
 * - Company
 * - Skills
 */

export const searchJobs = (jobs, searchTerm) => {
  if (!searchTerm.trim()) return jobs;

  const term = searchTerm.trim().toLowerCase();

  return jobs.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(term);

    const companyMatch = job.company
      .toLowerCase()
      .includes(term);

    const skillsMatch = job.skills.some((skill) =>
      skill.toLowerCase().includes(term)
    );

    return (
      titleMatch ||
      companyMatch ||
      skillsMatch
    );
  });
};

/**
 * Filter Jobs
 */

export const filterJobs = (jobs, filters) => {
  return jobs.filter((job) => {
    const locationMatch =
      !filters.location ||
      job.location === filters.location;

    const typeMatch =
      !filters.jobType ||
      job.jobType === filters.jobType;

    const experienceMatch =
      !filters.experience ||
      job.experience === filters.experience;

    const salaryMatch =
      !filters.salary ||
      job.salary >= Number(filters.salary);

    const workModeMatch =
      !filters.workMode ||
      job.workMode === filters.workMode;

    return (
      locationMatch &&
      typeMatch &&
      experienceMatch &&
      salaryMatch &&
      workModeMatch
    );
  });
};

/**
 * Sort Jobs
 */

export const sortJobs = (jobs, sortBy) => {
  const sortedJobs = [...jobs];

  switch (sortBy) {
    case "newest":
      return sortedJobs.sort(
        (a, b) =>
          new Date(b.postedDate) -
          new Date(a.postedDate)
      );

    case "oldest":
      return sortedJobs.sort(
        (a, b) =>
          new Date(a.postedDate) -
          new Date(b.postedDate)
      );

    case "salaryHigh":
      return sortedJobs.sort(
        (a, b) => b.salary - a.salary
      );

    case "salaryLow":
      return sortedJobs.sort(
        (a, b) => a.salary - b.salary
      );

    case "company":
      return sortedJobs.sort((a, b) =>
        a.company.localeCompare(b.company)
      );

    case "title":
      return sortedJobs.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

    default:
      return sortedJobs;
  }
};

/**
 * Apply Search + Filters + Sorting
 */

export const getFilteredJobs = (
  jobs,
  searchTerm,
  filters,
  sortBy
) => {
  let result = searchJobs(jobs, searchTerm);

  result = filterJobs(result, filters);

  result = sortJobs(result, sortBy);

  return result;
};