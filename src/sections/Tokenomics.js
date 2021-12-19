import React from "react";
import Title from "../components/title";
import Token1 from "../assets/images/tokenomic1.png";
import Token2 from "../assets/images/tokenomic2.png";
const Tokenomics = () => {
  return (
    <section className="tokenomic" id="tokenomics">
      <div className="container">
        <Title title="Our Tokenomics" backtext="Tokenomics" />
        <div className="grid md:grid-cols-2 items-center mt-10 md:mt-0">
          <div data-aos="fade-right">
            <img src={Token1} alt="" />
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
              Of Each Transaction ReDistributed to Holders
            </p>
          </div>
          <div data-aos="fade-left">
            <img src={Token2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
