import { useJobs } from "../../../contexts/JobListingContext";
import ListingCard from "../ListingCard/ListingCard";
import styles from "./JobListingGrid.module.scss";

function JobListingGrid() {
  const { filteredListings, numListings } = useJobs();

  return (
    <section className={styles.containerJobListing}>
      {filteredListings.length > 0 &&
        filteredListings
          .slice(0, numListings)
          .map((listing) => <ListingCard listing={listing} key={listing.id} />)}
    </section>
  );
}

export default JobListingGrid;
