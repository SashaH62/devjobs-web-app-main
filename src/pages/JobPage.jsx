import { useParams } from "react-router";
import Main from "../components/generic/Main/Main";
import Header from "../components/generic/Header/Header";
import JobTitleCard from "../components/job-listing/JobTitleCard/JobTitleCard";
import { useJobs } from "../contexts/JobListingContext";
import { useEffect } from "react";
import JobDescription from "../components/job-listing/JobDescription/JobDescription";
import Loader from "../components/generic/Loader/Loader";
import GenericMessage from "../components/generic/GenericMessage/GenericMessage";
import ListingFooter from "../components/job-listing/ListingFooter/ListingFooter";

function JobPage() {
  const { id } = useParams();
  const { getCurrentListing, isLoading, error } = useJobs();

  useEffect(() => {
    getCurrentListing(id);
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && error && (
        <GenericMessage>😣 Something went wrong. </GenericMessage>
      )}
      {!isLoading && !error && (
        <>
          <Main>
            <JobTitleCard />
            <JobDescription />
          </Main>
          <ListingFooter />
        </>
      )}
    </>
  );
}

export default JobPage;
