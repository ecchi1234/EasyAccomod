import React from "react";

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
} from "../SignUp/SignUp.elements";

import {
  Row,
  InformationCard,
  InformationCardTitle,
} from "../AccommodationDetail/AccommodationDetail.elements";

const LogOut = (props) => {
  const { state, dispatch } = React.useContext(AuthContext);

  // handle log out

  const handleLogOut = () => {
    axios
      .get("https://localhost:5000/api/Login/signout")
      .then(() => {
        console.log("sign-out!");
        dispatch({
          type: "LOGOUT",
        });
        props.history.push("/");
      })
      .catch((error) => {
        console.log("something error");
      });
  };
  return (
    <>
      <ProfileScreen>
        <ProfileWrapper>
          <Row>
            <LeftMenuWrapper>
              <LeftMenuContainer>
                <LeftMenu route="log-out"></LeftMenu>
              </LeftMenuContainer>
            </LeftMenuWrapper>
            <ContentSection>
              <InformationCard>
                <InformationCardTitle>Thoát</InformationCardTitle>
                <div>
                  <Button onClick={handleLogOut}>Đăng xuất</Button>
                </div>
              </InformationCard>
            </ContentSection>
          </Row>
        </ProfileWrapper>
      </ProfileScreen>
    </>
  );
};

export default LogOut;
