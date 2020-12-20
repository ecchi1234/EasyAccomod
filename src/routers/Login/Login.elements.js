import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckBoxAndForgetPassword = styled.div`
  margin-bottom: 30px;
  box-sizing: border-box;
`;
export const RememberMeCheckboxContainer = styled.div`
  float: left !important;
`;

export const RememberMeCheckBox = styled.div``;

export const CheckboxInput = styled.input`
  position: relative;
  border: 1px solid #ccc !important;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  color: #fff;
  outline: none;
  margin-right: 0.5rem !important;
  margin-bottom: 0px;
  background: #fff !important;
  font-family: sans-serif;
  font-size: 100%;
  margin: 0;

  &:checked {
    color: #234dd4;
  }
  
`;

export const CheckBoxInputLabel = styled.label`
  color: #666;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 5px;
  display: inline-block;
`;

export const ForgotPasswordContainer = styled.div`
  float: right !important;
  margin-top: 0px !important;
`;

export const ForgotPassword = styled(Link)`
  color: #666;
  text-decoration: none;
`;
