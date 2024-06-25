import { useJobs } from "../../../contexts/JobListingContext";
import Button from "../../generic/Button/Button";
import styles from "./JobTitleCard.module.scss";

function JobTitleCard() {
  const {
    selectedListing: { company, logo, logoBackground, website, apply },
  } = useJobs();

  return (
    <div className={styles.titleCard}>
      <div
        style={{ backgroundColor: logoBackground }}
        className={styles.imageContainer}
      >
        <img src={logo} alt={`${company} logo`} />
      </div>
      <div className={styles.contentContainer}>
        <div>
          <h2>{company}</h2>
          <p>{website}</p>
        </div>
        <Button link={website} type="secondary">
          Company Site
        </Button>
      </div>
    </div>
  );
}

export default JobTitleCard;
