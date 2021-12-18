import Title from "../components/title";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const data = [
  {
    title: "Phase 1 - Takeoff",
    list: [
      "Website Launch",
      "1000 Telegram Members",
      "Twitter Marketing Campaign",
      "Token Burn, Audit",
    ],
  },
  {
    title: "Phase 2 - Atmosphere",
    list: [
      "Token Burn, Audit",
      "1500 Holders",
      "CMC Listing",
      "Coin Gecko Listing",
      "Brand Ambassadors",
    ],
  },
  {
    title: "Phase 3 - Lunar",
    list: [
      "5000 Telegram Members",
      "50,000 Holders",
      "Massive Airdrop Giveaways",
      "TikTok Marketing Campaign",
    ],
  },
  {
    title: "Phase 4 - Space",
    list: [
      "100,000+ Holders",
      "Integrated NFT Marketplace   ",
      "Celebrity Partnerships",
      "Cross-Platform Marketing Campaign",
    ],
  },
];

const Roadmap = () => {
  return (
    <section className="roadmap pt-14 lg:pt-40 pb-20" id="roadmap">
      <div className="container">
        <Title title="Lunar doge Roadmap" backtext="Board" />
        <div className="grid md:grid-cols-2 gap-8 mt-40">
          {data.map((v, i) => (
            <div
              key={i}
              className="pb-10  md:pb-40 bg-dark-600 border border-primary p-6  md:p-10 text-white rounded-2xl"
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <h6 className="text-primary text-2xl sm:text-4xl font-bold text-center">
                {v.title}
              </h6>
              <ul className="md:ml-16 mt-8">
                {v.list.map((val, i) => (
                  <li className="flex  items-center py-1 text-xl" key={i}>
                    <IoMdCheckmarkCircleOutline />{" "}
                    <span className="ml-2 block">{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
