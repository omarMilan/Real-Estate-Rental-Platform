import Header from "../header";
import backyardImg from "../../assets/homeImages/Homeimage7.webp";
import VideoSelector from "./videoSelector";

export default function VideoTourPage() {
  return (
    <div className="relative">
      {/* Gradient Overlay */}
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black to-transparent opacity-70 z-0" />

      {/* Header */}
      <Header />

      {/* Background Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src={backyardImg}
          alt="Background"
          className="w-full h-full object-cover object-center transform scale-x-[-1]"
        />
        <div className="select-none absolute pl-[70px] font-light inset-0 flex italic drop-shadow-md flex-col items-start justify-center text-white text-[42px] font-instrument-sans z-10">
          <div>Step Inside Your Future Home</div>
          <div className="mt-2">Experience Every Detail!</div>
        </div>
      </div>

      {/* Video Selector Section */}
      <div className="mt-12 flex justify-center">
        <VideoSelector />
      </div>
    </div>
  );
}
