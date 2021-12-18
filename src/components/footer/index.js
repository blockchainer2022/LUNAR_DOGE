import Clipboard from "../clipboard";
import Logo from "../../assets/images/footer-logo.png";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";

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

          <div className="grid sm:grid-cols-2 gap-10 max-w-3xl mx-auto mt-4 items-center">
            <div>
              <div>
                <img src={Logo} alt="" />
              </div>
              <p className="text-white text-sm font-normal mt-8 ">
                Baby Doge is not an investment and created as a joke & meme
                parody like doge. Baby Doge makes no promises and is not
                responsible for any losses or errors use at your own risk. Baby
                Doge is not affiliated with DogeCoin or DogeCoin Foundation.
              </p>
            </div>
            <div>
              <p className="text-white font-bold text-xl">Follow Us</p>
              <ul className="grid grid-flow-col gap-4  justify-start mx-auto lg:mx-0 max-w-sm w-full text-white mt-10 flex-wrap">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
