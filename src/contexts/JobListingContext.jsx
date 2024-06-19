import { createContext, useContext, useEffect, useState } from "react";

const JobsContext = createContext();

function JobListingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [jobListings, setJobListings] = useState({});

  useEffect(() => {
    async function fetchJobs() {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:3000/jobs");
        const data = await res.json();
        setJobListings(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <JobsContext.Provider
      value={{
        isLoading,
        error,
        jobListings,
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
