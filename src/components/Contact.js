import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState("");
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
        setStatus("Message sent successfully ✅");
        setLoading(false);
        form.current.reset();
      })
      .catch(() => {
        setStatus("Failed to send message ❌");
        setLoading(false);
      });
  };

  const openWhatsApp = () => {
    const phone = "250738998033"; // International format without '+'
    const text = encodeURIComponent("Hello David, I saw your portfolio and I'd like to talk about a project.");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-white dark:bg-[#0a1628] transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Me
        </h2>

        <div className="w-16 sm:w-20 h-1 bg-cyan-400 mx-auto mb-8 sm:mb-10 rounded-full"></div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Interested in working together or have a question?
          Feel free to reach out — I’m always open to discussing new projects and opportunities.
        </p>

        {/* Button */}
        <button
          onClick={() => setShowForm(true)}
          className="
            px-8 sm:px-10 py-3.5 sm:py-4
            bg-cyan-500 hover:bg-cyan-400
            text-white dark:text-[#0a1628]
            font-semibold rounded-full
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30
          "
        >
          Chat & Describe Projects You Want!!!!!!!!
        </button>

      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 sm:p-6 backdrop-blur-sm">
          <div
            className="
              bg-white dark:bg-[#111c33]
              w-full max-w-lg
              p-6 sm:p-8 rounded-3xl
              border border-gray-200 dark:border-gray-700
              shadow-2xl
              transition-colors
              max-h-[90vh] overflow-y-auto
              flex flex-col gap-6
            "
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Say Hello To  David👋
              </h3>

              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 text-3xl hover:text-gray-800 dark:hover:text-white leading-none transition"
              >
                ×
              </button>
            </div>

            {/* Status Message */}
            {status && (
              <p className="text-cyan-400 text-sm sm:text-base text-center font-medium bg-cyan-500/10 py-2 rounded-lg border border-cyan-500/20">
                {status}
              </p>
            )}

            {/* Email Form */}
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="
                    w-full p-3.5 sm:p-4 rounded-xl text-sm sm:text-base
                    bg-gray-100 dark:bg-[#0a1628]
                    text-gray-900 dark:text-white
                    border border-gray-300 dark:border-gray-700
                    focus:border-cyan-400 outline-none transition
                  "
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="
                    w-full p-3.5 sm:p-4 rounded-xl text-sm sm:text-base
                    bg-gray-100 dark:bg-[#0a1628]
                    text-gray-900 dark:text-white
                    border border-gray-300 dark:border-gray-700
                    focus:border-cyan-400 outline-none transition
                  "
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Describe your project..."
                  required
                  className="
                    w-full p-3.5 sm:p-4 rounded-xl text-sm sm:text-base
                    bg-gray-100 dark:bg-[#0a1628]
                    text-gray-900 dark:text-white
                    border border-gray-300 dark:border-gray-700
                    focus:border-cyan-400 outline-none transition
                    resize-none
                  "
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full py-3.5 sm:py-4 rounded-xl text-sm sm:text-base
                  bg-cyan-500 hover:bg-cyan-400
                  text-white dark:text-black
                  font-bold transition shadow-md
                  disabled:opacity-50
                "
              >
                {loading ? "Sending..." : "Send Email Message"}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-1">
              <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
              <span className="px-3 text-xs sm:text-sm text-gray-400 uppercase">Or</span>
              <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
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
                shadow-md
              "
            >
              <FaWhatsapp size={20} />
              <span>Chat on WhatsApp</span>
            </button>

          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;