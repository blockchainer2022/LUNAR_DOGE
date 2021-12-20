/* eslint-disable no-unused-vars */
import Title from "../components/title";
import Twitter from "../assets/images/twitter.png";
import Tele from "../assets/images/telegram.png";
import Telegrammini from "../assets/images/telegrammini.png";
import TwitterMini from "../assets/images/twittermini.png";
// import Facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/instagram.png";
// import discord from "../assets/images/discord.png";
// import reddit from "../assets/images/reddit.png";

const socialLinks = [
  {
    icon: Telegrammini,
    link: "https://t.me/Lunar_Doge",
  },
  {
    icon: TwitterMini,
    link: "https://twitter.com/Lunar__Doge",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/lunar.doge/?hl=en",
  },
  // {
  //   icon: Instagram,
  //   link: "#",
  // },
  // {
  //   icon: discord,
  //   link: "#",
  // },
  // {
  //   icon: reddit,
  //   link: "#",
  // },
];
const social = [
  {
    icon: Twitter,
    title: "Twitter Followers",
    followers: "480,000+",
  },
  {
    icon: Tele,
    title: "Telegram Followers",
    followers: "190,000+",
  },
];

const Community = () => {
  return (
    <div className="bg-primary pt-14 sm:pt-20 pb-20 mb-40">
      <div className="container">
        <Title title="Join our Community" backtext="Community" black />

        <p className="text-center  max-w-4xl mx-auto mt-10">
          Join our active community to chat in the telegram and ask us
          questions! We're increasing our moderator staff for 24/7 support; be
          on the lookout for impersonators and never give out your wallet
          information
        </p>
        {/* <div
          className=" max-w-4xl mx-auto mt-20 grid sm:grid-cols-2 gap-14"
          data-aos="fade-down"
        >
          {social.map((val, i) => (
            <div key={i} className="flex items-center bg-black p-4 rounded-lg">
              <div>
                <img src={val.icon} alt="" className="w-20" />
              </div>
              <div className="text-white text-center text-2xl flex-1">
                <p className="text-primary font-bold">{val.followers}</p>
                <h6 className="text-white">{val.title}</h6>
              </div>
            </div>
          ))}
        </div> */}
        <div
          className=" grid grid-flow-col justify-center gap-4 max-w-xs mx-auto mt-20"
          data-aos="fade-up"
        >
          {socialLinks.map((val, i) => (
            <a href={val.link} key={i} target="_blank" rel="noreferrer">
              <img src={val.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
