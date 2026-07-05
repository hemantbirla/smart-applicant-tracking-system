import axiosInstance from "../api/axios";

export const uploadResume = async (
  file,
  onUploadProgress
) => {
  const formData = new FormData();

  formData.append("resume", file);

  const response = await axiosInstance.post(
    "/resume/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    }
  );

  return response.data;
};

export const deleteResume = async () => {
  const response = await axiosInstance.delete(
    "/resume"
  );

  return response.data;
};

export const getResume = async () => {
  const response = await axiosInstance.get(
    "/resume"
  );

  return response.data;
};