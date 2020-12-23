import styled from "styled-components";

import { FaCloudUploadAlt } from "react-icons/fa";

export const ContentSection = styled.section`
  padding: 6rem 0;
  background: #f6f6f6 none repeat scroll 0 0;
`;

export const ContentSectionContainer = styled.div`
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

export const AddHouseSection = styled.div`
  background: #fff none repeat scroll 0 0;
  margin-bottom: 30px;
  padding: 30px;
`;

export const AddHouseSectionTitle = styled.h3`
  border-bottom: 1px solid #ddd;
  margin-bottom: 40px;
  padding-bottom: 25px;
  color: #274abb;
  text-transform: capitalize;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.1;
  margin-top: 0;
`;

export const AddHouseFormGroup = styled.div`
  padding: 0 50px;
  @media screen and (max-width: 575px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const FormContainer = styled.p`
  margin-bottom: 20px;
  line-height: 26px;
  margin-top: 0;
`;

export const FormLabel = styled.label`
  color: #333;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 24px;
  margin-bottom: 5px;
`;

export const TextInput = styled.input`
  border: 1px solid #ddd;
  height: 50px;
  padding: 10px;
  width: 100%;
`;

export const TextAreaInput = styled.textarea`
  border: 1px solid #ddd;
  height: 180px;
  padding: 10px;
  width: 100%;
  resize: vertical;
`;

export const SelectionContainer = styled.div`
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
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const SelectionContainerOneColumn = styled(SelectionContainer)`
  @media screen and (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media screen and (min-width: 992px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const SelectionContainerThreeColumn = styled(SelectionContainer)`
  @media screen and (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media screen and (min-width: 992px) {
    flex: 0 0 calc(100% / 3);
    max-width: calc(100% / 3);
  }
`;

export const SelectionGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

export const SelectionInput = styled.select`
  background: #fff none repeat scroll 0 0;
  border: 1px solid #ddd;
  border-radius: 0;
  color: #666;
  padding: 10px;
  text-align: left;
  width: 100%;
  text-transform: capitalize;
  height: 50px;
`;

export const UploadImageDescContainer = styled.div`
  background: #fff none repeat scroll 0 0;
  border: 2px dashed #1abc9c;
  padding: 50px 20px;
  text-align: center;
`;

export const UploadImageMessage = styled.span`
  color: #1abc9c;
  font-size: 20px;
  text-transform: capitalize;
`;

export const UploadImageIcon = styled(FaCloudUploadAlt)`
  color: #1abc9c;
  display: block;
  font-size: 60px;
  margin-bottom: 30px;
  margin: 30px auto;
  &:hover {
    cursor: pointer;
  }
`;

export const TotalCost = styled.span`
  color: #274abb;
  text-transform: capitalize;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.1;
  margin-top: 0;
  margin-right: 10px;
`;

export const AddHouseButtonSection = styled.div``;

export const AddHouseButtonSubmitContainer = styled.div``;

export const AddHouseButtonSubmit = styled.button`
  background: #274abb none repeat scroll 0 0;
  border: medium none;
  color: #fff;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  height: 100%;
  padding: 10px 20px;
  transition: all 0.4s ease 0s;
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
    background: #121b22 none repeat scroll 0 0;
  }
`;

export const NearbyList = styled.ul`
  list-style-type: none;
  margin-bottom: 10px;
`;

export const NearbyListItem = styled.li`
  /* border: 1px solid #ddd; */
  height: 50px;
  padding: 10px;
  padding-left: 0px;
  width: 100%;
`;

export const AddNearbyButtonContainer = styled.div`
  margin-top: 5px;
`;
