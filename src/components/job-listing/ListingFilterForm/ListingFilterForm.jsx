import { useState } from "react";
import Button from "../../generic/Button/Button";
import GenericTextInput from "../../generic/GenericTextInput/GenericTextInput";
import styles from "./ListingFilterForm.module.scss";
import { useJobs } from "../../../contexts/JobListingContext";

function ListingFilterForm() {
  const { dispatch, filterListings } = useJobs();

  const [formFields, setFormFields] = useState({
    generalQuery: "",
    locationQuery: "",
    contractQuery: false,
  });

  function handleSearchSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "jobs/filtered",
      payload: filterListings(
        formFields.generalQuery,
        formFields.locationQuery,
        formFields.contractQuery
      ),
    });
  }

  function handleChange(e) {
    if (e.target.name === "contractQuery") {
      setFormFields((prev) => ({
        ...prev,
        [e.target.name]: !prev.contractQuery,
      }));
    } else {
      setFormFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  }

  return (
    <form className={styles.filterForm} onSubmit={handleSearchSubmit}>
      <GenericTextInput
        name="generalQuery"
        placeholder="Filter by title, companies, expertise…"
        icon="/assets/desktop/icon-search.svg"
        value={formFields.generalQuery}
        onChangeEvent={(e) => handleChange(e)}
      />
      <GenericTextInput
        name="locationQuery"
        placeholder="Filter by location…"
        icon="/assets/desktop/icon-location.svg"
        value={formFields.locationQuery}
        onChangeEvent={(e) => handleChange(e)}
      />
      <fieldset>
        <input
          name="contractQuery"
          type="checkbox"
          checked={formFields.contractQuery}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="fullTimeContract">Full Time Only</label>
      </fieldset>
      <Button>Search</Button>
    </form>
  );
}

export default ListingFilterForm;
