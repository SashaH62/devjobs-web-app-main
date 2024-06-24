import Header from "../components/generic/Header/Header";
import Main from "../components/generic/Main/Main";
import ListingCard from "../components/job-listing/ListingCard/ListingCard";
import Loader from "../components/generic/Loader/Loader";
import GenericMessage from "../components/generic/GenericMessage/GenericMessage";
import { useJobs } from "../contexts/JobListingContext";
import ListingFilterForm from "../components/job-listing/ListingFilterForm/ListingFilterForm";
import { useEffect } from "react";
import Button from "../components/generic/Button/Button";
import JobListingGrid from "../components/job-listing/JobListingGrid/JobListingGrid";

function JobListings() {
  const {
    fetchJobs,
    filteredListings,
    isLoading,
    numListings,
    error,
    dispatch,
  } = useJobs();

  useEffect(() => {
    fetchJobs();
  }, []);

  function handleLoadMore() {
    dispatch({ type: "jobs/loadMore" });
  }

  return (
    <>
      <Header>
        <ListingFilterForm />
      </Header>

      {isLoading && <Loader />}

      {!isLoading && error && (
        <GenericMessage>😣 Something went wrong. </GenericMessage>
      )}

      {!isLoading && !error && !filteredListings.length && (
        <GenericMessage>No results. Try something else. 😕</GenericMessage>
      )}

      {!isLoading && !error && filteredListings.length && (
        <Main>
          <JobListingGrid />
          {numListings < filteredListings.length && (
            <Button onClick={handleLoadMore}>Load More</Button>
          )}
        </Main>
      )}
    </>
  );
}

export default JobListings;
