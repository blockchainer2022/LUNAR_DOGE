import Rocket from "../assets/images/rocket.png";
import "./style.css";
import Doge from "../assets/images/bannerSide.png";
import Lunar2 from "../assets/images/lunar2.png";
import {
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaDiscord,
} from "react-icons/fa";
import { AiOutlineReddit } from "react-icons/ai";

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
  {
    link: "#",
    icon: <FaFacebookF />,
  },
  {
    link: "#",
    icon: <FaDiscord />,
  },
  {
    link: "#",
    icon: <AiOutlineReddit />,
  },
];

const Banner = () => {
  return (
    <section className="banner">
      <div className="container py-20 pb-48">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="mt-28 lg:mt-0">
            <h1
              className="text-4xl md:text-6xl font-black text-center lg:text-left"
              data-aos="fade-down"
            >
              <span className="text-white">Blast off With</span>
              <br />
              <span className="text-primary justify-center lg:justify-start flex items-end">
                <span>Lunar Doge</span>
                <img src={Rocket} alt="" className="ml-4" />
              </span>
            </h1>
            <ul
              className="grid grid-flow-col gap-4  mx-auto lg:mx-0 max-w-sm w-full text-white mt-20  flex-wrap"
              data-aos="fade-down"
              data-aos-delay="500"
            >
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
          <div className="text-center " data-aos="fade-down">
            <img src={Doge} alt="" className="mx-auto" />
            <button className="banner-button flex items-center p-3 px-4 text-white mx-auto capitalize">
              <img src={Lunar2} alt="" className="  w-14" />{" "}
              <span className="font-bold ml-2 inline-block">
                Buy at lunar exchange
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
