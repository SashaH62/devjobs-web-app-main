import { NavLink } from "react-router-dom";
import styles from "./ListingCard.module.scss";
import { useJobs } from "../../../contexts/JobListingContext";

function ListingCard({
  listing: {
    postedAt,
    contract,
    position,
    company,
    logo,
    logoBackground,
    location,
    id,
  },
}) {
  return (
    <NavLink to={`job/${id}`}>
      <div className={styles.listingCard}>
        <div
          className={`${styles.imageContainer} mb-2`}
          style={{ backgroundColor: logoBackground }}
        >
          <img src={logo} alt={`${company} logo`} />
        </div>
        <p className="mb-2">
          <span>{postedAt}</span> . <span>{contract}</span>
        </p>
        <h3 className="mb-2">{position}</h3>
        <p className="mb-5">{company}</p>
        <h4>{location}</h4>
      </div>
    </NavLink>
  );
}

export default ListingCard;
