import React, { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const Email: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      setError("Form reference is null.");
      return;
    }

    emailjs
      .sendForm(
        "service_hwyhjfz",
        "template_9lfl4hu",
        formRef.current,
        "7clPkNYRivvVrSTEo"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          if (formRef.current) formRef.current.reset();
          setEmailSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error);
          setError("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-16 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Connect to my social media account to get notified of new products
        </p>
        <div className="socials flex items-center flex-row gap-2">
          <Link to="https://www.tiktok.com/@milestonedrones">
            <img
              src="/assets/tiktok.svg"
              className="w-8 h-8"
              alt="Tiktok Icon"
            />
          </Link>
          <Link to="https://wa.me/message/PXLCDRB5QCOFJ1">
            <img
              src="/assets/whatsapp.svg"
              className="w-10 h-10"
              alt="Whatsapp Icon"
            />
          </Link>
          <Link to="https://www.instagram.com/ungoka838?igsh=MTk0dzRhd3E0ODNkNg%3D%3D&utm_source=qr">
            <img
              src="/assets/instagram.svg"
              className="w-8 h-8"
              alt="Instagram Icon"
            />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" ref={formRef} onSubmit={sendEmail}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Name
              </label>
              <input
                name="from_name"
                type="text"
                id="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Email
              </label>
              <input
                name="from_email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </section>
  );
};

export default Email;
