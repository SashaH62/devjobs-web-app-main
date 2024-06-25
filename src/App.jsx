import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobPage from "./pages/JobPage";
import JobListings from "./pages/JobListings";
import { JobListingProvider } from "./contexts/JobListingContext";
import { useEffect } from "react";
import { getThemeMode } from "./utils/ThemeToggleUtils";
import Header from "./components/generic/Header/Header";

const App = () => {
  useEffect(() => {
    getThemeMode();
  }, []);

  return (
    <JobListingProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<JobListings />} />
          <Route path="job/:id" element={<JobPage />} />
        </Routes>
      </BrowserRouter>
    </JobListingProvider>
  );
};

export default App;
