import { useState } from "react";
import Title from "../components/title";
import Metamask from "../assets/images/metamask.png";
const HowtoBuy = () => {
  const [currentActive, setCurrentActive] = useState(0);

  return (
    <div className="bg-white py-20 buy" id="exchange" data-aos="fade-down">
      <div className="container">
        <Title title="How To Buy Lunar Doge" backtext="How to Buy2" />
        <div className=" md:flex mt-32">
          <div className="flex justify-between md:block">
            {[1, 2, 3, 4, 5, 6].map((val, i) => (
              <div
                key={i}
                onClick={() => setCurrentActive(i)}
                className={` mb-20  cursor-pointer ${
                  currentActive === i
                    ? "border-b-4 md:border-l-4 md:border-b-0 border-primary text-primary "
                    : "text-gray-600"
                }`}
              >
                <p className="text-2xl font-bold ml-2"> {val}</p>
              </div>
            ))}
          </div>
          <div className="flex-1 text-center">
            <div className="w-14 h-14 sm:w-20 sm:h-20 font-bold text-4xl rounded-full grid  place-content-center bg-primary mx-auto">
              1
            </div>
            <div className=" mt-20">
              <img src={Metamask} alt="" className=" w-80 mx-auto" />
            </div>
            <p className="font-medium text-base sm:text-2xl mt-6">
              Download MetaMask, Trust Wallet, or use an existing wallet
            </p>
            <p className="font-normal text-gray-500 text-base sm:text-2xl max-w-3xl mx-auto mt-8">
              Head to metamask.io and download their wallet to your Smart Phone
              or Chrome/Firefox browser.
            </p>
            <p className="font-normal text-gray-500 text-base sm:text-2xl  mx-auto mt-8">
              (This is where your LunarDoge Tokens will be securely stored.)
            </p>
            <button className="bg-primaryLight py-3 px-10 rounded-sm    uppercase font-medium text-base mt-16 shadow-2xl">
              Download Metamask
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowtoBuy;
