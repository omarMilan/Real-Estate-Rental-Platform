import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/homePageComponents/home";
import ContactPage from "./components/contactPageComponents/contactPage";
import AmenitiesPage from "./components/amenitiesPageComponents/amenitiesPage";
import VideoTourPage from "./components/videoTourComponents/videoTourPage";
import FloorPlanPage from "./components/floorPlanPageComponents/floorPlanPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Amenities-Page" element={<AmenitiesPage />} />
          <Route path="/VideoTour-Page" element={<VideoTourPage />} />
          <Route path="/FloorPlan-Page" element={<FloorPlanPage />} />
          <Route path="/Contact-Page" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
