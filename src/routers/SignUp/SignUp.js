import React from "react";
import { homeObjOne } from "./Data";
import { InfoSection } from "../../components";

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
} from "./SignUp.elements";

import {
  AccommodationsScreen,
  AccommodationsWrapper,
  AccommodationsHeaderSection,
  AccommodationsHeaderText,
  AccommodationsHeaderTextContainer,
} from "../Accommodations/Accommodations.elements";

import { ClearFix } from "../AccommodationDetail/AccommodationDetail.elements";

const SignUp = () => {
  return (
    <>
      <AccommodationsScreen>
        <AccommodationsWrapper>
          <AccommodationsHeaderSection>
            <AccommodationsHeaderTextContainer>
              <AccommodationsHeaderText>
                Đăng ký tài khoản
              </AccommodationsHeaderText>
            </AccommodationsHeaderTextContainer>
          </AccommodationsHeaderSection>
        </AccommodationsWrapper>
      </AccommodationsScreen>
      <SignUpSectionContainer>
        <SignUpSection>
          <SignUpForm>
            <SignUpFormGroup>
              <FormLabel>Tên của bạn</FormLabel>
              <FormTextInput></FormTextInput>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Họ của bạn</FormLabel>
              <FormTextInput></FormTextInput>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Mật khẩu</FormLabel>
              <FormTextInput type="password"></FormTextInput>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Xác nhận lại mật khẩu</FormLabel>
              <FormTextInput type="password"></FormTextInput>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Email</FormLabel>
              <FormTextInput></FormTextInput>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Số điện thoại</FormLabel>
              <FormTextInput></FormTextInput>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Địa chỉ thường trú</FormLabel>
              <FormTextInput></FormTextInput>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Số căn cước công dân</FormLabel>
              <FormTextInput></FormTextInput>
            </SignUpFormGroup>

            <ClearFix></ClearFix>

            <SubmitButton>Đăng ký ngay!</SubmitButton>
            <HaveAccountText>
              Đã có tài khoản?
              <span>
                <LinkToLoginPage to="/login">Đăng nhập</LinkToLoginPage>
              </span>
            </HaveAccountText>
          </SignUpForm>
        </SignUpSection>
      </SignUpSectionContainer>
    </>
  );
};

export default SignUp;
