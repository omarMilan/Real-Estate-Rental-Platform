export default function ContactForm({ className }) {
  const sendEmail = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div
      className={`w-[754px] h-[380px] bg-slate-400 font-bold shadow-sm ring-2 ring-slate-400 border-2 border-black hover:border-slate-400 hover:ring-black transition-all duration-500 text-white font-instrument-sans ${className}`}
    >
      <form
        className="contact-form font-instrument-sans text-black"
        onSubmit={sendEmail}
      >
        {/* Name Section */}
        <div className="ml-5 mt-5 flex">
          <label className="text-black w-32 text-md">Name</label>
          <input
            className="w-[800px] -translate-x-6 rounded-sm"
            type="text"
            name="from_name"
          />
        </div>

        {/* Email Section */}
        <div className="ml-5 mt-5 flex">
          <label className="text-black w-32 text-md">Email</label>
          <input
            className="w-[800px] -translate-x-6 rounded-sm"
            type="email"
            name="from_email"
          />
        </div>

        {/* Message Section */}
        <div className="ml-5 mt-5 flex flex-col">
          <label className="text-black text-md mb-2">Message</label>
          <textarea
            name="message"
            className="w-[707px] rounded-sm z-10 h-[150px]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="ml-5 mt-5 flex text-md justify-center">
          <input
            type="submit"
            value="Send"
            className="px-6 py-2 rounded-sm shadow-sm ring-2 ring-slate-400 border-2 border-black hover:border-slate-400 hover:ring-black transition-all duration-500 bg-slate-400 text-black"
          />
        </div>
      </form>
    </div>
  );
}
