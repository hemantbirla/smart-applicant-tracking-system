import interviewData from "../constants/interviewData";

let interviews = [...interviewData];

// Convert Date object to YYYY-MM-DD string
const formatDate = (date) => {
  if (date instanceof Date) {
    return date.toISOString().split("T")[0];
  }

  return date;
};

export const getInterviews = async () => {
  return Promise.resolve([...interviews]);
};

export const getInterviewById = async (id) => {
  return Promise.resolve(
    interviews.find((item) => item.id === id)
  );
};

export const scheduleInterview = async (data) => {
  const newInterview = {
    ...data,
    id: Date.now(),
    date: formatDate(data.date),
    updatedAt: new Date().toISOString().split("T")[0],
  };

  interviews = [...interviews, newInterview];

  return Promise.resolve(newInterview);
};

export const updateInterview = async (
  id,
  updatedData
) => {
  interviews = interviews.map((item) =>
    item.id === id
      ? {
          ...item,
          ...updatedData,
          date: formatDate(updatedData.date),
          updatedAt: new Date()
            .toISOString()
            .split("T")[0],
        }
      : item
  );

  return Promise.resolve(true);
};

export const updateInterviewStatus = async (
  id,
  status
) => {
  interviews = interviews.map((item) =>
    item.id === id
      ? {
          ...item,
          status,
          updatedAt: new Date()
            .toISOString()
            .split("T")[0],
        }
      : item
  );

  return Promise.resolve(true);
};

export const cancelInterview = async (id) => {
  interviews = interviews.map((item) =>
    item.id === id
      ? {
          ...item,
          status: "Cancelled",
          updatedAt: new Date()
            .toISOString()
            .split("T")[0],
        }
      : item
  );

  return Promise.resolve(true);
};

export const deleteInterview = async (id) => {
  interviews = interviews.filter(
    (item) => item.id !== id
  );

  return Promise.resolve(true);
};



// {// For Backend
//   import axiosInstance from "../api/axios";

//   /**
//    * Get All Interviews
//    */
//   export const getInterviews = async () => {
//     const response = await axiosInstance.get("/interviews");

//     return response.data;
//   };

//   /**
//    * Get Interview By ID
//    */
//   export const getInterviewById = async (id) => {
//     const response = await axiosInstance.get(`/interviews/${id}`);

//     return response.data;
//   };

//   /**
//    * Schedule New Interview
//    */
//   export const scheduleInterview = async (data) => {
//     const response = await axiosInstance.post("/interviews", data);

//     return response.data;
//   };

//   /**
//    * Update Interview
//    */
//   export const updateInterview = async (id, data) => {
//     const response = await axiosInstance.put(`/interviews/${id}`, data);

//     return response.data;
//   };

//   /**
//    * Update Interview Status
//    */
//   export const updateInterviewStatus = async (id, status) => {
//     const response = await axiosInstance.patch(`/interviews/${id}/status`, {
//       status,
//     });

//     return response.data;
//   };

//   /**
//    * Cancel Interview
//    */
//   export const cancelInterview = async (id) => {
//     const response = await axiosInstance.patch(`/interviews/${id}/cancel`);

//     return response.data;
//   };

//   /**
//    * Delete Interview
//    */
//   export const deleteInterview = async (id) => {
//     const response = await axiosInstance.delete(`/interviews/${id}`);

//     return response.data;
//   };
// }
