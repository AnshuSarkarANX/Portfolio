import React from 'react'
import "./contacts.css"
const Contacts = () => {
  return (
    <>
      <hr className=" mx-[5vw] border-y-[1.5px]  border-dashed border-y-blackish" />
      <div className="py-10 relative flex justify-evenly">
        <button className=" navButton">
          <a href="mailto:anshusarkaranx@gmail.com" target="_blank">
            <img src="/assets/mail-icon.png" width="64" height="64" alt="Email" />
          </a>
        </button>
        <button className=" navButton">
          <a href="https://www.linkedin.com/in/anshusarkar/" target="_blank">
            <img src="/assets/linkedin-icon.png" width="64" height="64" alt="LinkedIn" />
          </a>
        </button>
        <button className=" navButton">
          <a href="https://github.com/AnshuSarkarANX" target="_blank">
            <img src="/assets/github-icon.png" width="64" height="64" alt="GitHub" />
          </a>
        </button>
        <button className=" navButton">
          <a href="https://x.com/Anshu7anx" target="_blank">
            <img src="/assets/twitter-icon.png" width="64" height="64" alt="Twitter / X" />
          </a>
        </button>
      </div>
    </>
  );
}

export default Contacts
