import React from "react";
import Title from "../components/title";
import Doge from "../assets/images/doge.png";
import Star from "../assets/images/Vector.png";
const Documents = () => {
  return (
    <section className="document-bg py-14 md:py-20 relative" id="document">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((v) => (
        <img
          src={Star}
          alt=""
          className={`hidden md:block absolute animate-pulse top-1/3 document-star${v}`}
          key={v}
        />
      ))}
      <div className="container">
        <Title backtext="Documents" title="Our Documents" />
        <div className="grid md:grid-cols-2  mt-20 items-center">
          <div className="mb-20 md:mb-0" data-aos="fade-right">
            <img src={Doge} alt="" />
          </div>
          <div data-aos="fade-left">
            <a
              href="https://adobe.ly/3H1OLjC"
              target="_blank"
              className="bg-primary mx-auto mb-4 md:mb-10 max-w-max block text-black font-bold py-2.5  px-10 rounded-md text-xl md:text-3xl"
              rel="noreferrer"
            >
              {" "}
              White Paper
            </a>
            <button className="mx-auto block capitalize bg-primary text-black font-bold py-2.5  px-6 rounded-md text-xl md:text-3xl">
              {" "}
              Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
