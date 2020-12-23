import styled from "styled-components";

import { FiSend } from "react-icons/fi";

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
  RatingBox,
  Name,
} from "../AccommodationDetail/AccommodationDetail.elements";

export const ChatContentContainer = styled(InformationCard)`
  height: 550px;
  overflow-y: auto;
margin-bottom: 1rem;
  position: relative;
`;
export const ChatTextInput = styled(FormTextInput)`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ChatTextInputContainer = styled.div`

  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0px;
  right: 10px;
  left: 16px;
`;

export const OtherUserTextBlock = styled.div``;

export const SendIcon = styled(FiSend)`
  position: absolute;
  right: 15px;
  bottom: 10px;
`;

export const NameUser = styled(Name)`
color: ${({isAdmin}) => (isAdmin ? "red" : "#274abb")}
`;
