import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const SERVICE_ID = "service_3igc4ib";
const TEMPLATE_ID = "template_v357ree";
const PUBLIC_KEY = "P1m9UBq5VZq74dknl";

const Contact: React.FC = () => {
  const hdref = useRef<HTMLHeadingElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useGSAP(() => {
    if (!hdref.current || !formRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hdref.current,
        start: "top 90%",
        end: "top 40%",
        toggleActions: "play none none reverse",
      },
    });
    tl.from(hdref.current, { opacity: 0, y: 80, duration: 0.5 });
    tl.from(formRef.current, { opacity: 0, y: 60, duration: 0.5 });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col bg-zinc-950 px-4 py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-neutral-950/5 to-transparent" />

      <div className="text-center mb-16 relative z-10">
        <h2
          ref={hdref}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-linear-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent"
        >
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-indigo-500 to-indigo-300 mx-auto rounded-full mb-4" />
        <p className="text-neutral-400 text-lg max-w-xl mx-auto">
          Have a project in mind, want to collaborate, or just want to say hi? My inbox is open.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label className="text-neutral-400 text-sm font-medium tracking-wide">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              required
              placeholder="Your name"
              className="bg-neutral-900 border border-neutral-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-white placeholder-neutral-600 outline-none transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-neutral-400 text-sm font-medium tracking-wide">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              required
              placeholder="your@email.com"
              className="bg-neutral-900 border border-neutral-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-white placeholder-neutral-600 outline-none transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-neutral-400 text-sm font-medium tracking-wide">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="What's on your mind?"
              className="bg-neutral-900 border border-neutral-700 focus:border-indigo-500 rounded-xl px-4 py-3 text-white placeholder-neutral-600 outline-none transition-colors duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-center text-green-400 text-sm font-medium">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-400 text-sm font-medium">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
