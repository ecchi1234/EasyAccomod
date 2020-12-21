import React from "react";

import { Button } from "../../assets/style/globalStyle";

import { LeftMenu } from "../../components";

import {
  ProfileScreen,
  ProfileWrapper,
  LeftMenuWrapper,
  ContentSection,
  LeftMenuContainer,
} from "../Profile/Profile.elements";

import {
  SignUpForm,
  SignUpFormGroup,
  FormLabel,
  FormTextInput,
} from "../SignUp/SignUp.elements";

import {
  Row,
  InformationCard,
  InformationCardTitle,
} from "../AccommodationDetail/AccommodationDetail.elements";

const ChangePassword = () => {
  return (
    <>
      <ProfileScreen>
        <ProfileWrapper>
          <Row>
            <LeftMenuWrapper>
              <LeftMenuContainer>
                <LeftMenu route="change-password"></LeftMenu>
              </LeftMenuContainer>
            </LeftMenuWrapper>
            <ContentSection>
              <InformationCard>
                <InformationCardTitle>Tài khoản của tôi</InformationCardTitle>
                <SignUpForm>
                  <SignUpFormGroup>
                    <FormLabel>Mật khẩu cũ</FormLabel>
                    <FormTextInput></FormTextInput>
                  </SignUpFormGroup>

                  <SignUpFormGroup>
                    <FormLabel>Mật khẩu mới</FormLabel>
                    <FormTextInput></FormTextInput>
                  </SignUpFormGroup>

                  <Button>Cập nhật</Button>
                </SignUpForm>
              </InformationCard>
            </ContentSection>
          </Row>
        </ProfileWrapper>
      </ProfileScreen>
    </>
  );
};

export default ChangePassword;