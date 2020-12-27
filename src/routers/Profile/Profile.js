import React, {useState, useContext} from "react";

import axios from "axios";

import { Button } from "../../assets/style/globalStyle";

import { LeftMenu } from "../../components";

import { AuthContext } from "../../App";

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
  // handle login state using context
  const { state, dispatch } = React.useContext(AuthContext);
  
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
                    <FormTextInput value={localStorage.getItem("user") ? JSON.parse(localStorage.user).lastName : ""}></FormTextInput>
                    
                  </SignUpFormGroup>

                  <SignUpFormGroup>
                    <FormLabel>Họ</FormLabel>
                    <FormTextInput value={localStorage.getItem("user") ? JSON.parse(localStorage.user).firstName : ""}></FormTextInput>
                  </SignUpFormGroup>

                  <SignUpFormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormTextInput value={localStorage.getItem("user") ? JSON.parse(localStorage.user).email : ""}></FormTextInput>
                  </SignUpFormGroup>

                  <SignUpFormGroup>
                    <FormLabel>Số điện thoại</FormLabel>
                    <FormTextInput value={localStorage.getItem("user") ? JSON.parse(localStorage.user).phoneNumber : ""}></FormTextInput>
                  </SignUpFormGroup>

                  <SignUpFormGroup>
                    <FormLabel>Địa chỉ thường trú</FormLabel>
                    <FormTextInput value={localStorage.getItem("user") ? JSON.parse(localStorage.user).address : ""}></FormTextInput>
                  </SignUpFormGroup>

                  <SignUpFormGroup>
                    <FormLabel>Số căn cước công dân</FormLabel>
                    <FormTextInput value={localStorage.getItem("user") ? JSON.parse(localStorage.user).identityNumber : ""}></FormTextInput>
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
