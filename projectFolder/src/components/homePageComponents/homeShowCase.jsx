import homeImg1 from "../../assets/homeImages/Homeimage1.webp";
import RectInfoBox from "./rectangleInfoBox";

export default function HomeShowCase() {
  return (
    <div className="relative w-full h-screen ">
      <div className="absolute translate-x-[76px] whitespace-nowrap flex translate-y-[34px] text-white font-instrument-sans size-[18px] z-10 gap-x-[20px]">
        <div className="font-semibold">Home</div>
        <div className="font-normal">Amenities</div>
        <div className="font-normal">Video Tour</div>
        <div className="font-normal">Floor Plan</div>
        <div className="font-normal">Contact Agent</div>
      </div>

      <RectInfoBox className={"pl-[76px] flex items-center h-screen w-full"} />

      <img
        src={homeImg1}
        alt="Home Showcase"
        className="w-full h-full object-cover "
      />

      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black to-transparent opacity-50" />

      <div className="absolute bottom-0 w-full h-32 opacity-[93%] bg-black" />
    </div>
  );
}
