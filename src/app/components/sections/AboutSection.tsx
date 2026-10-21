import SectionTitle from "../ui/SectionTitle";
import { track } from "@vercel/analytics";

const AboutSection = () => {
  const handleClick = (button: string) => {
    track(`${button}_click`);
  };

  return (
    <>
      <section
        id="about-section"
        className="flex items-center bg-slate-950/90 py-20 min-h-screen"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] rounded-[2rem] bg-slate-900/80 p-8 backdrop-blur-sm">
            <div className="flex flex-col justify-center">
              <SectionTitle pageTitle="About Me" />
              <p className="text-slate-200 text-lg leading-7">
                I’m a software engineer with experience building web and mobile
                applications across healthcare and insurtech. I’ve worked with
                React, Next.js, React Native, TypeScript, Node.js, AWS, and
                PostgreSQL to build responsive interfaces, authentication flows,
                third-party API integrations, and production features used by
                real customers.
              </p>
              <p className="text-slate-200 text-lg leading-7">
                My path into software started in design, which still shapes how
                I approach development today. I care about both how a product
                works and how it feels to use, combining technical
                problem-solving with a strong eye for usability and
                presentation.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
              <img
                src="/pictures/1652164686829.jpeg"
                alt="Jordan's portrait"
                className="h-full w-full object-cover"
              />
              <div className="absolute left-1/2 bottom-4 -translate-x-1/2 z-30 p-2 flex justify-center gap-3">
                <a
                  onClick={() => handleClick("resume")}
                  href="/Jordan%20Williams%20Resume%20-%20SWE%20%26%20Implimentation.pdf"
                  download="Jordan_Williams_Resume_SWE_Implimentation.pdf"
                  aria-label="Download Jordan Williams resume"
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-sm text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v12m0 0l-4-4m4 4l4-4M21 21H3"
                    />
                  </svg>
                  Resume
                </a>

                <a
                  onClick={() => handleClick("linkedin")}
                  href="https://www.linkedin.com/in/jordanw0412"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile"
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-sm text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.75 1.75-1.75s1.75.78 1.75 1.75c0 .97-.784 1.76-1.75 1.76zm13.5 10.27h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v4.71z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
