import axiosInstance from "../api/axios";

export const getApplicants = async (params = {}) => {
  const response = await axiosInstance.get("/applicants", {
    params,
  });

  return response.data;
};

export const getApplicantById = async (id) => {
  const response = await axiosInstance.get(`/applicants/${id}`);

  return response.data;
};

export const updateApplicantStatus = async (
  id,
  status
) => {
  const response = await axiosInstance.patch(
    `/applicants/${id}/status`,
    { status }
  );

  return response.data;
};

export const downloadResume = async (id) => {
  const response = await axiosInstance.get(
    `/applicants/${id}/resume`,
    {
      responseType: "blob",
    }
  );

  return response.data;
};

export const searchApplicants = async (query) => {
  const response = await axiosInstance.get(
    "/applicants/search",
    {
      params: {
        q: query,
      },
    }
  );

  return response.data;
};

export const filterApplicants = async (filters) => {
  const response = await axiosInstance.get(
    "/applicants",
    {
      params: filters,
    }
  );

  return response.data;
};