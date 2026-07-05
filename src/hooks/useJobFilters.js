import { useMemo, useState } from "react";

import {
  searchJobs,
  filterJobs,
  sortJobs,
} from "../utils/jobHelpers";

const initialFilters = {
  location: "",
  jobType: "",
  experience: "",
  salary: "",
  workMode: "",
};

const useJobFilters = (jobs = []) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [filters, setFilters] = useState(initialFilters);

  const [sortBy, setSortBy] = useState("newest");

  const filteredJobs = useMemo(() => {
    let result = [...jobs];

    // Search
    result = searchJobs(result, searchTerm);

    // Filters
    result = filterJobs(result, filters);

    // Sorting
    result = sortJobs(result, sortBy);

    return result;
  }, [jobs, searchTerm, filters, sortBy]);

  const updateFilter = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearFilters = () => {
    setSearchTerm("");

    setFilters(initialFilters);

    setSortBy("newest");
  };

  return {
    filteredJobs,

    searchTerm,

    filters,

    sortBy,

    setSearchTerm,

    setSortBy,

    updateFilter,

    clearFilters,
  };
};

export default useJobFilters;