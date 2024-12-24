import Header from "../header";
import tempBluePrint from "../../assets/otherImages/bluePrintImg.jpg";
import FloorPlanInfo from "./floorPlanInfo";

export default function FloorPlanPage() {
  return (
    <div>
      <Header />
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 opacity-50" />
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src={tempBluePrint}
          alt="Background"
          className="w-full h-full object-cover object-center transform "
        />
        <div className="select-none absolute pl-[70px] font-light inset-0 flex italic drop-shadow-md flex-col items-start justify-center text-white text-[42px] font-instrument-sans z-10">
          <div>Where blueprints meet dreams,</div>
          <div className="mt-2">a foundation for your story.</div>
        </div>
      </div>
      <FloorPlanInfo />
    </div>
  );
}
