import styled from "styled-components";
// import Button from "../../assets/style/globalStyle";
import img from "../../assets/img/bg/bg-details.jpg";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

export const AccommodationsScreen = styled.div``;

export const AccommodationsWrapper = styled.div``;

export const AccommodationsHeaderSection = styled.section`
  background: linear-gradient(rgba(18, 27, 34, 0.6), rgba(18, 27, 34, 0.6)),
    url(${img}) no-repeat center center;
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
`;

export const AccommodationsHeaderText = styled.h1`
  font-family: "Montserrat";
  font-weight: 800;
  text-transform: uppercase;
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
`;

export const AccommodationsContentSection = styled.section`
  background-color: #f7f7f7;
  padding: 6rem 0;
`;

export const AccommodationsListContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media screen and (min-width: 992px) {
    flex: 0 0 75%;
    max-width: 75%;
  }

  position: relative;
  width: 100%;
  min-height: 1px;
`;

export const AccommodationsItemCol = styled.div`
  padding-bottom: 1.6rem;
  padding-right: 15px;
  padding-left: 15px;

  position: relative;
  width: 100%;
  min-height: 1px;
  @media screen and (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const AccommodationsList = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  flex-wrap: wrap;
`;

export const AccommodationsPaginationNavigation = styled.nav`
  padding-top: 45px;
`;

export const AccommodationsPagination = styled.ul`
  margin-bottom: 0px;
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
  margin-top: 0;
`;

export const NavigationPageItem = styled(Link)`
  margin-left: ${({ first }) => (first ? "0" : "-1px")};
  border-bottom-left-radius: ${({ first }) => (first ? "0.25rem" : "0")};
  border-top-left-radius: ${({ first }) => (first ? "0.25rem" : "0")};
  border-bottom-right-radius: ${({ last }) => (last ? "0.25rem" : "0")};
  border-top-right-radius: ${({ last }) => (last ? "0.25rem" : "0")};
  color: ${({ active }) => (active ? "#fff" : "#121b22")};
  transition: all 0.5s ease;
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  line-height: 1.25;
  background-color: ${({ active }) => (active ? "#274abb" : "#fff")};
  border: 1px solid #ddd;
  text-decoration: none;
  &:hover {
    background-color: #274abb;
    color: #fff;
  }
`;

export const AccommodationsRightSidebar = styled.aside`
  padding-right: 15px;
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media screen and (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

export const AccommodationsSearchTitle = styled.div`
  display: flex;
`;

export const AccommodationsSearchTitleIcon = styled(IoHome)`
  background: #274abb;
  color: #fff;
  width: 47px;
  height: 47px;
  line-height: 47px;
  text-align: center;
  /* size: 25px; */
  float: left;
`;

export const AccommodationsSearchTitleText = styled.div``;

export const AccommodationsFilter = styled.div``;

export const AccommodationsFilterTitle = styled.h5`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-transform: capitalize;
  color: #444;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  margin-top: 0;

  &::after {
    display: block;
    height: 3px;
    font-weight: bold;
    background-color: #274abb;
    content: " ";
    width: 50px;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const AccommodationsFilterForm = styled.form``;

export const AccommodationsFilterInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 5px 10px;
  border: 2px solid #e2dfdf;
  border-radius: 0;
  background: #fff;
  color: #000 !important;
  margin-bottom: 1rem !important;
`;

export const AccommodationsFilterCheckbox = styled.input``;

export const AccommodationsCheckboxGroup = styled.div`
  margin-bottom: 0.8rem;
`;
export const AccommodationsCheckboxLabel = styled.span`
  margin-left: 0.5rem;
`;

export const AccommodationsFilterSelect = styled.select`
  background: #fff;
  border: 2px solid #e2dfdf;
  color: #333;
  width: 100%;
  height: 45px;
  padding: 5px 10px;
  text-transform: capitalize;
  transition: all 0.5s ease-in-out;
  margin-bottom: 1rem !important;
`;

export const AccommodationsSelectOption = styled.option`
  background: #fff;
  color: #333;
`;

export const AccommodationsFilterLabelInput = styled.h4`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const AccommodationsFilterInputGroup = styled.div`
  margin-bottom: 1rem !important;
`;

export const AccommodationsFilterButton = styled.button`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  margin-top: 2rem;
  font-size: 14px;
  background: #274abb;
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  padding: 12px 22px;
  border-radius: 0;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: #333;
  }
`;

export const AccommodationsHeaderTextContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
`;

export const AccommodationsContentContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  max-width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
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

export const AccommodationsContentRow = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const AccommodationsListHeadingBlock = styled.div`
  background: #fff;
  border-radius: 3px;
  height: 52px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.h4`
  line-height: 52px;
  color: #121b22;
  display: inline-block;
  padding-left: 20px;
  border-radius: 3px 0 0 3px;
  margin: 0 0 0;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
`;

export const Right = styled.select`
  font-size: 13px;
  font-weight: 300;
  padding: 5px 12px;
  border: solid 1px #e7e7e7;
  width: auto;
  background: #fff;
  color: #999;
  margin-right: 5px;
  margin-bottom: 0px;
  outline: none;
  height: 70%;
`;

export const PricingCard = styled.div`
  background: #fff;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  height: 100%;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    min-height: 100%;
    &:hover {
      transform: none;
    }
  }

  margin-bottom: 10px;

  
`;
