import Header from "../components/generic/Header/Header";
import Main from "../components/generic/Main/Main";
import ListingCard from "../components/job-listing/ListingCard/ListingCard";
import Loader from "../components/generic/Loader/Loader";
import GenericMessage from "../components/generic/GenericMessage/GenericMessage";
import { useJobs } from "../contexts/JobListingContext";

function JobListings() {
  const { filteredListings, isLoading, error } = useJobs();

  return (
    <>
      <Header></Header>

      {isLoading && <Loader />}
      {!isLoading && error && (
        <GenericMessage>😣 Something went wrong. </GenericMessage>
      )}

      {!isLoading && !error && (
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
