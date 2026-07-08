import { useEffect, useState } from "react";

import {
  getInterviews,
  scheduleInterview,
  updateInterview,
  updateInterviewStatus,
  cancelInterview,
  deleteInterview,
} from "../services/interviewService";

const useInterviews = () => {
  const [interviews, setInterviews] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const fetchInterviews = async () => {
    try {
      setLoading(true);

      const data = await getInterviews();

      setInterviews(data);

      setError("");
    } catch {
      setError("Failed to load interviews.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInterviews();
  }, []);

  const addInterview = async (data) => {
    await scheduleInterview(data);

    fetchInterviews();
  };

  const editInterview = async (id, updatedData) => {
    await updateInterview(id, updatedData);

    fetchInterviews();
  };

  const changeStatus = async (id, status) => {
    await updateInterviewStatus(id, status);

    fetchInterviews();
  };

  const removeInterview = async (id) => {
    await deleteInterview(id);

    fetchInterviews();
  };

  const cancel = async (id) => {
    await cancelInterview(id);

    fetchInterviews();
  };

  const [selectedInterview, setSelectedInterview] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openInterview = (interview) => {
    setSelectedInterview(interview);
    setIsModalOpen(true);
  };

  const closeInterview = () => {
    setSelectedInterview(null);
    setIsModalOpen(false);
  };

  return {
    interviews,
    loading,
    error,
    fetchInterviews,
    addInterview,
    editInterview,
    changeStatus,
    removeInterview,
    cancel,
    selectedInterview,
    isModalOpen,
    openInterview,
    closeInterview,
  };
};

export default useInterviews;
