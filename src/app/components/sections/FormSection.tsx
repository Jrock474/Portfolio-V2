import React from "react";
import { track } from "@vercel/analytics";

const FormSection = () => {
  const handleClick = (button: string) => {
    track(`${button}_click`);
  };
  return (
    <section
      id="contact-section"
      className="bg-slate-900/80 py-20 h-screen flex items-center"
    >
      <div className="mx-auto max-w-5xl px-6 text-center  flex-col">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Let’s Connect!
        </h2>

        <form
          action="https://formsubmit.co/jordanw0412@gmail.com"
          method="POST"
          className="space-y-4 text-left"
        >
          <input type="hidden" name="_captcha" value="false" />
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
            />
          </div>
          <input
            type="text"
            name="organization"
            placeholder="Organization (optional)"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          />
          <input
            type="text"
            name="_subject"
            placeholder="Subject"
            required
            className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            required
            className="w-full rounded-[1.5rem] border border-white/10 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          />
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              type="submit"
              className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Send message
            </button>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                onClick={() => handleClick("resume")}
                href="https://www.linkedin.com/in/jordanw0412"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm text-white transition hover:bg-white/20"
              >
                LinkedIn
              </a>
              <a
                onClick={() => handleClick("resume")}
                href="/Jordan%20Williams%20Resume%20-%20SWE%20%26%20Implimentation.pdf"
                download="Jordan_Williams_Resume_SWE_Implimentation.pdf"
                aria-label="Download resume"
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm text-white transition hover:bg-white/20"
              >
                Resume
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
