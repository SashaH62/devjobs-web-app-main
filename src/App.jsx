import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobPage from "./pages/JobPage";
import JobListings from "./pages/JobListings";
import { JobListingProvider } from "./contexts/JobListingContext";

const App = () => {
  return (
    <JobListingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobListings />} />
          <Route path="job/:id" element={<JobPage />} />
        </Routes>
      </BrowserRouter>
    </JobListingProvider>
  );
};

export default App;
