import Clipboard from "../clipboard";
import Logo from "../../assets/images/Logo.png";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
import Lunar from "../../assets/images/lunar.png";
import Image from "../../assets/images/header-image.jpg";
const iconList = [
  {
    link: "#",
    icon: <FaTelegramPlane />,
  },
  {
    link: "#",
    icon: <FaTwitter />,
  },
  {
    link: "#",
    icon: <FaInstagram />,
  },
];

const Footer = () => {
  return (
    <div className="footer bg-black pb-20" data-aos="fade-in">
      <div className="container">
        <div className="">
          <Clipboard />

          <div className="grid sm:grid-cols-4 gap-10  mt-4 items-center">
            <div>
              <div>
                <img src={Logo} alt="" className="mx-auto" />
              </div>
            </div>
            <div className="text-center ">
              Audited by
              <img src={Image} alt="" className="w-32" />
            </div>
            <div>
              <p className="text-white font-bold text-xl text-center">
                Follow Us
              </p>
              <ul className="grid grid-flow-col gap-4  justify-center lg:mx-0 w-full text-white mt-10 flex-wrap ">
                {iconList.map((v, i) => (
                  <li key={i}>
                    <a
                      href={v.link}
                      className="w-10 h-10 border border-white bg-black  grid place-content-center text-lg hover:bg-primary hover:text-black transition-all duration-300"
                    >
                      {v.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white font-bold text-xl text-center">
                Buy Lunar
              </p>
              <button className="flex items-center mt-10 bg-dark-400 rounded-md  py-2.5 px-4 mx-auto ">
                <img src={Lunar} alt="" className="w-4 mr-2" />
                <span className="font-medium text-white">Buy at LunarSwap</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
