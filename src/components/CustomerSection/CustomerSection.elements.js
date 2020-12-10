import styled from "styled-components";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export const CustomerSec = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
`;
export const CustomerSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;

  @media screen and (min-width: 576px) {
    width: 540px;
    max-width: 100%;
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
  }

  @media screen and (min-width: 768px) {
    width: 720px;
    max-width: 100%;
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
  }

  @media screen and (min-width: 992px) {
    width: 960px;
    max-width: 100%;
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
  }
  // cái này chỉnh vì nó bị bé hơn so với bản gốc ?? không rõ vì sao
  @media screen and (min-width: 1200px) {
    width: 1170px;
    max-width: 100%;
    /* padding-right: 15px;
    padding-left: 15px; */
  }
`;

export const CustomerHeadingSection = styled.div`
  padding-left: 35px;
  position: relative;
  margin-bottom: 2.5rem;
  align-self: flex-start;

  /* margin-left: 25px; */

  &::before {
    top: 0;
    left: 0;
    bottom: 0;
    width: 15px;
    content: "";
    border-radius: 3px;
    position: absolute;
    background-color: #4b59f7;
  }

  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const CustomerTopSubHeading = styled.div`
  font-size: 18px;
  color: #111;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
`;
export const CustomerBottomSubHeading = styled.div`
  font-size: 28px;
  color: #4b59f7;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
`;

export const CustomerContainerOwlCarousel = styled.div`
  width: 100%;
  z-index: 1;
  position: relative;
`;

export const CustomerOwlCarouselStageOuter = styled.div`
  position: relative;
  overflow: hidden;
`;

export const CustomerOwlCarouselStage = styled.div`
  /* transform: translate3d(-2636px, 0px, 0px);
  transition: all 0.25s ease 0s; */
  width: 4521px;
  position: relative;
`;

export const CustomerOwlCarouselItem = styled.div`
  width: 356.667px;
  margin-right: 20px;
  user-select: none;
  min-height: 1px;
  float: left;
  position: relative;
`;

export const CustomerOwlItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  color: #000;
  padding: 2rem;
  border-radius: 10px;
`;

export const CustomerName = styled.h3`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: #274abb;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  line-height: 1.1;
  margin-top: 0;
`;

export const CustomerImage = styled.img`
  width: 90px;
  border-radius: 50%;
  margin: 0 auto;
  transform-style: preserve-3d;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
`;

export const CustomerLocation = styled.h6`
  text-align: center;
  font-weight: 400;
  margin-bottom: 0px;
  color: #000;
  margin-top: 0.5rem !important;
  font-size: 1rem;
  font-family: inherit;
  line-height: 1.1;
`;

export const CustomerRating = styled.ul`
  list-style: none;
  margin-top: 0.4rem;
  padding: 0px;
  text-align: center !important;
  margin-bottom: 0.5rem !important;
`;

export const CustomerStarItem = styled.li`
  text-align: center;
  display: inline-block;
  margin-bottom: 1.8rem;
`;

export const CustomerStarIcon = styled(FaStar)`
  color: #ffc107 !important;
  display: inline-block;
`;

export const CustomerComment = styled.p`
  text-align: center;
  font-weight: 400;
  font-style: italic;
  margin: 0.3rem auto 0;
  max-width: 500px;
  color: #666;
  line-height: 26px;
`;

export const CustomerCommentContainer = styled.div``;

export const CustomerQuoteIcon = styled(FaQuoteLeft)`
  font-size: 1.2rem;
  left: 136px;
  top: -5px;
  position: relative;
  color: #274abb;
`;

export const CustomerOwlCarouselNav = styled.div``;

export const CustomerOwlCarouselDots = styled.div`
  text-align: center;
  margin-top: 1.3rem;
  line-height: 0;
`;

export const CustomerOwlCarouselDot = styled.div`
  cursor: pointer;
  user-select: none;
  border-radius: 50px;
  height: 10px;
  width: 10px;
  display: inline-block;
  background: ${({ isActive }) =>
    isActive ? "#274abb !important" : "#121B22 !important"};
  margin-left: 5px;
  margin-right: 5px;
`;
