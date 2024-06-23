import GenericTextInput from "../../generic/GenericTextInput/GenericTextInput";

function ListingFilterForm() {
  return (
    <form>
      <GenericTextInput
        name="searchInput"
        placeholder="Filter by title, companies, expertise…"
      />
      <GenericTextInput
        name="locationInput"
        placeholder="Filter by location…"
      />
      <fieldset>
        <input name="fullTimeContract" type="checkbox" />
      </fieldset>
    </form>
  );
}

export default ListingFilterForm;
