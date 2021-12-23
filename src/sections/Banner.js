import Rocket from "../assets/images/rocket.png";
import "./style.css";
// import Doge from "../assets/images/bannerSide.png";
import Lunar2 from "../assets/images/lunar2.png";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
import Star from "../assets/images/Vector.png";
import Vedio from "../assets/images/banner.mp4";

const iconList = [
  {
    link: "https://t.me/Lunar_Doge",
    icon: <FaTelegramPlane />,
  },
  {
    link: "https://twitter.com/Lunar__Doge",
    icon: <FaTwitter />,
  },
  {
    link: "https://www.instagram.com/lunar.doge/?hl=en",
    icon: <FaInstagram />,
  },
];

const Banner = () => {
  return (
    <section className="banner relative">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((v) => (
        <img
          src={Star}
          alt=""
          className={` absolute animate-pulse top-1/3 banner-star${v}`}
          key={v}
        />
      ))}
      <div className="container py-20 pb-48">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-8 items-center">
          <div className="mt-20 lg:mt-0" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl capitalize font-bold text-center lg:text-left">
              <span className="text-white mb-2.5 inline-block">
                Blast off With
              </span>
              <br />
              <span className="text-primary justify-center lg:justify-start flex items-end">
                <span>Lunar Doge</span>
                <img src={Rocket} alt="" className="ml-4" />
              </span>
            </h1>
            <p className="text-center lg:text-left text-gray-400 mt-5   mx-auto w-full capitalize text-sm">
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
                      target="_blank"
                      className="w-14 h-14 border border-white bg-black  grid place-content-center text-2xl  md:text-3xl hover:bg-primary hover:text-black transition-all duration-300 rounded-sm"
                      rel="noreferrer"
                    >
                      {v.icon}
                    </a>
                  </li>
                ))}
                <li></li>
              </ul>
              <a
                href="https://swap.lunardogetoken.com/"
                target="_blank"
                className="banner-button rounded-md mt-6 lg:mt-0 flex items-center py-2 px-5 text-white capitalize"
                rel="noreferrer"
              >
                <img src={Lunar2} alt="" className="  w-10" />{" "}
                <span className="font-medium ml-3 inline-block text-base">
                  LunarSwap
                </span>
              </a>
            </div>
          </div>
          <div className="text-center " data-aos="fade-left">
            {/* <img src={Doge} alt="" className="mx-auto max-w-md w-full" /> */}
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
              className=" md:w-full"
              // poster={BannerImg}
            >
              <source src={Vedio} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
