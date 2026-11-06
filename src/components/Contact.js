import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
          Say Hello
        </button>

      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 sm:p-6">
          <div
            className="
              bg-white dark:bg-[#111c33]
              w-full max-w-lg
              p-6 sm:p-8 rounded-3xl
              border border-gray-200 dark:border-gray-700
              shadow-2xl
              transition-colors
              max-h-[90vh] overflow-y-auto
            "
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Send Message
              </h3>

              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 text-3xl hover:text-gray-800 dark:hover:text-white leading-none"
              >
                ×
              </button>
            </div>

            {/* Status */}
            {status && (
              <p className="text-cyan-400 text-sm sm:text-base mb-4">{status}</p>
            )}

            {/* Form */}
            <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-5">
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
                  focus:border-cyan-400 outline-none
                "
              />

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
                  focus:border-cyan-400 outline-none
                "
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Describe your project..."
                required
                className="
                  w-full p-3.5 sm:p-4 rounded-xl text-sm sm:text-base
                  bg-gray-100 dark:bg-[#0a1628]
                  text-gray-900 dark:text-white
                  border border-gray-300 dark:border-gray-700
                  focus:border-cyan-400 outline-none
                  resize-none
                "
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full py-3.5 sm:py-4 rounded-xl text-sm sm:text-base
                  bg-cyan-500 hover:bg-cyan-400
                  text-white dark:text-black
                  font-bold transition
                  disabled:opacity-50
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;