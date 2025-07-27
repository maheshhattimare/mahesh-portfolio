import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, User, MessageSquare, Send, Rocket } from "lucide-react";
import conf from "../../conf/conf";

const ContactSection = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle email sending
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formElement = form.current;

    if (formElement) {
      emailjs
        .sendForm(
          conf.emailjsServiceId,
          conf.emailjsTemplateId,
          formElement,
          conf.emailjsPublicKey
        )
        .then(
          () => {
            setIsSent(true);
            setIsLoading(false);
            formElement.reset();
            toast.success("Message sent successfully! ✅", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          },
          (error) => {
            setIsLoading(false);
            console.error("Error sending message:", error);
            toast.error("Failed to send message. Please try again.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:via-[#050414] dark:to-purple-900/20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

      {/* Toast Container */}
      <ToastContainer />

      <div className="relative max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Mail className="w-6 h-6 text-blue-600 dark:text-[#8245ec]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              CONTACT
            </h2>
            <MessageSquare className="w-6 h-6 text-blue-600 dark:text-[#8245ec]" />
          </div>

          {/* Decorative underline */}
          <div className="w-24 h-4 mx-auto mb-6">
            <svg
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0 5 Q 25 3, 50 5 T 100 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-600 dark:text-[#8245ec]"
              />
            </svg>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            I'd love to hear from you—reach out for any opportunities or
            questions!
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg bg-white dark:bg-gray-900/80 backdrop-blur-lg p-6 sm:p-8 rounded-3xl shadow-xl dark:shadow-[0_0_40px_rgba(130,69,236,0.2)] border border-gray-200 dark:border-gray-800/50">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
                Connect With Me
                <Rocket className="w-5 h-5 text-blue-600 dark:text-[#8245ec] animate-bounce" />
              </h3>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Email Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500 group-focus-within:text-blue-600 dark:group-focus-within:text-[#8245ec] transition-colors duration-200" />
                </div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#8245ec] focus:border-transparent transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              {/* Name Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400 dark:text-gray-500 group-focus-within:text-blue-600 dark:group-focus-within:text-[#8245ec] transition-colors duration-200" />
                </div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#8245ec] focus:border-transparent transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              {/* Subject Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-400 dark:text-gray-500 group-focus-within:text-blue-600 dark:group-focus-within:text-[#8245ec] transition-colors duration-200" />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#8245ec] focus:border-transparent transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              {/* Message Field */}
              <div className="relative group">
                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#8245ec] focus:border-transparent transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#8245ec] dark:to-purple-400 hover:from-blue-700 hover:to-purple-700 dark:hover:from-[#7c3aed] dark:hover:to-purple-500 py-4 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <Send className="w-5 h-5 group-hover:animate-pulse" />
                )}
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
