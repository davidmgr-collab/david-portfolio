import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ closeForm }) => {

  const form = useRef();

  const [sent, setSent] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        {
          publicKey: "YOUR_PUBLIC_KEY",
        }
      )
      .then(() => {

        setSent(true);

        form.current.reset();

      })
      .catch((error) => {
        console.log(error);
      });

  };


  return (

    <div className="
      fixed inset-0 
      bg-black/70
      flex items-center justify-center
      z-50
    ">

      <div className="
        bg-[#111c33]
        p-8
        rounded-3xl
        w-full
        max-w-lg
        border
        border-gray-700
      ">


        <div className="flex justify-between mb-6">

          <h2 className="text-2xl font-bold text-white">
            Say Hello 👋
          </h2>


          <button
            onClick={closeForm}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>

        </div>



        {sent && (
          <p className="text-green-400 mb-4">
            Message sent successfully!
          </p>
        )}



        <form ref={form} onSubmit={sendEmail} className="space-y-5">


          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="
            w-full
            bg-[#0a1628]
            text-white
            p-3
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
            p-3
            rounded-xl
            outline-none
            border border-gray-700
            focus:border-cyan-400
            "
          />


          <textarea
            name="message"
            placeholder="Describe your project..."
            rows="5"
            required
            className="
            w-full
            bg-[#0a1628]
            text-white
            p-3
            rounded-xl
            outline-none
            border border-gray-700
            focus:border-cyan-400
            "
          ></textarea>



          <button
            type="submit"
            className="
            w-full
            bg-cyan-400
            text-black
            font-bold
            py-3
            rounded-xl
            hover:bg-cyan-300
            transition
            "
          >
            Send Message
          </button>


        </form>


      </div>

    </div>

  );
};


export default ContactForm;