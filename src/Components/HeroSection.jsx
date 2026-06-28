import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// The two phrases to cycle between
const PHRASES = ["Frontend\nDeveloper", "Full Stack\nDeveloper"];

export default function HeroSection({ handleResumeDownload }) {
  const sectionRef = useRef(null); // scope ref — all GSAP selectors are scoped to this
  const roleRef = useRef(null); // the <p class="role"> element

  useGSAP(
    () => {
      const el = roleRef.current;
      let phraseIndex = 0;

      // Split the text into individual characters so we can animate each one
      const buildChars = (text) => {
        el.innerHTML = text
          .split("")
          .map((char) =>
            char === "\n"
              ? "<br/>"
              : `<span class="char" style="display:inline-block; opacity:0">${char}</span>`,
          )
          .join("");
        return el.querySelectorAll(".char");
      };

      const animateIn = (chars) =>
        gsap.fromTo(
          chars,
          { opacity: 0, y: 12 }, // start: invisible, slightly below
          {
            opacity: 1,
            y: 0,
            duration: 0.04, // each character takes 0.04s
            stagger: 0.04, // each char starts 0.04s after the previous
            ease: "none",
          },
        );

      const animateOut = (chars) =>
        gsap.to(chars, {
          opacity: 0,
          y: -10,
          duration: 0.02,
          stagger: 0.02,
          ease: "power1.in",
        });

      // Build and run the cycling loop
      const cycle = () => {
        const chars = buildChars(PHRASES[phraseIndex]);
        const inAnim = animateIn(chars);

        // After 2.5s visible, fade out then switch phrase
        inAnim.eventCallback("onComplete", () => {
          gsap.delayedCall(2.5, () => {
            const outAnim = animateOut(chars);
            outAnim.eventCallback("onComplete", () => {
              phraseIndex = (phraseIndex + 1) % PHRASES.length;
              cycle(); // loop forever
            });
          });
        });
      };

      cycle();
    },
    { scope: sectionRef },
  ); 

  return (
    <div
      ref={sectionRef}
      className="mainSection text-center h-screen pb-[50px] sm:pb-[100px]"
    >
      <div className="grid lg:grid-cols-10 h-full bg-[url('./assets/abstract_element.svg')] bg-fit bg-[position:30%_center] bg-no-repeat">
        <div className="sm:col-span-6 flex flex-col justify-between">
          <div className="bg-backGround text-secondary text-opacity-50 border-solid border border-secondary border-opacity-30 w-fit px-[10px]">
            SYS.INIT // 2024
          </div>
          <div className="w-fit">
            <p className="name">
              ANSHU <br />
              SARKAR
            </p>
            <p className="font-jetbrains text-[12px] sm:text-[16px] opacity-70 text-center">
              ENGINEERING DIGITAL INTERFACES
            </p>

            {/*  ref attached here, GSAP rewrites innerHTML directly */}
            <p ref={roleRef} className="role text-nowrap" />
          </div>
        </div>

        <div className="sm:col-span-4 flex items-end">
          <div className="border-l border-solid border-black font-jetbrains px-[20px]">
            <p className="opacity-70 text-left mb-[20px] text-[12px] sm:text-[16px]">
              Software Engineer with experience building scalable web
              applications, real-time systems, and workflow-driven platforms
              using React. Worked on backend integrations, APIs, and data
              pipelines, with a growing focus on full-stack development and
              GenAI integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-[25px]">
              <button className="bg-backGround hover:bg-blackish hover:text-white text-secondary border-solid border border-secondary border-opacity-50 px-[10px] py-[10px] sm:py-[2px] w-full sm:w-fit">
                INITIATE_CONTACT()
              </button>
              <button
                onClick={handleResumeDownload}
                className="bg-backGround hover:bg-blackish hover:text-white text-secondary border-solid border border-secondary border-opacity-50 px-[10px] py-[10px] sm:py-[2px] w-full sm:w-fit"
              >
                DL_RESUME.PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
