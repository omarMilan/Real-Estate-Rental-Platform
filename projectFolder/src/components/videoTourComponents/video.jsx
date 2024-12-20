export default function Video({ name, url }) {
  return (
    <div>
      <div className=" h-[350px] w-[780px] rounded-sm bg-black"></div>
      <div className="font-instrument-sans z-0 font-medium flex mt-[10px] flex-col italic items-center justify-center text-[18px]">
        {" "}
        You Are Now Viewing: [{name}]
      </div>
    </div>
  );
}
