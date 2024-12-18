import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/homePageComponents/home";
import ContactPage from "./components/contactPageComponents/contactPage";
import AmenitiesPage from "./components/amenitiesPageComponents/amenitiesPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Amenities-Page" element={<AmenitiesPage />} />
          <Route path="/Contact-Page" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
