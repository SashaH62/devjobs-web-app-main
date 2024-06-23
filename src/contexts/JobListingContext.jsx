import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const JobsContext = createContext();

const BASE_URL = "http://localhost:3000";

const initState = {
  isLoading: false,
  error: "",
  jobListings: {},
  filteredListings: {},
  selectedListing: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "jobs/loaded":
      return {
        ...state,
        isLoading: false,
        jobListings: action.payload,
        filteredListings: action.payload,
        selectedListing: {},
      };
    case "job/loaded":
      return {
        ...state,
        selectedListing: action.payload,
        isLoading: false,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function JobListingProvider({ children }) {
  const [
    { isLoading, error, jobListings, filteredListings, selectedListing },
    dispatch,
  ] = useReducer(reducer, initState);

  async function fetchJobs() {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/jobs`);
      const data = await res.json();
      dispatch({ type: "jobs/loaded", payload: data });
    } catch (error) {
      dispatch({ type: "rejected", payload: error });
      console.log(error);
    }
  }

  async function getCurrentListing(id) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/jobs/${id}`);
      const data = await res.json();
      dispatch({ type: "job/loaded", payload: data });
    } catch (error) {
      dispatch({ type: "rejected", payload: error });
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <JobsContext.Provider
      value={{
        isLoading,
        error,
        filteredListings,
        selectedListing,
        dispatch,
        getCurrentListing,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
}

const useJobs = () => {
  const context = useContext(JobsContext);

  if (context === undefined)
    throw new Error(
      "JobsContext cannot be used outside of the JobsContextProvider."
    );

  return context;
};

export { JobListingProvider, useJobs };
