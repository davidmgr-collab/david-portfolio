import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ closeForm }) => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_w1wpjdr",
        "template_3pu1vux",
        form.current,
        {
          publicKey: "JbCoKef7b35xGlBZc",
        }
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  // Function to open WhatsApp chat directly
  const openWhatsApp = () => {
    const phone = "250738998033"; // International format without '+'
    const text = encodeURIComponent("Hello David, I saw your portfolio and I'd like to talk about a project.");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <div className="
      fixed inset-0 
      bg-black/70
      flex items-center justify-center
      z-50
      p-4
    ">

      <div className="
        bg-[#111c33]
        p-6 sm:p-8
        rounded-3xl
        w-full
        max-w-lg
        border
        border-gray-700
        max-h-[90vh]
        overflow-y-auto
      ">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Say Hello 👋
          </h2>

          <button
            onClick={closeForm}
            className="text-gray-400 hover:text-white text-3xl leading-none"
          >
            ✕
          </button>
        </div>

        {sent && (
          <p className="text-green-400 text-sm sm:text-base mb-4">
            Message sent successfully! ✅
          </p>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="
              w-full
              bg-[#0a1628]
              text-white
              text-sm sm:text-base
              p-3 sm:p-4
              rounded-xl
              outline-none
              border border-gray-700
              focus:border-cyan-400
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="
              w-full
              bg-[#0a1628]
              text-white
              text-sm sm:text-base
              p-3 sm:p-4
              rounded-xl
              outline-none
              border border-gray-700
              focus:border-cyan-400
            "
          />

          <textarea
            name="message"
            placeholder="Describe your project..."
            rows="4"
            required
            className="
              w-full
              bg-[#0a1628]
              text-white
              text-sm sm:text-base
              p-3 sm:p-4
              rounded-xl
              outline-none
              border border-gray-700
              focus:border-cyan-400
              resize-none
            "
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-cyan-400
              text-black
              font-bold
              py-3.5 sm:py-4
              rounded-xl
              hover:bg-cyan-300
              transition
              text-sm sm:text-base
              disabled:opacity-50
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="px-3 text-gray-400 text-xs uppercase tracking-wider">or</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="
            w-full
            bg-emerald-600
            hover:bg-emerald-500
            text-white
            font-bold
            py-3.5 sm:py-4
            rounded-xl
            transition
            flex items-center justify-center gap-2
            text-sm sm:text-base
          "
        >
          <span>Chat on WhatsApp</span> 💬
        </button>

      </div>

    </div>
  );
};

export default ContactForm;