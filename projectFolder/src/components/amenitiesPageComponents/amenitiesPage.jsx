import Header from "../header";
import img2 from "../../assets/homeImages/Homeimage2.webp";
import AmenetiesInfo from "./amenitiesInfo";

export default function AmenitiesPage() {
  return (
    <div>
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black to-transparent opacity-70 z-10" />
      <Header />
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src={img2}
          alt="Background"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="select-none absolute pl-[70px] font-light inset-0 flex italic drop-shadow-sm flex-col items-start justify-center text-white text-[42px] font-instrument-sans ">
          <div>Everything You Need</div>
          <div className="mt-2">Right Where You Want It</div>
        </div>
      </div>

      <AmenetiesInfo />
    </div>
  );
}
