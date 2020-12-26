import React, { useState, useEffect } from "react";

import axios from "axios";

import { useFormInput } from "../../utils/hooks";

import { AuthContext } from "../../App";

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
  ErrorNotification,
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

const Login = (props) => {
  // handle login state using context
  const { dispatch } = React.useContext(AuthContext);
  
  // information input
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("https://localhost:5000/api/Login/login", {
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        dispatch({
          type: "LOGIN",
          payload: response.data
      })
        console.log(response);
        setLoading(false);
        props.history.push("/profile");
      })
      .catch((error) => {
        setLoading(false);
        // if (error.response.status === 401) setError(error.response.data.message);
        // else setError("Something went wrong. Please try again later.");
        console.log(error);
      });
  };

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
              <FormLabel>Email/username</FormLabel>
              <FormTextInput
                type="text"
                {...username}
                placeholder="Điền email/username...."
              ></FormTextInput>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Mật khẩu</FormLabel>
              <FormTextInput
                type="password"
                {...password}
                placeholder="Điền mật khẩu..."
              ></FormTextInput>
            </SignUpFormGroup>

            <CheckBoxAndForgetPassword>
              <RememberMeCheckboxContainer>
                <RememberMeCheckBox>
                  <CheckboxInput type="checkbox"></CheckboxInput>
                  <CheckBoxInputLabel>Nhớ tôi</CheckBoxInputLabel>
                </RememberMeCheckBox>
              </RememberMeCheckboxContainer>
              <ForgotPasswordContainer>
                <ForgotPassword to="forgot-password">
                  Quên mật khẩu?
                </ForgotPassword>
              </ForgotPasswordContainer>
              <ClearFix></ClearFix>
            </CheckBoxAndForgetPassword>

            <SubmitButton
              type="button"
              value={loading ? "Loading..." : "Đăng nhập"}
              onClick={handleLogin}
              disabled={loading}
            ></SubmitButton>
            <HaveAccountText>
              Chưa có tài khoản?
              <span>
                <LinkToLoginPage to="/sign-up">Đăng ký</LinkToLoginPage>
              </span>
            </HaveAccountText>
            <ErrorNotification>1</ErrorNotification>
          </SignUpForm>
        </SignUpSection>
      </SignUpSectionContainer>
    </>
  );
};

export default Login;
