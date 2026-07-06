import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  applyJob,
  getApplications,
  withdrawApplication,
} from "../services/applicationService";

import { APPLICATION_STATUS } from "../constants/applicationStatus";

const useApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      setLoading(true);

      const data = await getApplications();

      setApplications(data || []);
    } catch (error) {
      console.error(error);
      setApplications([]);
    } finally {
      setLoading(false);
    }
  };

  const isAlreadyApplied = (jobId) => {
    return applications.some(
      (item) =>
        item.jobId === jobId && item.status !== APPLICATION_STATUS.WITHDRAWN,
    );
  };

  const apply = async (jobId, data) => {
    if (isAlreadyApplied(jobId)) {
      toast.info("Already applied.");
      return;
    }

    try {
      setLoading(true);

      const response = await applyJob(jobId, data);

      setApplications((prev) => [response, ...prev]);

      toast.success("Application submitted.");

      return response;
    } catch (error) {
      toast.error("Application failed.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const withdraw = async (id) => {
    try {
      await withdrawApplication(id);

      setApplications((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                status: APPLICATION_STATUS.WITHDRAWN,
              }
            : item,
        ),
      );

      toast.success("Application withdrawn.");
    } catch {
      toast.error("Unable to withdraw.");
    }
  };

  return {
    applications,
    loading,
    apply,
    withdraw,
    isAlreadyApplied,
    refreshApplications: loadApplications,
  };
};

export default useApplications;
