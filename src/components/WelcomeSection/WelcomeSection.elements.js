import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 15px;
  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#121B22")};
  font-size: 26px;
  line-height: 16px;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  display: inline;
`;

export const NameWebsite = styled(TopLine)`
  color: #4b59f7;
  font-weight: 800;
  display: inline;
  font-family: "Roboto", sans-serif;
  text-transform: none;
`;

export const Heading = styled.h4`
  color: #000;
  font-size: 22px;
  text-transform: uppercase;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
  margin-bottom: 0.5rem;
  margin-top: 0.8rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  line-height: 26px;
  font-size: 15px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#666")};
  font-weight: 400;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const InterestsProperty = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InterestsItem = styled.div`
  position: relative;
  width: 50%;
  min-height: 1px;
  /* padding-right: 15px;
  padding-left: 15px; */
  margin-bottom: 31px;
  display: flex;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const InterestsText = styled.div`
  /* float: right; */
  display: inline-block;
`;

export const InterestsTitle = styled.h6`
  color: #555;
  font-weight: 600;
  font-size: 1rem;
`;

export const InterestsDesc = styled.p`
  color: #666;
  font-weight: 400;
  margin: 0;
  line-height: 26px;
  font-size: 15px;
`;

export const InterestsIcon = styled.img`
  display: inline-block;
  max-width: 32px;
  width: 32px;
  height: auto;
  vertical-align: middle;
  border-style: none;
`;

export const InterestsIconContainer = styled.div`
  /* display: inline-block; */
  width: 32px;
  float: left;
  margin-right: 16px;
  height: 32px;
`;
