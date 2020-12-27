import React, { useState } from "react";

import axios from "axios";
// import hooks
import { useFormInput } from "../../utils/hooks";

import { checkEmpty } from "../../utils/input_function";

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
  SelectTextInput,
} from "./SignUp.elements";

import {
  AccommodationsScreen,
  AccommodationsWrapper,
  AccommodationsHeaderSection,
  AccommodationsHeaderText,
  AccommodationsHeaderTextContainer,
} from "../Accommodations/Accommodations.elements";

import { ClearFix } from "../AccommodationDetail/AccommodationDetail.elements";
import { checkLogin } from "../../services/authorize";

const SignUp = (props) => {
  // select if choose renter of owner
  const [roleSelect, setRoleSelect] = React.useState(1);
  // reference to select input
  const setRoleRef = React.useRef();
  const username = useFormInput("");
  const password = useFormInput("");
  const lastname = useFormInput("");
  const firstname = useFormInput("");
  const confirmpass = useFormInput("");
  const email = useFormInput("");
  const phone = useFormInput("");
  const address = useFormInput("");
  const identitynumber = useFormInput("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // error for each input
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [identityError, setIdentityError] = useState("");
  // handle button click of sign up form if sign up as renter
  const handleSignUpRenter = () => {
    setError(null);
    setLoading(true);
    axios
      .post("https://localhost:5000/api/User/registerrenter", {
        username: username.value,
        password: password.value,
        confirmPassword: confirmpass.value,
        firstName: firstname.value,
        lastName: lastname.value,
        phone: phone.value,
        email: email.value,
        address: address.value,
        identityNumber: identitynumber.value,
      })
      .then((response) => {
        console.log(response);
        setLoading(false);
        props.history.push("/login");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
        console.log(error);
      });
  };

  // handle button click of sign up form
  const handleSignUpOwner = () => {
    setError(null);
    setLoading(true);
    axios
      .post("https://localhost:5000/api/User/register", {
        username: username.value,
        password: password.value,
        confirmPassword: confirmpass.value,
        firstName: firstname.value,
        lastName: lastname.value,
        phone: phone.value,
        email: email.value,
        address: address.value,
        identityNumber: identitynumber.value,
      })
      .then((response) => {
        console.log(response);
        setLoading(false);
        props.history.push("/login");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
        console.log(error);
      });
  };

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
              <FormTextInput
                type="text"
                {...lastname}
                onBlur={() => {
                  if (checkEmpty(lastname.value)) {
                    setNameError("Bạn phải điền trường này!");
                  } else {
                    setNameError("");
                  }
                }}
              />
              <ErrorNotification>{nameError}</ErrorNotification>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Họ của bạn</FormLabel>
              <FormTextInput
                type="text"
                {...firstname}
                onBlur={() => {
                  if (checkEmpty(firstname.value)) {
                    setNameError("Bạn phải điền trường này!");
                  } else {
                    setNameError("");
                  }
                }}
              ></FormTextInput>
              <ErrorNotification>{nameError}</ErrorNotification>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Username</FormLabel>
              <FormTextInput
                type="text"
                {...username}
                onBlur={() => {
                  if (checkEmpty(username.value)) {
                    setUsernameError("Bạn phải điền trường này!");
                  } else {
                    setUsernameError("");
                  }
                }}
              ></FormTextInput>
              <ErrorNotification>{usernameError}</ErrorNotification>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Mật khẩu</FormLabel>
              <FormTextInput
                type="password"
                {...password}
                onBlur={() => {
                  if (checkEmpty(password.value)) {
                    setPasswordError("Bạn phải điền trường này!");
                  } else {
                    setPasswordError("");
                  }
                }}
              ></FormTextInput>
              <ErrorNotification>{passwordError}</ErrorNotification>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Xác nhận lại mật khẩu</FormLabel>
              <FormTextInput
                type="password"
                {...confirmpass}
                onBlur={() => {
                  if (checkEmpty(confirmpass.value)) {
                    setConfirmPasswordError("Bạn phải điền trường này!");
                  } else {
                    setConfirmPasswordError("");
                  }
                }}
              ></FormTextInput>
              <ErrorNotification>{confirmPasswordError}</ErrorNotification>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Email</FormLabel>
              <FormTextInput
                type="text"
                {...email}
                onBlur={() => {
                  if (checkEmpty(email.value)) {
                    setEmailError("Bạn phải điền trường này!");
                  } else {
                    setEmailError("");
                  }
                }}
              ></FormTextInput>
              <ErrorNotification>{emailError}</ErrorNotification>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Số điện thoại</FormLabel>
              <FormTextInput
                type="text"
                {...phone}
                onBlur={() => {
                  if (checkEmpty(phone.value)) {
                    setPhoneError("Bạn phải điền trường này!");
                  } else {
                    setPhoneError("");
                  }
                }}
              ></FormTextInput>
              <ErrorNotification>{phoneError}</ErrorNotification>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Địa chỉ thường trú</FormLabel>
              <FormTextInput
                type="address"
                {...address}
                onBlur={() => {
                  if (checkEmpty(address.value)) {
                    setAddressError("Bạn phải điền trường này!");
                  } else {
                    setAddressError("");
                  }
                }}
              ></FormTextInput>
              <ErrorNotification>{addressError}</ErrorNotification>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Số căn cước công dân</FormLabel>
              <FormTextInput
                type="text"
                {...identitynumber}
                onBlur={() => {
                  if (checkEmpty(identitynumber.value)) {
                    setIdentityError("Bạn phải điền trường này!");
                  } else {
                    setIdentityError("");
                  }
                }}
              ></FormTextInput>
              <ErrorNotification>{identityError}</ErrorNotification>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Bạn muốn đăng ký để?</FormLabel>
              <SelectTextInput
                value={roleSelect}
                ref={setRoleRef}
                onChange={(e) => {
                  setRoleSelect(e.target.value);
                }}
              >
                <option value={1}>Tìm chỗ trọ</option>
                <option value={2}>Đăng tin phòng trọ</option>
              </SelectTextInput>
            </SignUpFormGroup>

            <ClearFix></ClearFix>

            <SubmitButton
              type="button"
              value={loading ? "Loading..." : "Đăng ký ngay"}
              onClick={() => {
                console.log(roleSelect);
                if (roleSelect === 1) {
                  handleSignUpRenter();
                  console.log(roleSelect);
                } else if (roleSelect === 2) {
                  handleSignUpOwner();
                }
              }}
              disabled={loading}
            ></SubmitButton>
            <HaveAccountText>
              Đã có tài khoản?
              <span>
                <LinkToLoginPage to="/login">Đăng nhập</LinkToLoginPage>
              </span>
            </HaveAccountText>
            <ErrorNotification>{error}</ErrorNotification>
          </SignUpForm>
        </SignUpSection>
      </SignUpSectionContainer>
    </>
  );
};

export default SignUp;
