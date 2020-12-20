import React from "react";

import {
  SignUpSectionContainer,
  SignUpSection,
  SignUpForm,
  SignUpFormGroup,
  FormLabel,
  FormTextInput,
  SubmitButton,
  HaveAccountText,
  LinkToLoginPage,
} from "../SignUp/SignUp.elements";

import {
  AccommodationsScreen,
  AccommodationsWrapper,
  AccommodationsHeaderSection,
  AccommodationsHeaderText,
  AccommodationsHeaderTextContainer,
} from "../Accommodations/Accommodations.elements";

import { ClearFix } from "../AccommodationDetail/AccommodationDetail.elements";
import {
  CheckBoxAndForgetPassword,
  CheckboxInput,
  CheckBoxInputLabel,
  ForgotPassword,
  ForgotPasswordContainer,
  RememberMeCheckBox,
  RememberMeCheckboxContainer,
} from "./Login.elements";

const Login = () => {
  return (
    <>
      <AccommodationsScreen>
        <AccommodationsWrapper>
          <AccommodationsHeaderSection>
            <AccommodationsHeaderTextContainer>
              <AccommodationsHeaderText>Đăng nhập</AccommodationsHeaderText>
            </AccommodationsHeaderTextContainer>
          </AccommodationsHeaderSection>
        </AccommodationsWrapper>
      </AccommodationsScreen>
      <SignUpSectionContainer>
        <SignUpSection>
          <SignUpForm>
            <SignUpFormGroup>
              <FormLabel>Email</FormLabel>
              <FormTextInput placeholder="Điền email/username...."></FormTextInput>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Mật khẩu</FormLabel>
              <FormTextInput type="password" placeholder="Điền mật khẩu..."></FormTextInput>
            </SignUpFormGroup>

            <CheckBoxAndForgetPassword>
              <RememberMeCheckboxContainer>
                <RememberMeCheckBox>
                  <CheckboxInput type="checkbox"></CheckboxInput>
                  <CheckBoxInputLabel>Nhớ tôi</CheckBoxInputLabel>
                </RememberMeCheckBox>
              </RememberMeCheckboxContainer>
              <ForgotPasswordContainer>
                <ForgotPassword to="forgot-password">Quên mật khẩu?</ForgotPassword>
              </ForgotPasswordContainer>
              <ClearFix></ClearFix>
            </CheckBoxAndForgetPassword>

            <SubmitButton>Đăng nhập</SubmitButton>
            <HaveAccountText>
              Chưa có tài khoản?
              <span>
                <LinkToLoginPage to="/sign-up">Đăng ký</LinkToLoginPage>
              </span>
            </HaveAccountText>
          </SignUpForm>
        </SignUpSection>
      </SignUpSectionContainer>
    </>
  );
};

export default Login;
