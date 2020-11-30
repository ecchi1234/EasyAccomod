import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImLocation } from "react-icons/im";
import { FiHeart } from "react-icons/fi";
export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #000;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled(Link)`
  background: #fff;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 349px;
  height: 547px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 500px; */
  padding: 20px;
  align-items: center;
  color: #fff;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
`;

export const PricingCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;

export const PricingSectionHeading = styled.section`
  padding-left: 35px;
  position: relative;
  margin-bottom: 2.5rem;
  align-self: flex-start;

  &::before {
    top: 0;
    left: 0;
    bottom: 0;
    width: 15px;
    content: "";
    border-radius: 3px;
    position: absolute;
    background-color: #274abb;
  }
`;

export const PricingTopSubHeading = styled.h3`
  font-size: 18px;
  color: #111;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
`;
export const PricingBottomSubHeading = styled.h2`
  font-size: 28px;
  color: #274abb;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
`;

export const PricingCardImageHeading = styled.img`
  width: 100%;
  height: auto;
`;

export const PricingCardInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const PricingCardInfoTitle = styled(Link)`
  font-family: "Montserrat";
  height: 22px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  color: #444;
  margin-bottom: 3px;
  &:hover {
    color: #274abb;
    transition: all 0.3s ease;
  }
`;

export const PricingCardInfoSubTitle = styled(Link)`
  line-height: 26px;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const PricingCardInfoLocationIcon = styled(ImLocation)`
  text-decoration: none;
  margin-right: 10px;
`;

export const PricingCardInfoLocation = styled.span`
  font-size: 13px;
  font-weight: 400;
  margin: 0 0 1px;
  text-decoration: none;
  color: #666;
`;

export const PricingCardInfoDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 0.9rem;
`;

export const PricingCardInfoItem = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  width: 45%;
  line-height: 40px;
`;

export const PricingCardInfoItemDesc = styled.span`
  color: #666;
  margin-left: 5px;
`;

export const PriceProperties = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

export const HouseCost = styled(Link)`
  font-size: 1.1rem;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;

  &:hover {
    color: #274abb;
    transition: all 0.3s ease;
    margin-bottom: 3px;
  }
`;

export const LikeIcon = styled(FiHeart)`
  &:hover {
    transition: all 0.5s ease;
  }
`;

export const PropertyFooter = styled.div`
  background: none;
  border-top: 1px solid #e8e8e8;
  padding-top: 1rem;
  font-size: 13px;
  color: #666;
  display: flex;
  justify-content: space-between;
`;

export const PropertyOwner = styled.div`
  display: flex;
`;

export const PropertyOwnerName = styled.div`
  margin-left: 5px;
`;

export const PropertyTimeStart = styled.div`
  display: flex;
`;

export const PropertyTimeStartDesc = styled.div`
  margin-left: 5px;
`;

export const PropertiesBtnLink = styled(Link)`
  text-decoration: none;
`;

export const PropertiesLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
`;