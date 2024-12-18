export default function AmenitiesCards({
  title,
  FactOne,
  ResponseOne,
  FactTwo,
  ResponseTwo,
  FactThree,
  ResponseThree,
}) {
  return (
    <div>
      <div className="font-instrument-sans text-[32px] font-semibold">
        {title}
      </div>
      <div className="bg-slate-400 rounded-sm drop-shadow-md shadow-black min-h-[156px] w-[707px] size-[20px] p-4 text-[17px] font-semibold">
        <div className="flex flex-col gap-y-5">
          {FactOne && ResponseOne && (
            <div className="flex">
              <div className="font-bold">{FactOne}:</div>
              <div className="ml-2 font-normal">{ResponseOne}</div>
            </div>
          )}
          {FactTwo && ResponseTwo && (
            <div className="flex">
              <div className="font-bold">{FactTwo}:</div>
              <div className="ml-2 font-normal">{ResponseTwo}</div>
            </div>
          )}
          {FactThree && ResponseThree && (
            <div className="flex">
              <div className="font-bold">{FactThree}:</div>
              <div className="ml-2 font-normal">{ResponseThree}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
