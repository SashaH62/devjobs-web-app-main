import Header from "../components/generic/Header/Header";
import Main from "../components/generic/Main/Main";
import ListingCard from "../components/job-listing/ListingCard/ListingCard";
import { useJobs } from "../contexts/JobListingContext";

function JobListings() {
  const { filteredListings, isLoading } = useJobs();

  return (
    <>
      <Header />
      <Main type="containerJobListing">
        {isLoading && <p>Loading...</p>}

        {filteredListings.length > 0 &&
          filteredListings.map((listing) => (
            <ListingCard listing={listing} key={listing.id} />
          ))}
      </Main>
    </>
  );
}

export default JobListings;
