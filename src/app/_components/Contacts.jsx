const Contacts = () => {
  return (
    <>
      <hr className="mx-[5vw] border-y-[3px] border-dashed border-y-soot" />
      <footer className="py-12 relative">
        <div className="flex flex-wrap justify-evenly gap-6">
          <a
            href="mailto:anshusarkaranx@gmail.com"
            target="_blank"
            aria-label="Email Anshu Sarkar"
            className="stamp-btn p-3"
          >
            <img src="/assets/mail-icon.png" width="40" height="40" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/anshusarkar/"
            target="_blank"
            aria-label="Anshu Sarkar on LinkedIn"
            className="stamp-btn stamp-btn--blue p-3"
          >
            <img src="/assets/linkedin-icon.png" width="40" height="40" alt="" />
          </a>
          <a
            href="https://github.com/AnshuSarkarANX"
            target="_blank"
            aria-label="Anshu Sarkar on GitHub"
            className="stamp-btn p-3"
          >
            <img src="/assets/github-icon.png" width="40" height="40" alt="" />
          </a>
          <a
            href="https://x.com/Anshu7anx"
            target="_blank"
            aria-label="Anshu Sarkar on X"
            className="stamp-btn stamp-btn--blue p-3"
          >
            <img src="/assets/twitter-icon.png" width="40" height="40" alt="" />
          </a>
        </div>
        <p className="mt-10 text-center font-marks text-xs uppercase tracking-widest text-soot/60">
          Designed & printed by Anshu Sarkar — two inks, no reprints
        </p>
      </footer>
    </>
  );
};

export default Contacts;
