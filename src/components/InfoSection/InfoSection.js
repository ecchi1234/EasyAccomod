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
  Form,
  FormInput,
} from "./InfoSection.elements";

const InfoSection = ({
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
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Form>
                  <FormInput
                    name="find"
                    type="text"
                    placeholder="Bạn muốn tìm gì?"
                  ></FormInput>
                  <Link to="/sign-up">
                    <Button fontBig primary={primary}>
                      {buttonLabel}
                    </Button>
                  </Link>
                </Form>
              </TextWrapper>
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

export default InfoSection;
