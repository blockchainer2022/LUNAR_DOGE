import { useState } from "react";
import Title from "../components/title";
import Metamask from "../assets/images/metamask.png";
import Moon from "../assets/images/bannerSide.png";
import Pancakes2 from "../assets/images/Binance.svg";
import TrustWallet from "../assets/images/trust-wallet.svg";
import Star from "../assets/images/Vector.png";
import Lunar from "../assets/images/lunar.png";
const HowtoBuy = () => {
  const [currentActive, setCurrentActive] = useState(0);

  return (
    <div className="bg-white py-20 relative buy" id="exchange">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => (
        <img
          src={Star}
          alt=""
          className={`hidden md:block absolute animate-pulse top-1/3 roadmap-star${v}`}
          key={v}
        />
      ))}
      <div className="container" data-aos="fade-down">
        <Title title="How To Buy Lunar Doge" backtext="How to Buy2" />
        <div className=" md:flex mt-20">
          <div className="flex justify-between md:block">
            {[1, 2, 3, 4, 5, 6].map((val, i) => (
              <div
                key={i}
                onClick={() => setCurrentActive(i)}
                className={` mb-14  cursor-pointer ${
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
            {currentActive === 0 ? (
              <Box1 />
            ) : currentActive === 1 ? (
              <Box2 />
            ) : currentActive === 2 ? (
              <Box3 />
            ) : currentActive === 3 ? (
              <Box4 />
            ) : currentActive === 4 ? (
              <Box5 />
            ) : (
              <Box6 />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowtoBuy;

const Box1 = () => (
  <>
    <div className="w-12 h-12 sm:w-20 sm:h-20 font-bold text-2xl sm:text-4xl rounded-full grid  place-content-center bg-primary mx-auto">
      1
    </div>
    <div className=" mt-14 grid  grid-flow-col justify-center gap-4 items-center">
      <img src={Metamask} alt="" className=" w-60 " />
      <img src={TrustWallet} alt="" className=" w-60 " />
    </div>
    <p className="font-bold text-base sm:text-xl mt-6 max-w-xl mx-auto">
      Download Metamask or TrustWallet to your Smart Phone or browser to store
      your LunarDoge Tokens
    </p>
    <div className="grid grid-flow-col justify-center items-center gap-4">
      <a
        href="https://metamask.io/download"
        className="bg-primaryLight py-3 px-6 rounded-sm    uppercase font-medium text-base mt-16 shadow-2xl"
        target="_blank"
        rel="noreferrer"
      >
        <span className="hidden sm:inline-block">Download </span> Metamask
      </a>
      <a
        href="https://trustwallet.com/download-page/"
        target="_blank"
        rel="noreferrer"
        className="bg-primaryLight py-3 px-6 rounded-sm    uppercase font-medium text-base mt-16 shadow-2xl"
      >
        <span className="hidden sm:inline-block">Download </span> Trust Wallet
      </a>
    </div>
  </>
);
const Box2 = () => (
  <>
    <div className="w-12 h-12 sm:w-20 sm:h-20 font-bold text-2xl sm:text-4xl rounded-full grid  place-content-center bg-primary mx-auto">
      2
    </div>
    <div className=" mt-14">
      <a
        href="https://swap.lunardogetoken.com/"
        target="_blank"
        className="flex items-center mt-10 bg-dark-400 rounded-md  max-w-max  py-2.5 px-4 mx-auto "
        rel="noreferrer"
      >
        <img src={Lunar} alt="" className="w-4 mr-2" />
        <span className="font-medium text-white">Buy at LunarSwap</span>
      </a>
    </div>

    <p className="font-medium text-base sm:text-xl mt-6  max-w-sm mx-auto">
      Purchase BNB and navigate to LunarSwap to exchange your BNB for LunarDoge
      tokens
    </p>

    {/* <button className="bg-primaryLight py-3 px-10 rounded-sm uppercase font-medium text-base mt-16 shadow-2xl">
      Buy W / Pancakesswap
    </button> */}
  </>
);
const Box3 = () => (
  <>
    <div className="w-12 h-12 sm:w-20 sm:h-20 font-bold text-2xl sm:text-4xl rounded-full grid  place-content-center bg-primary mx-auto">
      3
    </div>
    <div className=" mt-10">
      <img src={Pancakes2} alt="" className=" w-40 mx-auto" />
    </div>

    <p className="font-normal text-gray-500 text-lg max-w-3xl w-full mx-auto mt-2">
      Click 'connect wallet' in the top right to connect your Metamask or
      Trustwallet
    </p>
    <p className="font-normal  text-lg max-w-3xl w-full mx-auto mt-2">
      {
        "  For Metamask users, Navigate to Settings -> Networks -> Add Network and put in the following information to add the Smart Chain Network"
      }
    </p>
    <p className="font-normal text-gray-500 text-lg   mx-auto mt-2">
      Network Name: Smart Chain
    </p>
    <p className="font-normal text-gray-500 text-lg   mx-auto mt-2">
      New RPC URL: https://bsc-dataseed.binance.org/
    </p>
    <p className="font-normal text-gray-500 text-lg   mx-auto mt-2">
      Chain ID: 56
    </p>
    <p className="font-normal text-gray-500 text-lg   mx-auto mt-2">
      Symbol: BNB
    </p>
    <p className="font-normal text-gray-500 text-lg   mx-auto mt-2">
      Block Explorer URL: https://bscscan.com
    </p>
    <p className="font-normal text-gray-500 text-lg   mx-auto mt-2">
      Network Name: Smart Chain
    </p>
  </>
);
const Box4 = () => (
  <>
    <div className="w-12 h-12 sm:w-20 sm:h-20 font-bold text-2xl sm:text-4xl rounded-full grid  place-content-center bg-primary mx-auto">
      4
    </div>

    <p className="font-medium text-lg mt-10 max-w-xl mx-auto w-full">
      Set the slippage tolerance to 12% (18% or higher if that doesn't work) and
      trade the desired about of BNB for LunarDoge tokens
    </p>
    <p className="font-normal text-gray-500 text-lg max-w-3xl w-full mx-auto mt-2">
      Gas fees are a few extra dollars so be sure to have some spare BNB in your
      account!
    </p>
  </>
);
const Box5 = () => (
  <>
    <div className="w-12 h-12 sm:w-20 sm:h-20 font-bold text-2xl sm:text-4xl rounded-full grid  place-content-center bg-primary mx-auto">
      5
    </div>

    <p className="font-medium text-lg mt-10 max-w-lg w-full mx-auto">
      Import a custom token in MetaMask or TrustWallet to view your current
      balance of LunarDoge.
    </p>
    <p className="font-medium text-gray-700 text-lg mt-10 max-w-xl w-full mx-auto">
      For TrustWallet Users, click the token button in the top right and scroll
      to the bottom to import a custom token. Enter the token contract address
      0x5400EdD0e597527C7e9651fC4A48f1b1f3Aa0d17 and import Lunar Doge
    </p>
  </>
);
const Box6 = () => (
  <>
    <div className="w-12 h-12 sm:w-20 sm:h-20 font-bold text-2xl sm:text-4xl rounded-full grid  place-content-center bg-primary mx-auto">
      6
    </div>
    <div className="mt-10">
      <img
        src={Moon}
        className=" mx-auto w-full"
        alt=""
        style={{ maxWidth: "180px" }}
      />
    </div>
    <p className="font-normal text-gray-900 mt-4 text-xl ">
      Now all that's left to do is hold your Lunar Doge
    </p>

    <p className="font-bold   text-3xl md:text-4xl mt-4 ">
      Next stop: the moon!
    </p>
  </>
);
