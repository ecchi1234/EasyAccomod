import React from "react";
import { homeObjOne, homeObjTwo, homeObjFive, list, listOne, settingForCarousel } from './Data';
import { InfoSection } from "../../components";
// import Pricing from "../../components/Pricing/Pricing";
import ListProperties from "../../components/ListProperties/ListProperties";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import PlaceSection from "../../components/PlaceSection/PlaceSection";
import CustomerSection from "../../components/CustomerSection/CustomerSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne}></InfoSection>
      <InfoSection {...homeObjTwo}></InfoSection>
      {/* <Pricing></Pricing> */}
      <ListProperties {...list}></ListProperties>
      <WelcomeSection {...homeObjFive}></WelcomeSection>
      <ListProperties {...listOne}></ListProperties>
      <PlaceSection/>
      <CustomerSection {...settingForCarousel}/>
    </>
  );
};

export default Home;
