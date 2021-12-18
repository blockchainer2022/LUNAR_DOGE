import { useState } from "react";
import Title from "../components/title";
const accordianData = [
  {
    question:
      "When is new marketing campaign, listing, announcement, etc coming?",
    answer:
      "We are working tirelessly to source new marketing partnerships and achieve new listings; refer to our roadmap and viewed pinned TG messages to keep up to date with our current marketing efforts and updates! ",
  },
  {
    question: "Why can't I buy?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "How Can I Help?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "How Can I Help?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
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
    <section className=" faq pt-14  md:pt-28 pb-20 text-dark" id="faq">
      <div className="container">
        <Title title="Frequently Asked Question" backtext="FAQ" />
        <div className=" mt-20">
          {accordianData.map((v, i) => (
            <div
              key={i}
              className=" border-2 border-primary   p-4 px-6  mb-4 rounded-xl transition-all ease-out duration-500  max-w-4xl mx-auto"
              data-aos="fade-down"
            >
              <div
                className="flex  justify-between cursor-pointer py-4"
                onClick={() => toggle(i)}
              >
                <h6
                  className={` transition-all  duration-500 ${
                    clicked === i ? "text-primary " : ""
                  } text-xl uppercase font-bold`}
                  style={{ userSelect: "none" }}
                >
                  {v.question}
                </h6>
                <span className="transition-all  duration-500  w-6 h-6 border-2 border-primary text-primary grid place-content-center rounded-md flex-shrink-0">
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
