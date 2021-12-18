import Title from "../components/title";
import details1 from "../assets/images/detail1.png";
import details2 from "../assets/images/detail2.png";
import details3 from "../assets/images/detail3.png";
import details4 from "../assets/images/detail4.png";

const data = [
  {
    img: details1,
    title: "Token Burn",
    desc: "We will burn 75% of the token supply upon launch. This will ensure that presale buyers 1.5X their money upon launch.",
  },
  {
    img: details2,
    title: "Rewards Holding",
    desc: "2% of fees will be redistributed to holders in the form of tokens. Holders are therefore rewarded for their support and will receive more Lunar Doge reflections the longer they hold.",
  },
  {
    img: details3,
    title: "Locked Liquidty",
    desc: "ICO funds will be transfered and locked in the liquidity pool on PancakeSwap with proof provided across our socials, and 4% of fees will be distributed to the liquidity pool after launch.",
  },
  {
    img: details4,
    title: "Self-sufficient",
    desc: "A portion of fees will be allocated to the marketing wallet, granting an Very Large source of funding. The more Lunar Doge we sell, the more disposable income available for large strategic marketing campaigns.",
  },
];

const Details = () => {
  return (
    <section className="py-20 details" id="details">
      <div className="container" data-aos="fade-up">
        <Title />
        <div className="grid md:grid-cols-2 mt-20 gap-y-20 md:gap-10 lg:gap-0">
          <div className="text-white lg:pr-10 lg:pb-32 lg:border-r-2 lg:border-b-2 border-primary">
            <div className="flex items-center">
              <img src={data[0].img} alt="" className="w-20 lg:w-36" />
              <h4 className="text-2xl lg:text-4xl font-bold text-primary ml-8">
                {data[0].title}
              </h4>
            </div>
            <p className="text-lg lg:text-2xl mt-8">{data[0].desc}</p>
          </div>
          <div className="text-white lg:pl-10 lg:pb-32  lg:border-b-2 border-primary">
            <div className="flex items-center">
              <img src={data[1].img} alt="" className="w-20 lg:w-36" />
              <h4 className="text-2xl lg:text-4xl font-bold text-primary ml-8">
                {data[1].title}
              </h4>
            </div>
            <p className="text-lg lg:text-2xl mt-8">{data[1].desc}</p>
          </div>
          <div className="text-white lg:pr-10 lg:pt-14 lg:border-r-2  border-primary">
            <div className="flex items-center">
              <img src={data[2].img} alt="" className="w-20 lg:w-36" />
              <h4 className="text-2xl lg:text-4xl font-bold text-primary ml-8">
                {data[2].title}
              </h4>
            </div>
            <p className="text-lg lg:text-2xl mt-8">{data[2].desc}</p>
          </div>
          <div className="text-white lg:pl-10 lg:pt-14 lg:pb-20 border-primary">
            <div className="flex items-center">
              <img src={data[3].img} alt="" className="w-20 lg:w-36" />
              <h4 className="text-2xl lg:text-4xl font-bold text-primary ml-8">
                {data[3].title}
              </h4>
            </div>
            <p className="text-lg lg:text-2xl mt-8">{data[3].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
