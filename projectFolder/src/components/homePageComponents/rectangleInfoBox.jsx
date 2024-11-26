export default function RectInfoBox({ className }) {
  return (
    <div className={`flex gap-x-0 absolute ${className || ""}`}>
      <div className="w-[199px] h-[199px] bg-black opacity-[92%]"></div>
      <div className="w-[286px] h-[199px] bg-customBlue font-instrument-sans">
        <div className="flex items-center font-instrument-sans italic ml-5 mt-6">
          <div className="text-white text-[42px] font-medium">$2,425</div>
          <div className="text-white text-[24px] mt-2 font-normal">/mo</div>
        </div>
        <div className="font-instrument-sans text-[15px] text-white italic ml-5 -mt-1">
          1406 Rain Tree Dr,
        </div>
        <div className="font-instrument-sans text-[15px] text-white italic ml-5">
          Wylie, TX 75098
        </div>
      </div>
    </div>
  );
}
