import Button from "../button";

export default function VideoButtons({ name, url, onSelect, isSelected }) {
  return (
    <div
      className={`font-instrument-sans text-[18px] duration-300 transition-all ${
        isSelected
          ? "bg-customBlue shadow-inner font-medium"
          : "bg-gray-400 hover:shadow-inner duration-300 transition-all"
      } rounded-sm shadow-sm shadow-black h-[38px] w-[243px] duration-300 transition-all flex justify-center items-center z-10`}
    >
      <Button onClick={() => onSelect(url)}>{name}</Button>
    </div>
  );
}
