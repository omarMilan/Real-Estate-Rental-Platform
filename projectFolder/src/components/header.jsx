import Button from "./button";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="absolute w-full h-screen">
      <div className="absolute translate-x-[76px] select-none cursor-pointer whitespace-nowrap flex translate-y-[34px] text-white font-instrument-sans size-[18px] z-10 gap-x-[20px]">
        <div
          onClick={() => navigate("/")}
          className={`cursor-pointer ${
            location.pathname === "/" ? "font-semibold" : "font-normal"
          }`}
        >
          Home
        </div>
        <div
          onClick={() => navigate("/Amenities-Page")}
          className={`cursor-pointer ${
            location.pathname === "/Amenities-Page"
              ? "font-semibold"
              : "font-normal"
          }`}
        >
          Amenities
        </div>
        <div
          className={`cursor-pointer ${
            location.pathname === "/Video-Tour"
              ? "font-semibold"
              : "font-normal"
          }`}
        >
          Video Tour
        </div>
        <div
          className={`cursor-pointer ${
            location.pathname === "/Floor-Plan"
              ? "font-semibold"
              : "font-normal"
          }`}
        >
          Floor Plan
        </div>
        <div
          onClick={() => navigate("/Contact-Page")}
          className={`cursor-pointer ${
            location.pathname === "/Contact-Page"
              ? "font-semibold"
              : "font-normal"
          }`}
        >
          Contact Agent
        </div>
      </div>
    </div>
  );
}