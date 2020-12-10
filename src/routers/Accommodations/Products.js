import React from "react";
import { homeObjThree, homeObjTwo } from './Data';
import { InfoSection } from "../../components";


const Products = () => {
  return (
    <>
      <InfoSection {...homeObjThree}></InfoSection>
      <InfoSection {...homeObjTwo}></InfoSection>
    </>
  );
};

export default Products;