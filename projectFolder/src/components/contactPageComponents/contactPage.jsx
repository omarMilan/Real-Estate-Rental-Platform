import Header from "../header";
import Homeimage12 from "../../assets/homeImages/Homeimage12.webp";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 opacity-50" />
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src={Homeimage12}
          alt="Background"
          className="w-full h-full object-cover object-center transform "
        />
        <div className="select-none absolute pl-[70px] font-light inset-0 flex italic drop-shadow-md flex-col items-start justify-center text-white text-[42px] font-instrument-sans z-10">
          <div>We’re Here to Help,</div>
          <div className="mt-2">Reach Out with Any Questions!</div>
        </div>
      </div>
    </div>
  );
}
