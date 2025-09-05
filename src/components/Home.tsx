import React from "react";
import Borderless from "./Borderless";
import BorderlessModal from "./BorderlessModal";
import CommunityModal from "./CommunityModal";
import CuriosityModal from "./CuriosityModal";
import DiscoverModal from "./DiscoverModal";
import FirstKnow from "./FirstKnow";
import Footer from "./Footer";
import HerbalModal from "./HerbalModal";
import Hero from "./Hero";
import IntelligentTabs from "./IntelligentTabs";
import NewFeatureModal from "./NewFeatureModal";
import WhatUsersSay from "./WhatUsersSay";

const Home = () => {
  return (
    <>
      <Hero />
      <Borderless />
      <IntelligentTabs />
      <HerbalModal />
      <DiscoverModal />
      <CommunityModal />
      <NewFeatureModal />
      <BorderlessModal />
      <CuriosityModal />
      <WhatUsersSay />
      <FirstKnow />
      <Footer />
    </>
  );
};

export default Home;
