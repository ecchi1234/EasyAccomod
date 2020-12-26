import React, {useState} from "react";

import axios from "axios";

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
  ErrorNotification,
} from "../SignUp/SignUp.elements";

import {
  Row,
  InformationCard,
  InformationCardTitle,
} from "../AccommodationDetail/AccommodationDetail.elements";

const Profile = (props) => {
  
  return (
    <>
      <ProfileScreen>
        <ProfileWrapper>
          <Row>
            <LeftMenuWrapper>
              <LeftMenuContainer>
                <LeftMenu route="account"></LeftMenu>
              </LeftMenuContainer>
            </LeftMenuWrapper>
            <ContentSection>
              <InformationCard>
                <InformationCardTitle>Tài khoản của tôi</InformationCardTitle>
                <SignUpForm>
                  <SignUpFormGroup>
                    <FormLabel>Tên</FormLabel>
                    <FormTextInput></FormTextInput>
                    
                  </SignUpFormGroup>

                  <SignUpFormGroup>
                    <FormLabel>Họ</FormLabel>
                    <FormTextInput></FormTextInput>
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

                  <Button>Chỉnh sửa thông tin</Button>
                </SignUpForm>
              </InformationCard>
            </ContentSection>
          </Row>
        </ProfileWrapper>
      </ProfileScreen>
    </>
  );
};

export default Profile;
