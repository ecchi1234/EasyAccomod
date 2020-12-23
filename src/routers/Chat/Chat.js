import React from "react";
import { IconContext } from "react-icons/lib";

import { Button } from "../../assets/style/globalStyle";
import { LeftMenu } from "../../components";

import {
  AccommodDetailDescContent,
  Row,
  AccommodDetailReviewInnerContent,
  ReviewAuthorAvatarSection,
  ReviewAuthorImage,
  Top,
  Middle,
  Bottom,
  ReviewInformation,
  Name,
  RatingBox,
  RatingBoxContainer,
  RatingIcon,
} from "../AccommodationDetail/AccommodationDetail.elements";

import {
  AccommodationsPagination,
  AccommodationsPaginationNavigation,
  NavigationPageItem,
} from "../Accommodations/Accommodations.elements";

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
  DeleteButton,
  DeleteIcon,
  FavoriteHouseImage,
  FavoriteHouseLocation,
  FavoriteHouseName,
  FavoriteItemImageContainer,
  FullStarRatingIcon,
  LinkContainer,
  RatingItem,
  RatingItemNumberReview,
  TableColumn,
  TableHeadingCell,
  TableResponsive,
  ActionColumn,
  EmptyStarRatingIcon,
  TableRow,
} from "../FavouriteList/FavouriteList.elements";

import {
  ChatContentContainer,
  ChatTextInput,
  ChatTextInputContainer,
  NameUser,
  SendIcon,
} from "./Chat.elements";
import { ChatIcon } from "../../components/LeftMenu/LeftMenu.elements";

const Chat = () => {
  let data = [
    {
      userId: 1,
      content: "Hello",
      time: "23/12/2020",
    },

    {
      userId: 2,
      content: "Hi",
      time: "23/12/2020",
    },
  ];
  return (
    <>
      <ProfileScreen>
        <ProfileWrapper>
          <Row>
            <LeftMenuWrapper>
              <LeftMenuContainer>
                <LeftMenu route="chat"></LeftMenu>
              </LeftMenuContainer>
            </LeftMenuWrapper>
            <ContentSection>
              <ChatContentContainer>
                <Row>
                  <AccommodDetailReviewInnerContent>
                    <ReviewAuthorAvatarSection>
                      <ReviewAuthorImage
                        src={
                          require("../../assets/img/testimonials/ts-1.jpg")
                            .default
                        }
                      ></ReviewAuthorImage>
                    </ReviewAuthorAvatarSection>
                    <ReviewInformation>
                      <Top>
                        <NameUser isAdmin={false}>Ecchi Sama</NameUser>
                      </Top>
                      <Middle>2 phút trước</Middle>
                      <Bottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras aliquam, quam congue dictum luctus, lacus magna
                        congue ante, in finibus dui sapien eu dolor. Integer
                        tincidunt suscipit erat, nec laoreet ipsum vestibulum
                        sed.
                      </Bottom>
                    </ReviewInformation>
                  </AccommodDetailReviewInnerContent>

                  <AccommodDetailReviewInnerContent>
                    <ReviewAuthorAvatarSection>
                      <ReviewAuthorImage
                        src={
                          require("../../assets/img/testimonials/ts-2.jpg")
                            .default
                        }
                      ></ReviewAuthorImage>
                    </ReviewAuthorAvatarSection>
                    <ReviewInformation>
                      <Top>
                        <NameUser isAdmin={true}>Admin</NameUser>
                      </Top>
                      <Middle>2 phút trước</Middle>
                      <Bottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras aliquam, quam congue dictum luctus, lacus magna
                        congue ante, in finibus dui sapien eu dolor. Integer
                        tincidunt suscipit erat, nec laoreet ipsum vestibulum
                        sed.
                      </Bottom>
                    </ReviewInformation>
                  </AccommodDetailReviewInnerContent>

                  <AccommodDetailReviewInnerContent>
                    <ReviewAuthorAvatarSection>
                      <ReviewAuthorImage
                        src={
                          require("../../assets/img/testimonials/ts-1.jpg")
                            .default
                        }
                      ></ReviewAuthorImage>
                    </ReviewAuthorAvatarSection>
                    <ReviewInformation>
                      <Top>
                        <NameUser isAdmin={false}>Ecchi Sama</NameUser>
                      </Top>
                      <Middle>2 phút trước</Middle>
                      <Bottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras aliquam, quam congue dictum luctus, lacus magna
                        congue ante, in finibus dui sapien eu dolor. Integer
                        tincidunt suscipit erat, nec laoreet ipsum vestibulum
                        sed.
                      </Bottom>
                    </ReviewInformation>
                  </AccommodDetailReviewInnerContent>

                  <AccommodDetailReviewInnerContent>
                    <ReviewAuthorAvatarSection>
                      <ReviewAuthorImage
                        src={
                          require("../../assets/img/testimonials/ts-2.jpg")
                            .default
                        }
                      ></ReviewAuthorImage>
                    </ReviewAuthorAvatarSection>
                    <ReviewInformation>
                      <Top>
                        <NameUser isAdmin={true}>Admin</NameUser>
                      </Top>
                      <Middle>2 phút trước</Middle>
                      <Bottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras aliquam, quam congue dictum luctus, lacus magna
                        congue ante, in finibus dui sapien eu dolor. Integer
                        tincidunt suscipit erat, nec laoreet ipsum vestibulum
                        sed.
                      </Bottom>
                    </ReviewInformation>
                  </AccommodDetailReviewInnerContent>

                  <AccommodDetailReviewInnerContent>
                    <ReviewAuthorAvatarSection>
                      <ReviewAuthorImage
                        src={
                          require("../../assets/img/testimonials/ts-1.jpg")
                            .default
                        }
                      ></ReviewAuthorImage>
                    </ReviewAuthorAvatarSection>
                    <ReviewInformation>
                      <Top>
                        <NameUser isAdmin={false}>Ecchi Sama</NameUser>
                      </Top>
                      <Middle>2 phút trước</Middle>
                      <Bottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras aliquam, quam congue dictum luctus, lacus magna
                        congue ante, in finibus dui sapien eu dolor. Integer
                        tincidunt suscipit erat, nec laoreet ipsum vestibulum
                        sed.
                      </Bottom>
                    </ReviewInformation>
                  </AccommodDetailReviewInnerContent>

                  <AccommodDetailReviewInnerContent>
                    <ReviewAuthorAvatarSection>
                      <ReviewAuthorImage
                        src={
                          require("../../assets/img/testimonials/ts-2.jpg")
                            .default
                        }
                      ></ReviewAuthorImage>
                    </ReviewAuthorAvatarSection>
                    <ReviewInformation>
                      <Top>
                        <NameUser isAdmin={true}>Admin</NameUser>
                      </Top>
                      <Middle>2 phút trước</Middle>
                      <Bottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras aliquam, quam congue dictum luctus, lacus magna
                        congue ante, in finibus dui sapien eu dolor. Integer
                        tincidunt suscipit erat, nec laoreet ipsum vestibulum
                        sed.
                      </Bottom>
                    </ReviewInformation>
                  </AccommodDetailReviewInnerContent>
                </Row>
              </ChatContentContainer>
              <ChatTextInputContainer>
                <ChatTextInput placeholder="Điền tin nhắn...."></ChatTextInput>

                <div>
                  <Button>Gửi</Button>
                </div>
              </ChatTextInputContainer>
            </ContentSection>
          </Row>
        </ProfileWrapper>
      </ProfileScreen>
    </>
  );
};

export default Chat;
