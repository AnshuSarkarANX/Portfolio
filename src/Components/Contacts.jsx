import React from 'react'
import "./contacts.css"
const Contacts = () => {
  return (
    <>
      <hr className= " mt-[-3vh] mx-[5vw] border-y-[1.5px]  border-dashed border-y-blackish" />
      <div className="my-10 relative flex justify-evenly">
        <button className=" navButton">
          <a href="mailto:anshusarkaranx@gmail.com" target="_blank">
            <img src="/assets/mail-icon.png" />
          </a>
        </button>
        <button className=" navButton">
          <a href="https://www.linkedin.com/in/anshu-sarkar/" target="_blank">
            <img src="/assets/linkedin-icon.png" />
          </a>
        </button>
        <button className=" navButton">
          <a href="https://github.com/AnshuSarkarANX" target="_blank">
            <img src="/assets/github-icon.png" />
          </a>
        </button>
        <button className=" navButton">
          <a href="https://x.com/Anshu7anx" target="_blank">
            <img src="/assets/twitter-icon.png" />
          </a>
        </button>
      </div>
    </>
  );
}

export default Contacts