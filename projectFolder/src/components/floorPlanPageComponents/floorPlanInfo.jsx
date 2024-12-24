import blueprint from "../../assets/otherImages/homeBluePrint.jpg";

export default function FloorPlanInfo() {
  return (
    <div className="z-30 w-full min-h-screen font-instrument-sans overflow-hidden">
      <div className="font-instrument-sans z-0 font-light flex mt-[37px] flex-col items-center justify-center text-[32px]">
        Home Layout
      </div>
      <div className="flex justify-center items-center mt-16">
        <img
          src={blueprint}
          className="relative ring-1 ring-slate-300 shadow-sm drop-shadow-md shadow-black rounded-sm"
          alt="Blueprint"
        />
      </div>
    </div>
  );
}
