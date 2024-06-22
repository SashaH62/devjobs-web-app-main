import { useParams } from "react-router";
import Main from "../components/generic/Main/Main";
import Header from "../components/generic/Header/Header";
import JobTitleCard from "../components/job-listing/JobTitleCard/JobTitleCard";
import { useJobs } from "../contexts/JobListingContext";
import { useEffect } from "react";
import JobDescription from "../components/job-listing/JobDescription/JobDescription";
import Loader from "../components/generic/Loader/Loader";
import ListingFooter from "../components/job-listing/ListingFooter/ListingFooter";

function JobPage() {
  const { id } = useParams();
  const { getCurrentListing, selectedListing, isLoading } = useJobs();

  useEffect(() => {
    getCurrentListing(id);
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && selectedListing && (
        <>
          <Header>
            <JobTitleCard />
          </Header>
          <Main>
            <JobDescription />
          </Main>
          <ListingFooter />
        </>
      )}
    </>
  );
}

export default JobPage;
