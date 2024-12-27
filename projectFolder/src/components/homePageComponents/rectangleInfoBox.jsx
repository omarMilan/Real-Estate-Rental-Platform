import bedLogo from "../../assets/logosImages/bedLogo.png";
import bathLogo from "../../assets/logosImages/bathLogo.png";
import sizeLogo from "../../assets/logosImages/sizeLogo.png";
import mTapeLogo from "../../assets/logosImages/mTapeLogo.png";
import { useNavigate } from "react-router-dom";
import Button from "../button";

export default function RectInfoBox({ className }) {
  const navigate = useNavigate();

  return (
    <div className={`flex gap-x-0 absolute ${className || ""}`}>
      <div className="w-[199px] h-[199px] bg-black font-instrument-sans opacity-[92%] grid grid-rows-2 grid-cols-2 select-none">
        <div className="flex items-end pb-3 italic text-white justify-center text-[13px]">
          <img src={bedLogo} className="absolute mb-1 h-[85px] w-[85px]" />3
          Bedrooms
        </div>
        <div className="flex items-end pb-3 italic text-white justify-center text-[13px]">
          <img src={bathLogo} className="absolute mb-1 h-[85px] w-[85px]" />2
          Bathrooms
        </div>
        <div className="flex items-end pb-3 italic text-white justify-center text-[13px]">
          <img src={sizeLogo} className="absolute mb-2 h-[85px] w-[85px]" />
          1,859sqft
        </div>
        <div className="flex items-end pb-3 italic text-white justify-center text-[13px]">
          <img src={mTapeLogo} className="absolute mb-3 h-[75px] w-[75px]" />
          0.26acre lot
        </div>
      </div>
      <div className="w-[286px] h-[199px] bg-customBlue font-instrument-sans">
        <div className="flex items-center font-instrument-sans italic ml-5 mt-6">
          <div className="text-white text-[42px] font-medium">$2,295</div>
          <div className="text-white text-[24px] mt-2 font-normal">/mo</div>
        </div>
        <div className="font-instrument-sans text-[15px] text-white italic ml-5 -mt-1">
          1406 Rain Tree Dr,
        </div>
        <div className="font-instrument-sans text-[15px] text-white italic ml-5">
          Wylie, TX 75098
        </div>

        <div className="bg-customGrey hover:bg-gray-300 transition-all duration-200 w-[230px] h-[35px] flex justify-center text-[16px] select-none cursor-pointer  items-center self-end mx-auto mt-4 rounded-sm  shadow-sm">
          {" "}
          <Button onClick={() => navigate("/Contact-Page")}>
            Schedule a showing
          </Button>
        </div>
      </div>
    </div>
  );
}
