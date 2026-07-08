import interviewData from "../constants/interviewData";

let interviews = [...interviewData];

export const getInterviews = async () => {
  return Promise.resolve(interviews);
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
  };

  interviews.push(newInterview);

  return Promise.resolve(newInterview);
};

export const updateInterview = async (id, updatedData) => {
  interviews = interviews.map((item) =>
    item.id === id
      ? { ...item, ...updatedData }
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
      ? { ...item, status }
      : item
  );

  return Promise.resolve(true);
};

export const cancelInterview = async (id) => {
  interviews = interviews.map((item) =>
    item.id === id
      ? { ...item, status: "Cancelled" }
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