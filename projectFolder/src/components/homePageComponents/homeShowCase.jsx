import RectInfoBox from "./rectangleInfoBox";
import { useNavigate } from "react-router-dom";
import Button from "../button";

import img1 from "../../assets/homeImages/Homeimage1.webp";
import img2 from "../../assets/homeImages/Homeimage2.webp";
import img3 from "../../assets/homeImages/Homeimage3.webp";
import img4 from "../../assets/homeImages/Homeimage4.webp";
import img5 from "../../assets/homeImages/Homeimage5.webp";
import img6 from "../../assets/homeImages/Homeimage6.webp";
import img7 from "../../assets/homeImages/Homeimage7.webp";
import img8 from "../../assets/homeImages/Homeimage8.webp";
import img9 from "../../assets/homeImages/Homeimage9.webp";
import img10 from "../../assets/homeImages/Homeimage10.webp";
import img11 from "../../assets/homeImages/Homeimage11.webp";
import img12 from "../../assets/homeImages/Homeimage12.webp";

export default function HomeShowCase({ imageIndex }) {
  const navigate = useNavigate();
  console.log(imageIndex);
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  return (
    <div className="relative w-full h-screen ">
      <div className="absolute translate-x-[76px] font-normal select-none cursor-pointer whitespace-nowrap flex translate-y-[34px] text-white font-instrument-sans size-[18px] z-10 gap-x-[20px]">
        <div className="font-semibold">Home</div>
        <div className="font-normal">Amenities</div>
        <div className="font-normal">Video Tour</div>
        <div className="font-normal">Floor Plan</div>
        <Button onClick={() => navigate("/Contact-Page")}>Contact Agent</Button>
      </div>

      <RectInfoBox className={"pl-[76px] flex items-center h-screen w-full"} />
      <img
        src={images[imageIndex]}
        alt="Home Showcase"
        className="w-full h-full object-cover select-none"
      />
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black to-transparent opacity-50" />
    </div>
  );
}
