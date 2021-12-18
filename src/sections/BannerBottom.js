import React from "react";
// import Bsc from "../assets/images/bscc.png";
// import { FaAngleDown } from "react-icons/fa";
import ExchangeImage from "../assets/images/exchange.png";
import ChartImage from "../assets/images/chart.png";
import ScanImage from "../assets/images/scan.png";
import Clipboard from "../components/clipboard";
const cardData = [
  {
    img: ExchangeImage,
    text: "Lunar Doge Exchange",
  },
  {
    img: ChartImage,
    text: "View chart",
  },
  {
    img: ScanImage,
    text: "check bSC SCAN",
  },
];

const BannerBottom = () => {
  return (
    <div>
      <div
        className="container banner-bottom"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        <Clipboard />
      </div>
      <div className="ico-section bg-dark-500 py-10">
        <div className="container">
          <p
            className="text-primary font-bold text-center text-3xl lg:text-5xl"
            data-aos="fade-down"
          >
            ICO Starts In
          </p>
          <div
            className="text-white grid justify-center gap-10  grid-flow-col text-center mt-10"
            data-aos="fade-down"
          >
            <div>
              <p className="font-bold 2xl lg:text-6xl mb-2">00</p>
              <p className="text-xl lg:text-3xl font-bold">Days</p>
            </div>
            <div>
              <p className="font-bold 2xl lg:text-6xl  mb-2">00</p>
              <p className="text-xl lg:text-3xl font-bold">Hrs.</p>
            </div>
            <div>
              <p className="font-bold 2xl lg:text-6xl  mb-2">00</p>
              <p className="text-xl lg:text-3xl font-bold">Min.</p>
            </div>
            <div>
              <p className="font-bold 2xl lg:text-6xl  mb-2">00</p>
              <p className="text-xl lg:text-3xl font-bold">Sec.</p>
            </div>
          </div>
          <div className="progressbar mt-10" data-aos="fade-up">
            <div className="flex justify-between items-center text-white  font-bold text-xl lg:text-3xl mb-2">
              <p>0</p>
              <p>0</p>
            </div>
            <div className="border-4 border-white rounded-lg progress-container">
              <div className="bg-primary rounded-lg progress-inner"></div>
            </div>
            <div className="flex justify-between items-center text-white  font-bold text-xl lg:text-3xl mt-2">
              <p>Softcap in 20 days</p>
              <p>Hardcap</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white  py-20">
        <div className="container grid sm:grid-cols-3 gap-8">
          {cardData.map((val, i) => (
            <div
              key={i}
              className="text-center shadow-lg p-4 py-8 rounded-md"
              data-aos="fade-up"
            >
              <div>
                <img src={val.img} alt="" className="mx-auto w-16" />
              </div>
              <h3 className="font-bold text-xl md:text-3xl mt-6 capitalize">
                {val.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
