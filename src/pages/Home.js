import React from "react";
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
const Home = () => {
  return (
    <Layout>
      <Banner />
      <BannerBottom />
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
