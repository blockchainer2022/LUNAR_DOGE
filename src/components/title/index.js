import titleImage from "../../assets/images/title-float.png";
import titleBlack from "../../assets/images/title-float-black.png";
const Title = ({ title = "Details", backtext = "Details", black = false }) => {
  return (
    <div
      className="section-title w-full text-center mt-20"
      data-aos="fade-down"
    >
      <div className={`title-back ${black ? "text-black" : "text-primary"} `}>
        {backtext}
      </div>
      <img
        src={black ? titleBlack : titleImage}
        alt=""
        className="mx-auto  animate-bounce"
      />
      <h2
        className={`text-4xl sm:text-5xl font-bold text-bold ${
          black ? "text-black" : "text-primary"
        } `}
      >
        {title}
      </h2>
    </div>
  );
};

export default Title;
