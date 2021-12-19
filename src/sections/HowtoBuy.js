import { useState } from "react";
import Title from "../components/title";
import Metamask from "../assets/images/metamask.png";
import Pancakes from "../assets/images/pancakeswap.png";
import Pancakes2 from "../assets/images/pancakeswap-1.png";
const HowtoBuy = () => {
  const [currentActive, setCurrentActive] = useState(0);

  return (
    <div className="bg-white py-20 buy" id="exchange">
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
    <div className="w-12 h-12 sm:w-20 sm:h-20 font-bold text-4xl rounded-full grid  place-content-center bg-primary mx-auto">
      1
    </div>
    <div className=" mt-14">
      <img src={Metamask} alt="" className=" w-60 mx-auto" />
    </div>
    <p className="font-bold text-base sm:text-xl mt-6">
      Download MetaMask, Trust Wallet, or use an existing wallet
    </p>
    <p className="font-normal text-gray-500 text-base sm:text-xl max-w-3xl mx-auto mt-8">
      Head to metamask.io and download their wallet to your Smart Phone or
      Chrome/Firefox browser.
    </p>
    <p className="font-normal text-gray-500 text-base sm:text-xl  mx-auto mt-8">
      (This is where your LunarDoge Tokens will be securely stored.)
    </p>
    <button className="bg-primaryLight py-3 px-10 rounded-sm    uppercase font-medium text-base mt-16 shadow-2xl">
      Download Metamask
    </button>
  </>
);
const Box2 = () => (
  <>
    <div className="w-12 h-12 sm:w-20 sm:h-20 font-bold text-4xl rounded-full grid  place-content-center bg-primary mx-auto">
      2
    </div>
    <div className=" mt-14">
      <img src={Pancakes} alt="" className=" w-60 mx-auto" />
    </div>
    <p className="font-medium text-base sm:text-xl mt-6">
      Go to PancakeSwap (pancakeswap.finance)
    </p>
    <p className="font-normal text-gray-500 text-base sm:text-xl max-w-3xl mx-auto mt-8">
      PancakeSwap is where you'll be performing the swap of your current tokens
      to Baby Doge
    </p>
    <p className="font-normal text-gray-500 text-base sm:text-xl  mx-auto mt-8">
      (Make sure you have already purchased BNB to perform this exchange.)
    </p>
    <button className="bg-primaryLight py-3 px-10 rounded-sm uppercase font-medium text-base mt-16 shadow-2xl">
      Buy W / Pancakesswap
    </button>
  </>
);
const Box3 = () => (
  <>
    <div className="w-12 h-12 sm:w-20 sm:h-20 font-bold text-4xl rounded-full grid  place-content-center bg-primary mx-auto">
      3
    </div>
    <div className=" mt-14">
      <img src={Pancakes2} alt="" className=" w-20 mx-auto" />
    </div>
    <p className="font-medium text-lg mt-6">
      When you are in PancakeSwap, navigate to the trade screen
    </p>
    <p className="font-normal text-gray-500 text-lg max-w-3xl mx-auto mt-2">
      Click “Connect” at the top right of the screen, and then navigate to
      “Trade” on the left sidebar.
    </p>
    <p className="font-normal  text-lg max-w-3xl mx-auto mt-2">
      {
        " If using MetaMask, go to Settings –> Networks –> Add Network And put in this information…"
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
    <div className="w-12 h-12 sm:w-20 sm:h-20 font-bold text-4xl rounded-full grid  place-content-center bg-primary mx-auto">
      4
    </div>

    <p className="font-medium text-lg mt-10">
      Return to the PancakeSwap exchange window and please select the DOGE
      token. To Manually Search:
    </p>
    <p className="font-normal text-gray-500 text-lg max-w-3xl mx-auto mt-2">
      1. Click on the “Select a Currency” button, and then enter the DOGE token
      contract:
    </p>

    <p className="font-normal text-gray-500 text-lg   mx-auto mt-2">
      0xca1ec90bd4c5665e85b93f1696cc1907bf53a6a9
    </p>
    <p className="font-normal text-gray-500 text-lg   mx-auto mt-2">
      2. You should see DOGE in the drop down list.
    </p>
    <p className="font-normal text-gray-500 text-lg   mx-auto mt-2">
      3. If you see a popup window to add the token for swapping, please check
      “I Understand” and
      <br /> then click on “Import”
    </p>
  </>
);
const Box5 = () => (
  <>
    <div className="w-12 h-12 sm:w-20 sm:h-20 font-bold text-4xl rounded-full grid  place-content-center bg-primary mx-auto">
      5
    </div>

    <p className="font-medium text-lg mt-10">
      To confirm the accuracy of the trade, adjust your slippage to 12%
    </p>
    <p className="font-normal text-gray-500 text-lg max-w-3xl mx-auto mt-2">
      Click “Settings” at the top right, and adjust your slippage to 12%
      (dependent on demand).
    </p>
  </>
);
const Box6 = () => (
  <>
    <div className="w-12 h-12 sm:w-20 sm:h-20 font-bold text-4xl rounded-full grid  place-content-center bg-primary mx-auto">
      6
    </div>

    <p className="font-bold  mt-10 text-3xl md:text-4xl ">
      You Are Now Ready to Swap for DOGE
    </p>
    <p className="font-light text-gray-500 text-lg max-w-3xl mx-auto mt-8">
      Simply enter the amount that you want to buy and swap away!
    </p>
    <p className="font-light text-gray-500 text-lg max-w-3xl mx-auto mt-8">
      Important: You’ll be charged separately for Gas Fees, which is usually a
      single BNB fee that is under (or around) a dollar, so it’s helpful to
      always keep at least a few dollars in BNB at all times.
    </p>
  </>
);
