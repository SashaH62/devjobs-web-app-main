import styles from "./ListingFooter.module.scss";
import { useJobs } from "../../../contexts/JobListingContext";
import Button from "../../generic/Button/Button";

function ListingFooter() {
  const {
    selectedListing: { position, apply, company },
  } = useJobs();

  return (
    <footer className={styles.listingFooter}>
      <div className={styles.footerContainer}>
        <div>
          <h3>{position}</h3>
          <p>{company}</p>
        </div>
        <Button link={apply}>Apply Now</Button>
      </div>
    </footer>
  );
}

export default ListingFooter;
