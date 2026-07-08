import { useEffect, useState } from "react";

import {
  getApplicants,
  updateApplicantStatus,
} from "../services/applicantService";

const useApplicants = () => {
  const [applicants, setApplicants] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const fetchApplicants = async () => {
    try {
      setLoading(true);

      setError("");

      const data = await getApplicants({
        search,
        status,
        page,
      });

      setApplicants(data.items || []);

      setTotalPages(data.totalPages || 1);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to load applicants."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, [search, status, page]);

  const refresh = () => {
    fetchApplicants();
  };

  const changeStatus = async (id, newStatus) => {
    try {
      await updateApplicantStatus(id, newStatus);

      fetchApplicants();
    } catch (err) {
      console.error(err);
    }
  };

  return {
    applicants,

    loading,

    error,

    search,

    setSearch,

    status,

    setStatus,

    page,

    setPage,

    totalPages,

    refresh,

    changeStatus,
  };
};

export default useApplicants;