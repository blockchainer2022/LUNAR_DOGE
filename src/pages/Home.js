import { useEffect, useState } from "react";
import { Layout } from "../components";
import Banner from "../sections/Banner";
import BannerBottom from "../sections/BannerBottom";
import Details from "../sections/Details";
import HowtoBuy from "../sections/HowtoBuy";
import Documents from "../sections/Documents";
import Tokenomics from "../sections/Tokenomics";
import Roadmap from "../sections/Roadmap";
import Faq from "../sections/Faq";
import Donate from "../sections/Donate";
import Community from "../sections/Community";
import axios from "axios";
import moment from "moment";
const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getDetails = async () => {
      try {
        const { data } = await axios.get(
          "http://65.0.243.32/api/lunardoge/get-ico-details-testnet.php"
        );

        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, []);
  var e = new Date(Number(data.endTime * 1000)).toUTCString();
  var s = new Date(Number(data.startTime * 1000)).toUTCString();
  const start = +new moment(`${s}`).utc() > +new Date();
  // const end = +new moment(`${s} 00:00:00`).utc() < +new Date();

  const difference = +new moment(`${start ? s : e}`).utc() - +new Date();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
      }
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });
  return (
    <Layout>
      <Banner />
      <BannerBottom
        totalSupplyFormated={data.total_supply_formatted}
        totalSoldFormatted={data.total_sold_formatted}
        totalSupply={data.total_supply}
        totalSold={data.total_sold}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        startTime={data.startTime}
        endTime={data.endTime}
      />
      <Details />
      <HowtoBuy />
      <Documents />
      <Tokenomics />
      <Roadmap />
      <Faq />
      <Donate />
      <Community />
    </Layout>
  );
};

export default Home;
