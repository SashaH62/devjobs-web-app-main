import Header from "../components/generic/Header/Header";
import Main from "../components/generic/Main/Main";
import ListingCard from "../components/job-listing/ListingCard/ListingCard";
import Loader from "../components/generic/Loader/Loader";
import GenericMessage from "../components/generic/GenericMessage/GenericMessage";
import { useJobs } from "../contexts/JobListingContext";
import ListingFilterForm from "../components/job-listing/ListingFilterForm/ListingFilterForm";
import { useEffect } from "react";

function JobListings() {
  const { fetchJobs, filteredListings, isLoading, error } = useJobs();

  useEffect(() => {
    fetchJobs();
  }, []);

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
        <Main type="containerJobListing">
          {isLoading && <p>Loading...</p>}

          {filteredListings.length > 0 &&
            filteredListings.map((listing) => (
              <ListingCard listing={listing} key={listing.id} />
            ))}
        </Main>
      )}
    </>
  );
}

export default JobListings;
