import { Link } from "react-router-dom";
import styled from "styled-components";

export const PlaceSec = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const PlaceSectionWrapper = styled.div`
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

export const PlaceSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-right: -15px;
  margin-left: -15px;

  @media screen and (min-width: 576px) {
    margin-right: -15px;
    margin-left: -15px;
  }

  @media screen and (min-width: 768px) {
    margin-right: -15px;
    margin-left: -15px;
  }

  @media screen and (min-width: 992px) {
    margin-right: -15px;
    margin-left: -15px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: -15px;
    margin-left: -15px;
  }
`;

export const PlaceCardWrap = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  @media screen and (max-width: 960px) {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media screen and (min-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media screen and (min-width: 992px) {
    flex: 0 0 calc(100% / 3);
    max-width: calc(100% / 3);
  }
`;
export const PlaceCardImage = styled.img`
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  display: inline-block;
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
  transition: all 0.55s;
  transition: transform 0.35s ease-out;

  &:hover {
    cursor: pointer;
  }
`;

// cai nay la cai quyet dinh den responsive cua minh phai sua cho width cua no thay doi
// thay doi theo man hinh
export const PlaceCard = styled(Link)`
  height: 290px;
  display: inline-block;
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 30px;
  z-index: 90;
  border-radius: 5px;
  padding: 20px;

  &:nth-child(2) {
    margin: 24px;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 5px;
    height: 100%;
    display: block;
    content: "";
    background-color: #121b22;
    opacity: 0.3;
    z-index: 99;
    transition: 0.3s ease-out;
  }

  &:hover ${PlaceCardImage} {
    transform: scale(1.3);
  }

  @media screen and (max-width: 767px) {
    height: 350px;
  }
`;

export const PlaceSectionHeading = styled.div`
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

export const PlaceTopSubHeading = styled.h3`
  font-size: 18px;
  color: #111;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
`;
export const PlaceBottomSubHeading = styled.h2`
  font-size: 28px;
  color: #4b59f7;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
`;

export const PlaceCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0;
  z-index: 2;
`;

export const PlaceCardTag = styled.div`
  position: absolute;
  top: 0;
  z-index: 999;
  right: 0;
  width: 100%;
  display: block;
  font-size: 15px;
  font-weight: bold;
  padding: 0px;
  overflow: hidden;
  height: 100px;
`;

export const PlaceCardTagText = styled.span`
  background-color: #274abb;
  float: right;
  border-radius: 20px;
  right: 23px;
  top: 23px;
  font-weight: 400;
  position: relative;
  text-align: center;
  width: 120px;
  font-size: 15px;
  margin: 0;
  color: #fff;
  display: inline-block;
  padding: 5px;
`;

export const PlaceCardText = styled.div`
  position: absolute;
  z-index: 101;
  top: 73%;
  margin: 0 auto;
  text-align: left;
  transform: translate(0, -50.5%);
`;

export const PlaceCardName = styled.h4`
  margin-bottom: 0.5rem;
  margin-top: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
`;

export const PlaceCardDesc = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 300;
  color: #fff;
`;
