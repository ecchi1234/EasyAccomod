import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection } from "../../components";
import Pricing from "../../components/Pricing/Pricing";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne}></InfoSection>
      <InfoSection {...homeObjTwo}></InfoSection>
      <Pricing></Pricing>
      <InfoSection {...homeObjThree}></InfoSection>
      <InfoSection {...homeObjFour}></InfoSection>
    </>
  );
};

export default Home;
