import { useJobs } from "../../../contexts/JobListingContext";
import Button from "../../generic/Button/Button";
import styles from "./JobDescription.module.scss";

function JobDescription() {
  const {
    selectedListing: {
      company,
      contract,
      postedAt,
      position,
      location,
      apply,
      description,
      requirements,
      role,
    },
  } = useJobs();

  return (
    <section className={styles.jobDescriptionContainer}>
      <div className={styles.descriptionHeader}>
        <div>
          <p className="mb-2">
            <span>{postedAt}</span>.<span>{contract}</span>
          </p>
          <h1 className="mb-2">{position}</h1>
          <p className={styles.location}>{location}</p>
        </div>
        <Button link={apply}>Apply Now</Button>
      </div>
      <div className={styles.genericDescriptionContainer}>
        <p>{description}</p>
      </div>
      {requirements && (
        <div className={styles.genericDescriptionContainer}>
          <h3>Requirments</h3>
          <p>{requirements.content}</p>
          {requirements.items && (
            <ul>
              {requirements.items.map((item, index) => (
                <li key={`${company}-requirement-${index}`}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
      {role && (
        <div className={styles.genericDescriptionContainer}>
          <h3>What You Will Do</h3>
          {role.content && <p>{role.content}</p>}
          {role.items && (
            <ol>
              {role.items.map((item, index) => (
                <li key={`${company}-role-${index}`}>{item}</li>
              ))}
            </ol>
          )}
        </div>
      )}
    </section>
  );
}

export default JobDescription;
