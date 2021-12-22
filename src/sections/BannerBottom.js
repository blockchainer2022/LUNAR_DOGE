/* eslint-disable no-unused-vars */
import React from "react";
// import Bsc from "../assets/images/bscc.png";
// import { FaAngleDown } from "react-icons/fa";
import ExchangeImage from "../assets/images/exchange.png";
import ChartImage from "../assets/images/chart.png";
import ScanImage from "../assets/images/scan.png";
import Clipboard from "../components/clipboard";
import moment from "moment";
import Star from "../assets/images/Vector.png";
const cardData = [
  {
    img: ExchangeImage,
    text: "LunarSwap",
    link: "https://swap.lunardogetoken.com/",
  },
  {
    img: ChartImage,
    text: "View chart",
    link: "https://poocoin.app/tokens/0x5400edd0e597527c7e9651fc4a48f1b1f3aa0d17",
  },
  {
    img: ScanImage,
    text: "check bSC SCAN",
    link: "https://bscscan.com/address/0x5400EdD0e597527C7e9651fC4A48f1b1f3Aa0d17#code",
  },
];

const BannerBottom = ({
  totalSupplyFormated,
  totalSoldFormatted,
  totalSupply,
  totalSold,
  data,
  days,
  minutes,
  hours,
  seconds,
  startTime,
  endTime,
}) => {
  const progress = (Number(data.funds_raised) / Number(totalSupply)) * 100;
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
    <div className="relative">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
        <img
          src={Star}
          alt=""
          className={`hidden md:block absolute animate-pulse top-1/3 banner-bottom-star${v}`}
          key={v}
        />
      ))}
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
            {/* <p className="font-bold text-2xl lg:text-4xl mb-2">
              23rd Dec 2021 2:00AM UTC
            </p> */}
            <div>
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
            </div>
          </div>
          <div className="progressbar mt-10" data-aos="fade-up">
            <div className="flex justify-between items-center text-white  font-semibold text-xl lg:text-3xl mb-2">
              <p>{totalSoldFormatted == 0 ? "0.00" : totalSoldFormatted}</p>
              <p>125BNB</p>
              <p>
                {data.total_supply_formatted ? data.total_supply_formatted : 0}
                BNB
              </p>
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
              <p className=" -ml-12">Soft Cap</p>
              <p>HardCap</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white  py-20">
        <div className="container grid sm:grid-cols-3 gap-8">
          {cardData.map((val, i) => (
            <a
              href={val.link}
              target="_blank"
              key={i}
              className="block text-center shadow-lg p-4 py-8 rounded-md"
              data-aos="fade-up"
              rel="noreferrer"
            >
              <div>
                <img src={val.img} alt="" className="mx-auto w-16" />
              </div>
              <h3 className="font-bold text-xl md:text-3xl mt-6 capitalize">
                {val.text}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
