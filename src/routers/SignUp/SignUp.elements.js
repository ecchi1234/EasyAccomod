import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpSectionContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpSection = styled.div`
  width: 430px;
  padding: 45px 60px 60px;
  overflow-y: auto;
  background-color: #fff;
`;

export const SignUpForm = styled.form``;

export const SignUpFormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 5px;
  color: #000;
  display: inline-block;
`;

export const FormTextInput = styled.input`
  padding: 0.7rem;
  border: 1px solid #dddddd;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1.25;
  color: #464a4c;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border-radius: 0.25rem;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  overflow: visible;
  margin: 0;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  text-decoration: none;
  text-align: center;
  margin-bottom: 5px;
  border-radius: 25px !important;
  border: none;
  background: #274abb;
  padding: 15px 30px;
  color: #fff;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #121b22;
    cursor: pointer;
    outline-width: 0;
  }
`;

export const HaveAccountText = styled.div`
  text-align: center !important;
  margin-top: 16px;
`;

export const LinkToLoginPage = styled(Link)`
  text-decoration: none;
  color: #0275d8;
  font-weight: bolder;

  &:hover {
    color: #014c8c;
  }
`;
