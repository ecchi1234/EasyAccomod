import styled from "styled-components";

export const ProfileScreen = styled.div`
  padding: 1.5rem 0 !important;
  background: #f7f7f7;
`;

export const ProfileWrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 100%;

  @media screen and (min-width: 576px) {
    width: 540px;
  }

  @media screen and (min-width: 768px) {
    width: 720px;
  }

  @media screen and (min-width: 992px) {
    width: 960px;
  }

  @media screen and (min-width: 1200px) {
    width: 1140px;
  }
`;

export const LeftMenuWrapper = styled.aside`
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  width: 100%;
  
  min-height: 1px;
  padding-bottom: 15px;
  @media screen and (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    
  }

  @media screen and (min-width: 992px) {
    flex: 0 0 calc(100% / 3.5);
    max-width: calc(100% / 3.5);
  }
`;

export const ContentSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media screen and (min-width: 992px) {
    flex: 0 0 calc(100% / 1.4);
    max-width: calc(100% / 1.4);
  }
`;

export const ContentSectionContainer = styled.div``;

export const LeftMenuContainer = styled.div`
height: 100%;
`;
