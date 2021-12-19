import { useState, useRef, useEffect } from "react";
import Logo from "../../assets/images/Logo.png";
// import Lunar from "../../assets/images/lunar.png";
import { HiMenuAlt3 } from "react-icons/hi";
import Image from "../../assets/images/header-image.jpg";
import "./style.css";
const Header = () => {
  const [show, setShow] = useState(false);

  const menuHandler = () => {
    setShow((prev) => !prev);
  };
  const menuRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="bg-gray text-white">
      <div className="container pb-3 pt-2 flex justify-between items-center">
        <div className="logo">
          <img src={Logo} alt="" className=" w-54" />
        </div>
        <ul className="xl:flex items-center hidden ">
          {linkList.map((val, i) => (
            <li key={i}>
              <a href={val.link} className="block p-3 font-medium">
                {val.text}
              </a>
            </li>
          ))}
          <li>
            <div className="text-center ">
              Audited by
              <img src={Image} alt="" className="w-32" />
            </div>
          </li>
        </ul>
        <button
          className="xl:hidden text-3xl  cursor-pointer"
          onClick={menuHandler}
        >
          <HiMenuAlt3 />
        </button>
      </div>
      <div
        className={`mobile-menu bg-gray  ${show ? "active" : ""}`}
        ref={menuRef}
      >
        <div className=" text-right  px-4 py-4 text-2xl">
          <i className="fas fa-times" onClick={menuHandler}></i>
        </div>
        <ul className=" lg:hidden">
          {linkList.map((val, i) => (
            <li key={i}>
              <a
                href={val.link}
                className="block p-3 font-medium"
                onClick={menuHandler}
              >
                {val.text}
              </a>
            </li>
          ))}
          <li>
            {/* <button className="flex items-center bg-dark-400 rounded-md  py-2.5 px-4 ml-2 ">
              <img src={Lunar} alt="" className="w-4 mr-2" />
              <span className="font-medium">Buy at Lunar Exchange</span>
            </button> */}
            <div className="text-left">
              Audited by
              <img src={Image} alt="" className="w-40 mt-1" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

const linkList = [
  {
    text: "Home",
    link: "#",
  },
  {
    text: "Details",
    link: "#details",
  },
  {
    text: "Exchange",
    link: "#exchange",
  },
  {
    text: "Document",
    link: "#document",
  },
  {
    text: "Tokenomics",
    link: "#tokenomics",
  },

  {
    text: "Roadmap",
    link: "#roadmap",
  },
  {
    text: "FAQ",
    link: "#faq",
  },
  {
    text: "Donations",
    link: "#donations",
  },
];
