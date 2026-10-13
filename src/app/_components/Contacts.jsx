import React from 'react'
import "./contacts.css"
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
const Contacts = () => {
  return (
    <>
      <hr className=" mx-[5vw] border-y-[1.5px]  border-dashed border-y-blackish" />
      <div className="py-10 relative flex justify-evenly">
        <button className=" navButton">
          <a href="mailto:anshusarkaranx@gmail.com" target="_blank">
            <MdAlternateEmail className="contactIcon" />
          </a>
        </button>
        <button className=" navButton">
          <a href="https://www.linkedin.com/in/anshusarkar/" target="_blank">
            <FaLinkedinIn className="contactIcon" />
          </a>
        </button>
        <button className=" navButton">
          <a href="https://github.com/AnshuSarkarANX" target="_blank">
            <FiGithub className="contactIcon" />
          </a>
        </button>
        <button className=" navButton">
          <a href="https://x.com/Anshu7anx" target="_blank">
            <FaXTwitter className=" contactIcon" />
          </a>
        </button>
      </div>
    </>
  );
};

export default Contacts
