import React from "react";

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
} from "../SignUp/SignUp.elements";

import {
  Row,
  InformationCard,
  InformationCardTitle,
} from "../AccommodationDetail/AccommodationDetail.elements";

const ChangePassword = ({ props }) => {
  //loading state
  const [isChanged, setIsChanged] = React.useState(false);
  // reference to input
  const currentPassRef = React.useRef();
  const newPassRef = React.useRef();
  const confirmPassRef = React.useRef();
  // state of input
  const [currentPass, setCurPass] = React.useState("");
  const [newPass, setNewPass] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");

  const handleChangePassword = () => {
    axios("https://localhost:5000/api/User/changepassword", {
      method: "PUT",
      withCredentials: true,
      data: {
        userName: JSON.parse(localStorage.getItem("user")).userName,
        curPassword: currentPass,
        newPassword: newPass,
        confirmPassword: confirmPass,
      },
    }).then((res) => {
      setIsChanged(true);
      console.log(res);
    });
  };
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
                {isChanged ? (
                  <div>Mật khẩu thay đổi thành công!</div>
                ) : (
                  <div>
                    <SignUpFormGroup>
                      <FormLabel>Mật khẩu cũ</FormLabel>
                      <FormTextInput
                        type="password"
                        ref={currentPassRef}
                        onChange={() => {
                          setCurPass(currentPassRef.current.value);
                        }}
                      ></FormTextInput>
                    </SignUpFormGroup>

                    <SignUpFormGroup>
                      <FormLabel>Mật khẩu mới</FormLabel>
                      <FormTextInput
                        type="password"
                        ref={newPassRef}
                        onChange={() => {
                          setNewPass(newPassRef.current.value);
                        }}
                      ></FormTextInput>
                    </SignUpFormGroup>

                    <SignUpFormGroup>
                      <FormLabel>Xác nhận mật khẩu</FormLabel>
                      <FormTextInput
                        type="password"
                        ref={confirmPassRef}
                        onChange={() => {
                          setConfirmPass(confirmPassRef.current.value);
                        }}
                      ></FormTextInput>
                    </SignUpFormGroup>

                    <Button
                      onClick={() => {
                        if (isChanged) {
                          props.history.push("/profile");
                        } else {
                          handleChangePassword();
                        }
                      }}
                    >
                      {isChanged ? "Quay về" : "Cập nhật"}
                    </Button>
                  </div>
                )}
              </InformationCard>
            </ContentSection>
          </Row>
        </ProfileWrapper>
      </ProfileScreen>
    </>
  );
};

export default ChangePassword;
