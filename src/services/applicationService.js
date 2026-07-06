import axiosInstance from "../api/axios";

// import applications from "../data/applications";

// let applicationList = [...applications];

/**
 * Get All Applications
 */
export const getApplications = async () => {
  // Mock
  return Promise.resolve(applicationList);

  /*
  const response = await axiosInstance.get("/applications");
  return response.data;
  */
};

/**
 * Get Application By ID
 */
export const getApplicationById = async (id) => {
  // Mock
  return Promise.resolve(
    applicationList.find(
      (application) => application.id === Number(id)
    )
  );

  /*
  const response = await axiosInstance.get(`/applications/${id}`);
  return response.data;
  */
};

/**
 * Check if Candidate Already Applied
 */
export const hasApplied = async (jobId) => {
  // Mock
  return Promise.resolve(
    applicationList.some(
      (application) => application.jobId === Number(jobId)
    )
  );

  /*
  const response = await axiosInstance.get(
    `/applications/check/${jobId}`
  );

  return response.data.applied;
  */
};

/**
 * Apply Job
 */
export const applyJob = async (
  jobId,
  applicationData
) => {
  // Mock

  const alreadyApplied = applicationList.some(
    (application) =>
      application.jobId === Number(jobId)
  );

  if (alreadyApplied) {
    throw new Error(
      "You have already applied for this job."
    );
  }

  const newApplication = {
    id: Date.now(),

    jobId,

    company: applicationData.company,

    position: applicationData.position,

    location: applicationData.location,

    appliedDate: new Date()
      .toISOString()
      .split("T")[0],

    status: "Applied",

    resume: applicationData.resume,

    coverLetter:
      applicationData.coverLetter || "",

    portfolio:
      applicationData.portfolio || "",

    linkedin:
      applicationData.linkedin || "",
  };

  applicationList.unshift(newApplication);

  return Promise.resolve(newApplication);

  /*
  const response = await axiosInstance.post(
      "/applications",
      applicationData
  );

  return response.data;
  */
};

/**
 * Withdraw Application
 */
export const withdrawApplication = async (
  id
) => {
  // Mock

  applicationList = applicationList.map(
    (application) =>
      application.id === Number(id)
        ? {
            ...application,
            status: "Withdrawn",
          }
        : application
  );

  return Promise.resolve(true);

  /*
  const response = await axiosInstance.delete(
      `/applications/${id}`
  );

  return response.data;
  */
};