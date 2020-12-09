import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../assets/style/globalStyle";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  NameWebsite,
  InterestsProperty,
  InterestsItem,
  InterestsText,
  InterestsTitle,
  InterestsDesc,
  InterestsIcon,
  InterestsIconContainer,
} from "./WelcomeSection.elements";

const WelcomeSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  topLine,
  start,
  img,
  alt,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <NameWebsite>EasyAccomod</NameWebsite>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              </TextWrapper>
              <InterestsProperty>
                <InterestsItem>
                  <InterestsIconContainer>
                    <InterestsIcon
                      src={require("../../assets/img/1.png").default}
                    ></InterestsIcon>
                  </InterestsIconContainer>
                  <InterestsText>
                    <InterestsTitle>Buy Property</InterestsTitle>
                    <InterestsDesc>
                      We have the best properties elit, sed do eiusmod tempe
                    </InterestsDesc>
                  </InterestsText>
                </InterestsItem>

                <InterestsItem>
                  <InterestsIconContainer>
                    <InterestsIcon
                      src={require("../../assets/img/2.png").default}
                    ></InterestsIcon>
                  </InterestsIconContainer>
                  <InterestsText>
                    <InterestsTitle>Buy Property</InterestsTitle>
                    <InterestsDesc>
                      We have the best properties elit, sed do eiusmod tempe
                    </InterestsDesc>
                  </InterestsText>
                </InterestsItem>

                <InterestsItem>
                  <InterestsIconContainer>
                    <InterestsIcon
                      src={require("../../assets/img/3.png").default}
                    ></InterestsIcon>
                  </InterestsIconContainer>
                  <InterestsText>
                    <InterestsTitle>Buy Property</InterestsTitle>
                    <InterestsDesc>
                      We have the best properties elit, sed do eiusmod tempe
                    </InterestsDesc>
                  </InterestsText>
                </InterestsItem>

                <InterestsItem>
                  <InterestsIconContainer>
                    <InterestsIcon
                      src={require("../../assets/img/4.png").default}
                    ></InterestsIcon>
                  </InterestsIconContainer>
                  <InterestsText>
                    <InterestsTitle>Buy Property</InterestsTitle>
                    <InterestsDesc>
                      We have the best properties elit, sed do eiusmod tempe
                    </InterestsDesc>
                  </InterestsText>
                </InterestsItem>
              </InterestsProperty>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt}></Img>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default WelcomeSection;
