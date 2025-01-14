import agentPic from "../../assets/otherImages/agentHeadShot.webp";

export default function ContactAgentInfo({ className }) {
  return (
    <div
      className={`w-[610px] rounded-sm h-[382px] flex flex-col justify-center items-center absolute ring-2 ring-slate-400 border-2 border-black hover:border-slate-400 hover:ring-black transition-all duration-500 bg-slate-400 ${className}`}
    >
      {/* Agent Picture */}
      <img
        src={agentPic}
        alt="Agent"
        className="h-48  flex top-0 absolute mt-8 rounded-sm shadow-sm ring-2 ring-slate-400 border-2 border-black hover:border-slate-400 hover:ring-black transition-all duration-500 drop-shadow-sm"
      />

      {/* Agent Information */}
      <div className="mt-48 text-center">
        {/* Name */}
        <p className="text-xl font-bold text-black">John Doe</p>
        {/* Title  */}
        <p className="text-base text-slate-600">Realtor</p>
        {/* Email */}
        <p className="text-lg text-black">
          Email:{" "}
          <a href="mailto:johndoe@example.com" className="hover:text-blue-600">
            johndoe@example.com
          </a>
        </p>
        {/* Phone Number */}
        <p className="text-base text-black">
          Phone:{" "}
          <a href="tel:+1234567890" className="hover:text-blue-600">
            (123) 456-7890
          </a>
        </p>
      </div>
    </div>
  );
}
