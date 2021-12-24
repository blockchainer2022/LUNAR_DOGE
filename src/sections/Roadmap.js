import Title from "../components/title";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Star from "../assets/images/Vector.png";
const data = [
  {
    title: "Phase 1 - Takeoff",
    list: [
      "Website Launch",
      "Twitter Marketing Campaign",
      "Token Burn",
      " Audit",
      "1000 Telegram Members",
    ],
  },
  {
    title: "Phase 2 - Atmosphere",
    list: [
      "CMC Listing",
      "Coin Gecko Listing",
      "Brand Ambassadors",
      "3000 Telegram Members",
      "2000 Holders",
    ],
  },
  {
    title: "Phase 3 - Space",
    list: [
      "NFT Airdrop for ICO Investors",
      "Play-to-Earn Game Beta Released",
      "TikTok Marketing Campaign",
      "5000 Telegram Members",
      "25,000 Holders",
    ],
  },
  {
    title: "Phase 4 - Lunar",
    list: [
      "Integrated NFT Marketplace",
      "Celebrity Partnerships",
      "Cross-Platform Marketing Campaign",
      "100,000+ Holders",
    ],
  },
];

const Roadmap = () => {
  return (
    <section className="roadmap pt-14 lg:pt-40 pb-20 relative" id="roadmap">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((v) => (
        <img
          src={Star}
          alt=""
          className={`hidden md:block absolute animate-pulse top-1/3 roadmap-star${v}`}
          key={v}
        />
      ))}
      <div className="container">
        <Title title="Lunar Doge Roadmap" backtext="Board" />
        <div className="grid md:grid-cols-2 gap-8 mt-40">
          {data.map((v, i) => (
            <div
              key={i}
              className="pb-10  md:pb-28 bg-dark-600 border border-primary p-6  md:p-10 text-white rounded-2xl"
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <h6 className="text-primary text-2xl sm:text-3xl font-bold text-center">
                {v.title}
              </h6>
              <ul className="md:ml-16 mt-8">
                {v.list.map((val, i) => (
                  <li className="flex  items-center py-1 text-lg" key={i}>
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
