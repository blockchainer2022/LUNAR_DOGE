import Rocket from "../assets/images/rocket.png";
import "./style.css";
import Doge from "../assets/images/bannerSide.png";
import Lunar2 from "../assets/images/lunar2.png";
import {
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  // FaFacebookF,
  // FaDiscord,
} from "react-icons/fa";
// import { AiOutlineReddit } from "react-icons/ai";

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
  // {
  //   link: "#",
  //   icon: <FaFacebookF />,
  // },
  // {
  //   link: "#",
  //   icon: <FaDiscord />,
  // },
  // {
  //   link: "#",
  //   icon: <AiOutlineReddit />,
  // },
];

const Banner = () => {
  return (
    <section className="banner">
      <div className="container py-20 pb-48">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-8 items-center">
          <div className="mt-20 lg:mt-0" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold text-center lg:text-left">
              <span className="text-white mb-2.5 inline-block">
                Blast off With
              </span>
              <br />
              <span className="text-primary justify-center lg:justify-start flex items-end">
                <span>Lunar Doge</span>
                <img src={Rocket} alt="" className="ml-4" />
              </span>
            </h1>
            <p className="text-center lg:text-left text-gray-400 mt-5 max-w-3xl mx-auto w-full">
              With our large marketing team, rewarding tokenomics, and ambitious
              roadmap, we're confident Lunar Doge will soar farther than any
              other Doge coin.
            </p>
            <div className="flex  flex-col lg:flex-row items-center lg:justify-start justify-center mt-8">
              <ul className="grid grid-flow-col gap-4 justify-center lg:justify-start items-center  text-white  flex-wrap">
                {iconList.map((v, i) => (
                  <li key={i}>
                    <a
                      href={v.link}
                      className="w-16 h-16 border border-white bg-black  grid place-content-center text-2xl hover:bg-primary hover:text-black transition-all duration-300 rounded-sm"
                    >
                      {v.icon}
                    </a>
                  </li>
                ))}
                <li></li>
              </ul>
              <button className="banner-button mt-6 lg:mt-0 flex items-center py-2 px-7 text-white capitalize">
                <img src={Lunar2} alt="" className="  w-14" />{" "}
                <span className="font-bold ml-4 inline-block text-lg">
                  LunarExchange
                </span>
              </button>
            </div>
          </div>
          <div className="text-center " data-aos="fade-left">
            <img src={Doge} alt="" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
