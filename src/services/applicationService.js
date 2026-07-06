const STORAGE_KEY = "applications";

/**
 * Get all applications
 */
export const getApplications = async () => {
  const applications =
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  return applications;
};

/**
 * Get application by ID
 */
export const getApplicationById = async (id) => {
  const applications = await getApplications();

  return applications.find(
    (application) => application.id === id
  );
};

/**
 * Apply for Job
 */
export const applyJob = async (jobId, data) => {
  console.log("applyJob called");

  const applications = await getApplications();

  console.log("Existing applications:", applications);

  const alreadyApplied = applications.find(
    (application) => application.jobId === jobId
  );

  if (alreadyApplied) {
    console.log("Already exists");
    throw new Error("Already applied for this job.");
  }

  const newApplication = {
    id: Date.now(),
    jobId,

    company: data.company,
    position: data.position,

    resume: data.resume,

    coverLetter: data.coverLetter,

    linkedin: data.linkedin,

    portfolio: data.portfolio,

    appliedDate: new Date().toLocaleDateString("en-IN"),

    status: "Applied",
  };

  console.log("Saving:", newApplication);

  applications.unshift(newApplication);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(applications)
  );

  console.log(
    "Saved:",
    localStorage.getItem(STORAGE_KEY)
  );

  return newApplication;
};

/**
 * Withdraw Application
 */
export const withdrawApplication = async (id) => {
  const applications = await getApplications();

  const updatedApplications = applications.map(
    (application) =>
      application.id === id
        ? {
            ...application,
            status: "Withdrawn",
          }
        : application
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedApplications)
  );

  return true;
};