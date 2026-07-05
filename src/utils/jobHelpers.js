const getSalary = (salary) => Number(salary.match(/\d+/)?.[0] || 0);

export const searchJobs = (jobs, searchTerm) => {
  if (!searchTerm.trim()) return jobs;

  const term = searchTerm.toLowerCase();

  return jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(term) ||
      job.company.toLowerCase().includes(term) ||
      job.skills.some((skill) => skill.toLowerCase().includes(term)),
  );
};

export const filterJobs = (jobs, filters) => {
  return jobs.filter((job) => {
    return (
      (!filters.location || job.location === filters.location) &&
      (!filters.jobType || job.employmentType === filters.jobType) &&
      (!filters.experience || job.experience === filters.experience) &&
      (!filters.salary || getSalary(job.salary) >= Number(filters.salary)) &&
      (!filters.workMode || job.workMode === filters.workMode)
    );
  });
};

export const sortJobs = (jobs, sortBy) => {
  const sorted = [...jobs];

  switch (sortBy) {
    case "newest":
      return sorted.sort(
        (a, b) => new Date(b.postedDate) - new Date(a.postedDate),
      );

    case "oldest":
      return sorted.sort(
        (a, b) => new Date(a.postedDate) - new Date(b.postedDate),
      );

    case "salaryDesc":
      return sorted.sort((a, b) => getSalary(b.salary) - getSalary(a.salary));

    case "salaryAsc":
      return sorted.sort((a, b) => getSalary(a.salary) - getSalary(b.salary));

    case "company":
      return sorted.sort((a, b) => a.company.localeCompare(b.company));

    case "title":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));

    default:
      return sorted;
  }
};

export const getFilteredJobs = (jobs, searchTerm, filters, sortBy) => {
  return sortJobs(filterJobs(searchJobs(jobs, searchTerm), filters), sortBy);
};
