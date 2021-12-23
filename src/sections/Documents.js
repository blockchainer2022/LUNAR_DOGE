import React from "react";
import Title from "../components/title";
// import Doge from "../assets/images/doge.png";
import Star from "../assets/images/Vector.png";
import Baby3 from "../assets/images/baby4.mp4";
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
            {/* <img src={Doge} alt="" /> */}
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
              className=" md:w-full"
              // poster={BannerImg}
            >
              <source src={Baby3} type="video/mp4"></source>
            </video>
          </div>
          <div data-aos="fade-left">
            <a
              href="https://woofpaper.lunardogetoken.com/lunardoge/Woofpaper.pdf"
              target="_blank"
              className="bg-primary mx-auto mb-4 md:mb-10 max-w-max block text-black font-bold py-2.5  px-10 rounded-md text-xl md:text-3xl"
              rel="noreferrer"
            >
              {" "}
              White Paper
            </a>
            <a
              href="https://github.com/Tech-Audit/Smart-Contract-Audits/blob/main/TECHAUDIT_LUNARDOGE.pdf"
              target="_blank"
              className="bg-primary mx-auto mb-4 md:mb-10 max-w-max block text-black font-bold py-2.5  px-10 rounded-md text-xl md:text-3xl"
              rel="noreferrer"
            >
              Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
