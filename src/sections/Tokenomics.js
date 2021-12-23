import React from "react";
import Title from "../components/title";
// import Token1 from "../assets/images/tokenomic1.png";
import Baby1 from "../assets/images/baby2.mp4";
import Baby2 from "../assets/images/baby3.mp4";
// import Token2 from "../assets/images/tokenomic2.png";
import Star from "../assets/images/Vector.png";
const Tokenomics = () => {
  return (
    <section className="tokenomic relative" id="tokenomics">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((v) => (
        <img
          src={Star}
          alt=""
          className={` absolute animate-pulse top-1/3 roadmap-star${v}`}
          key={v}
        />
      ))}
      <div className="container">
        <Title title="Our Tokenomics" backtext="Tokenomics" />
        <div className="grid md:grid-cols-2 items-center mt-10 md:mt-0">
          <div data-aos="fade-right">
            {/* <img src={Token1} alt="" /> */}
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
              className=" md:w-full"
              // poster={BannerImg}
            >
              <source src={Baby2} type="video/mp4"></source>
            </video>
          </div>
          <div data-aos="fade-left">
            <p className="text-primary text-center font-black text-9xl big-text">
              4%
            </p>
            <p className="text-2xl md:text-2xl  lg:text-5xl text-center  max-w-lg  w-full mx-auto font-normal mt-10">
              Of Each Transaction Added to Liquidity
            </p>
          </div>
        </div>
        <div className="md:flex items-center md:px-20" data-aos="fade-down">
          <p className="text-primary text-center font-black text-9xl big-text">
            4%
          </p>
          <p className="ml-4 text-2xl md:text-3xl  lg:text-5xl flex-1  w-full mx-auto font-normal mt-10">
            Distributed to Marketing Wallet for Strategic Partnerships
          </p>
        </div>
        <div className="grid md:grid-cols-2 items-center">
          <div data-aos="fade-right">
            <p className="text-primary text-center font-black text-9xl big-text">
              2%
            </p>
            <p className="text-2xl md:text-3xl  lg:text-5xl text-center  max-w-lg  w-full mx-auto font-normal mt-10">
              of tokens reflected to holders
            </p>
          </div>
          <div data-aos="fade-left">
            {/* <img src={Token2} alt="" /> */}
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
              className=" md:w-full"
              // poster={BannerImg}
            >
              <source src={Baby1} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
