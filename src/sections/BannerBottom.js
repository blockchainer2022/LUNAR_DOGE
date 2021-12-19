/* eslint-disable no-unused-vars */
import React from "react";
// import Bsc from "../assets/images/bscc.png";
// import { FaAngleDown } from "react-icons/fa";
import ExchangeImage from "../assets/images/exchange.png";
import ChartImage from "../assets/images/chart.png";
import ScanImage from "../assets/images/scan.png";
import Clipboard from "../components/clipboard";
import moment from "moment";
const cardData = [
  {
    img: ExchangeImage,
    text: "LunarSwap",
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

const BannerBottom = ({
  totalSupplyFormated,
  totalSoldFormatted,
  totalSupply,
  totalSold,
  days,
  minutes,
  hours,
  seconds,
  startTime,
  endTime,
}) => {
  const progress = (Number(totalSold) / Number(totalSupply)) * 100;
  const width =
    progress > 0
      ? Math.floor(progress) + 1 >= 100
        ? 100
        : Math.floor(progress) + 1
      : 0;

  // console.log(typeof progress, width);
  var s = new Date(Number(startTime * 1000)).toUTCString();
  var e = new Date(Number(endTime * 1000)).toUTCString();
  // console.log(+new moment(`${s} 00:00:00`).utc() > +new Date());
  const start = +new moment(`${s}`).utc() > +new Date();

  const end = +new moment(`${e}`).utc() < +new Date();
  return (
    <div>
      <div className="container banner-bottom" data-aos="fade-in">
        <Clipboard />
      </div>
      <div className="ico-section bg-dark-500 py-10">
        <div className="container">
          <p
            className="text-primary font-bold text-center text-3xl lg:text-5xl"
            data-aos="fade-down"
          >
            {/* {start ? "ICO Starts in" : end ? "ICO has ended" : "ICO ends in"} */}
            ICO Starts at
          </p>
          <div
            className="text-white grid justify-center gap-10  grid-flow-col text-center mt-10"
            data-aos="fade-down"
          >
            <p className="font-bold text-2xl lg:text-4xl mb-2">
              23rd Dec 2021 2:00AM UTC
            </p>
            {/* <div>
              <p className="font-bold 2xl lg:text-6xl mb-2">
                {days.toString().padStart(2, "0")}
              </p>
              <p className="text-xl lg:text-3xl font-bold">Days</p>
            </div>
            <div>
              <p className="font-bold 2xl lg:text-6xl  mb-2">
                {hours.toString().padStart(2, "0")}
              </p>
              <p className="text-xl lg:text-3xl font-bold">Hrs.</p>
            </div>
            <div>
              <p className="font-bold 2xl lg:text-6xl  mb-2">
                {minutes.toString().padStart(2, "0")}
              </p>
              <p className="text-xl lg:text-3xl font-bold">Min.</p>
            </div>
            <div>
              <p className="font-bold 2xl lg:text-6xl  mb-2">
                {seconds.toString().padStart(2, "0")}
              </p>
              <p className="text-xl lg:text-3xl font-bold">Sec.</p>
            </div> */}
          </div>
          <div className="progressbar mt-10" data-aos="fade-up">
            <div className="flex justify-between items-center text-white  font-semibold text-xl lg:text-3xl mb-2">
              <p>0</p>
              <p>2.6B</p>
            </div>
            <div className="border-4 border-white rounded-lg progress-container overflow-hidden">
              <div
                className="bg-primary rounded-lg progress-inner"
                style={{
                  width: `${width}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-white  font-semibold text-xl lg:text-3xl mt-2">
              <p>Total Sold</p>
              <p>ICO target</p>
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
