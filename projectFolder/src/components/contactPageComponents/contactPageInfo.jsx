import ContactAgentInfo from "./contactAgentInfo";
import ContactForm from "./contactForm";

export default function ContactPageInfo() {
  return (
    <div className="z-30 w-full min-h-fit font-instrument-sans overflow-hidden">
      <div className="font-instrument-sans z-0 font-light flex mt-[37px] flex-col items-center justify-center text-[32px]">
        Get in Touch Today!
      </div>
      <ContactForm className={"mt-12 ml-12 mb-20 rounded-sm"} />
      <ContactAgentInfo
        className={
          "top-1/2 left-1/2 transform translate-x-32 translate-y-[245px]"
        }
      />
    </div>
  );
}
