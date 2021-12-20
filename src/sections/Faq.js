import { useState } from "react";
import Title from "../components/title";
import Dog from "../assets/images/roket-dog.png";
import Star from "../assets/images/Vector.png";
const accordianData = [
  {
    question:
      "When is new marketing campaign, listing, announcement, etc coming?",
    answer:
      "We are working tirelessly to source new marketing partnerships and achieve new listings; refer to our roadmap and viewed pinned TG messages to keep up to date with our current marketing efforts and updates! ",
  },
  {
    question: "Why can't I buy? ",
    answer:
      "Make sure your slippage tolerance is set to at least 12%, and increase it to 18% or higher if necessary. If issues persist message @Lunar_Doge_Dev on TG or reach out via other socials.",
  },
  {
    question: "How Can I Help?",
    answer:
      "Buy Lunar Doge, shill our marketing in other TG chats, comment on our promoted posts, spread the word on other social medias, tell all your friends, make an optional donation, and more to do your part taking Lunar Doge to the moon!",
  },
];

const Index = () => {
  const [clicked, setClicked] = useState();

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <section className=" faq pt-14  md:pt-28 pb-20 text-dark relative" id="faq">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((v) => (
        <img
          src={Star}
          alt=""
          className={` absolute animate-pulse top-1/3 document-star${v}`}
          key={v}
        />
      ))}
      <div className="rocket-dog absolute  left-2/3">
        <img src={Dog} alt="" />
      </div>
      <div className="container">
        <Title title="Frequently Asked Question" backtext="FAQ" />
        <div className=" mt-20">
          {accordianData.map((v, i) => (
            <div
              key={i}
              className=" border-2 border-primary   py-2 px-6  mb-4 rounded-xl transition-all ease-out duration-500  max-w-4xl mx-auto"
              data-aos="fade-down"
            >
              <div
                className="flex  justify-between cursor-pointer py-3"
                onClick={() => toggle(i)}
              >
                <h6
                  className={` transition-all  duration-500 ${
                    clicked === i ? "text-primary " : ""
                  } text-lg uppercase font-bold`}
                  style={{ userSelect: "none" }}
                >
                  {v.question}
                </h6>
                <span className="transition-all  duration-500  w-5 h-5 border-2 border-primary text-primary grid place-content-center rounded-sm flex-shrink-0 text-xs">
                  <i
                    className={`fas transition-all  duration-500 ${
                      clicked === i ? "fa-minus" : "fa-plus"
                    } `}
                  ></i>
                </span>
              </div>
              <div
                className={` text-base transition-all  duration-500 ${
                  clicked === i
                    ? "h-auto max-h-72 pt-4 pb-2"
                    : "overflow-hidden max-h-auto h-0"
                }`}
              >
                <p className="max-w-4xl w-full">{v.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
