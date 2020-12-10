import React from "react";
import {
  PlaceSec,
  PlaceSectionWrapper,
  PlaceSectionHeading,
  PlaceSectionContainer,
  PlaceCard,
  PlaceCardImage,
  PlaceCardTag,
  PlaceCardText,
  PlaceCardName,
  PlaceCardDesc,
  PlaceTopSubHeading,
  PlaceBottomSubHeading,
  PlaceCardWrap,
  PlaceCardOverlay,
  PlaceCardTagText
} from "./PlaceSection.elements";

const PlaceSection = () => {
  return (
    <>
      <PlaceSec>
        <PlaceSectionWrapper>
          <PlaceSectionHeading>
            <PlaceTopSubHeading>Most Popular</PlaceTopSubHeading>
            <PlaceBottomSubHeading>Places</PlaceBottomSubHeading>
          </PlaceSectionHeading>
          <PlaceSectionContainer>
            {/*array cac place card 
              về sau có api thì mình fetch vào một cái array rồi dùng map return trong này !
            */}
            <PlaceCardWrap>
              <PlaceCard to="/products">
                <PlaceCardImage src={require("../../assets/img/popular-places/1.jpg").default}></PlaceCardImage>
                <PlaceCardOverlay></PlaceCardOverlay>
                <PlaceCardTag>
                  <PlaceCardTagText>31 nhà trọ</PlaceCardTagText>
                </PlaceCardTag>
                <PlaceCardText>
                  <PlaceCardName>Hà Nội</PlaceCardName>
                  <PlaceCardDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</PlaceCardDesc>
                </PlaceCardText>
              </PlaceCard>
            </PlaceCardWrap>

            <PlaceCardWrap>
              <PlaceCard to="/products">
                <PlaceCardImage src={require("../../assets/img/popular-places/2.jpg").default}></PlaceCardImage>
                <PlaceCardOverlay></PlaceCardOverlay>
                <PlaceCardTag>
                  <PlaceCardTagText>31 nhà trọ</PlaceCardTagText>
                </PlaceCardTag>
                <PlaceCardText>
                  <PlaceCardName>Hồ Chí Minh</PlaceCardName>
                  <PlaceCardDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</PlaceCardDesc>
                </PlaceCardText>
              </PlaceCard>
            </PlaceCardWrap>

            <PlaceCardWrap>
              <PlaceCard to="/products">
                <PlaceCardImage src={require("../../assets/img/popular-places/3.jpg").default}></PlaceCardImage>
                <PlaceCardOverlay></PlaceCardOverlay>
                <PlaceCardTag>
                  <PlaceCardTagText>31 nhà trọ</PlaceCardTagText>
                </PlaceCardTag>
                <PlaceCardText>
                  <PlaceCardName>Đà Nẵng</PlaceCardName>
                  <PlaceCardDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</PlaceCardDesc>
                </PlaceCardText>
              </PlaceCard>
            </PlaceCardWrap>

            <PlaceCardWrap>
              <PlaceCard to="/products">
                <PlaceCardImage src={require("../../assets/img/popular-places/4.jpeg").default}></PlaceCardImage>
                <PlaceCardOverlay></PlaceCardOverlay>
                <PlaceCardTag>
                  <PlaceCardTagText>31 nhà trọ</PlaceCardTagText>
                </PlaceCardTag>
                <PlaceCardText>
                  <PlaceCardName>Thanh Hóa</PlaceCardName>
                  <PlaceCardDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</PlaceCardDesc>
                </PlaceCardText>
              </PlaceCard>
            </PlaceCardWrap>

            <PlaceCardWrap>
              <PlaceCard to="/products">
                <PlaceCardImage src={require("../../assets/img/popular-places/5.jpeg").default}></PlaceCardImage>
                <PlaceCardOverlay></PlaceCardOverlay>
                <PlaceCardTag>
                  <PlaceCardTagText>31 nhà trọ</PlaceCardTagText>
                </PlaceCardTag>
                <PlaceCardText>
                  <PlaceCardName>Hải Dương</PlaceCardName>
                  <PlaceCardDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</PlaceCardDesc>
                </PlaceCardText>
              </PlaceCard>
            </PlaceCardWrap>

            <PlaceCardWrap>
              <PlaceCard to="/products">
                <PlaceCardImage src={require("../../assets/img/popular-places/6.jpeg").default}></PlaceCardImage>
                <PlaceCardOverlay></PlaceCardOverlay>
                <PlaceCardTag>
                  <PlaceCardTagText>31 nhà trọ</PlaceCardTagText>
                </PlaceCardTag>
                <PlaceCardText>
                  <PlaceCardName>Hưng Yên</PlaceCardName>
                  <PlaceCardDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</PlaceCardDesc>
                </PlaceCardText>
              </PlaceCard>
            </PlaceCardWrap>
          </PlaceSectionContainer>
        </PlaceSectionWrapper>
      </PlaceSec>
    </>
  );
};

export default PlaceSection;
