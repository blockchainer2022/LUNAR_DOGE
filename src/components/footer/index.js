import Clipboard from "../clipboard";
import Logo from "../../assets/images/Logo.png";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
import Lunar from "../../assets/images/lunar.png";
import Image from "../../assets/images/header-image.jpg";
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
            <div className="text-center text-white">
              <p className="text-white font-bold text-xl text-center">
                Audited By
              </p>
              <a
                href="https://github.com/Tech-Audit/Smart-Contract-Audits/blob/main/TECHAUDIT_LUNARDOGE.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Image} alt="" className="w-32 mx-auto  mt-10" />
              </a>
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
                      target="_blank"
                      className="w-10 h-10 border border-white bg-black  grid place-content-center text-lg hover:bg-primary hover:text-black transition-all duration-300"
                      rel="noreferrer"
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
              <a
                href="https://www.pinksale.finance/#/launchpad/0x2b5FA9fFe79e61490f6f7a90b2C0eCAb914f3399?chain=BSC"
                target="_blank"
                className="flex items-center mt-10 bg-dark-400 rounded-md  max-w-max  py-2.5 px-4 mx-auto "
                rel="noreferrer"
              >
                <img src={Lunar} alt="" className="w-4 mr-2" />
                <span className="font-medium text-white">BUY PRESALE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
