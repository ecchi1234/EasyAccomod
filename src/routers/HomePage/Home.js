import React from "react";
import { homeObjOne, homeObjTwo, homeObjFive, list, listOne } from './Data';
import { InfoSection } from "../../components";
// import Pricing from "../../components/Pricing/Pricing";
import ListProperties from "../../components/ListProperties/ListProperties";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import PlaceSection from "../../components/PlaceSection/PlaceSection";

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
      {/* <InfoSection {...homeObjThree}></InfoSection>
      <InfoSection {...homeObjFour}></InfoSection> */}
    </>
  );
};

export default Home;
