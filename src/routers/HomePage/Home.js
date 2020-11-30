import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection } from "../../components";
import Pricing from "../../components/Pricing/Pricing";
import ListProperties from "../../components/ListProperties/ListProperties";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne}></InfoSection>
      <InfoSection {...homeObjTwo}></InfoSection>
      <Pricing></Pricing>
      <ListProperties></ListProperties>
      <InfoSection {...homeObjThree}></InfoSection>
      <InfoSection {...homeObjFour}></InfoSection>
    </>
  );
};

export default Home;
