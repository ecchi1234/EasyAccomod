import React from "react";
import { IconContext } from "react-icons/lib";

import { Button } from "../../assets/style/globalStyle";
import { LeftMenu } from "../../components";

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
  Row,
  InformationCard,
  InformationCardTitle,
  RatingBox,
} from "../AccommodationDetail/AccommodationDetail.elements";
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
} from "./FavouriteList.elements";

const FavouriteList = () => {
  return (
    <>
      <ProfileScreen>
        <ProfileWrapper>
          <Row>
            <LeftMenuWrapper>
              <LeftMenuContainer>
                <LeftMenu route="favorite"></LeftMenu>
              </LeftMenuContainer>
            </LeftMenuWrapper>
            <ContentSection>
              <InformationCard>
                <InformationCardTitle>Danh sách</InformationCardTitle>
                <TableResponsive>
                  <thead>
                    <tr>
                      <TableHeadingCell p="pl-2">Top nhà trọ</TableHeadingCell>
                      <TableHeadingCell p="p-0" colSpan={2}></TableHeadingCell>

                      <TableHeadingCell></TableHeadingCell>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <FavoriteItemImageContainer>
                        <LinkContainer>
                          <FavoriteHouseImage
                            src={
                              require("../../assets/img/feature-properties/fp-1.jpg")
                                .default
                            }
                          ></FavoriteHouseImage>
                        </LinkContainer>
                      </FavoriteItemImageContainer>
                      <TableColumn>
                        <LinkContainer to="/product-detail">
                          <FavoriteHouseName>Nhà trọ số 1</FavoriteHouseName>
                        </LinkContainer>
                        <FavoriteHouseLocation>
                          144 Xuân Thủy
                        </FavoriteHouseLocation>
                        <RatingBox>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItemNumberReview>
                            (6 đánh giá)
                          </RatingItemNumberReview>
                        </RatingBox>
                      </TableColumn>
                      <ActionColumn>
                        <DeleteButton>
                          <IconContext.Provider value={{ size: 20 }}>
                            <DeleteIcon></DeleteIcon>
                          </IconContext.Provider>
                        </DeleteButton>
                      </ActionColumn>
                    </tr>

                    <tr>
                      <FavoriteItemImageContainer>
                        <LinkContainer>
                          <FavoriteHouseImage
                            src={
                              require("../../assets/img/feature-properties/fp-2.jpg")
                                .default
                            }
                          ></FavoriteHouseImage>
                        </LinkContainer>
                      </FavoriteItemImageContainer>
                      <TableColumn>
                        <LinkContainer to="/product-detail">
                          <FavoriteHouseName>Nhà trọ số 1</FavoriteHouseName>
                        </LinkContainer>
                        <FavoriteHouseLocation>
                          144 Xuân Thủy
                        </FavoriteHouseLocation>
                        <RatingBox>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItemNumberReview>
                            (6 đánh giá)
                          </RatingItemNumberReview>
                        </RatingBox>
                      </TableColumn>
                      <ActionColumn>
                        <DeleteButton>
                          <IconContext.Provider value={{ size: 20 }}>
                            <DeleteIcon></DeleteIcon>
                          </IconContext.Provider>
                        </DeleteButton>
                      </ActionColumn>
                    </tr>

                    <tr>
                      <FavoriteItemImageContainer>
                        <LinkContainer>
                          <FavoriteHouseImage
                            src={
                              require("../../assets/img/feature-properties/fp-3.jpg")
                                .default
                            }
                          ></FavoriteHouseImage>
                        </LinkContainer>
                      </FavoriteItemImageContainer>
                      <TableColumn>
                        <LinkContainer to="/product-detail">
                          <FavoriteHouseName>Nhà trọ số 1</FavoriteHouseName>
                        </LinkContainer>
                        <FavoriteHouseLocation>
                          144 Xuân Thủy
                        </FavoriteHouseLocation>
                        <RatingBox>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItemNumberReview>
                            (6 đánh giá)
                          </RatingItemNumberReview>
                        </RatingBox>
                      </TableColumn>
                      <ActionColumn>
                        <DeleteButton>
                          <IconContext.Provider value={{ size: 20 }}>
                            <DeleteIcon></DeleteIcon>
                          </IconContext.Provider>
                        </DeleteButton>
                      </ActionColumn>
                    </tr>

                    <tr>
                      <FavoriteItemImageContainer>
                        <LinkContainer>
                          <FavoriteHouseImage
                            src={
                              require("../../assets/img/feature-properties/fp-4.jpg")
                                .default
                            }
                          ></FavoriteHouseImage>
                        </LinkContainer>
                      </FavoriteItemImageContainer>
                      <TableColumn>
                        <LinkContainer to="/product-detail">
                          <FavoriteHouseName>Nhà trọ số 1</FavoriteHouseName>
                        </LinkContainer>
                        <FavoriteHouseLocation>
                          144 Xuân Thủy
                        </FavoriteHouseLocation>
                        <RatingBox>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <EmptyStarRatingIcon></EmptyStarRatingIcon>
                          </RatingItem>
                          <RatingItemNumberReview>
                            (6 đánh giá)
                          </RatingItemNumberReview>
                        </RatingBox>
                      </TableColumn>
                      <ActionColumn>
                        <DeleteButton>
                          <IconContext.Provider value={{ size: 20 }}>
                            <DeleteIcon></DeleteIcon>
                          </IconContext.Provider>
                        </DeleteButton>
                      </ActionColumn>
                    </tr>

                    <tr>
                      <FavoriteItemImageContainer>
                        <LinkContainer>
                          <FavoriteHouseImage
                            src={
                              require("../../assets/img/feature-properties/fp-5.jpg")
                                .default
                            }
                          ></FavoriteHouseImage>
                        </LinkContainer>
                      </FavoriteItemImageContainer>
                      <TableColumn>
                        <LinkContainer to="/product-detail">
                          <FavoriteHouseName>Nhà trọ số 1</FavoriteHouseName>
                        </LinkContainer>
                        <FavoriteHouseLocation>
                          144 Xuân Thủy
                        </FavoriteHouseLocation>
                        <RatingBox>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItem>
                            <FullStarRatingIcon></FullStarRatingIcon>
                          </RatingItem>
                          <RatingItemNumberReview>
                            (6 đánh giá)
                          </RatingItemNumberReview>
                        </RatingBox>
                      </TableColumn>
                      <ActionColumn>
                        <DeleteButton>
                          <IconContext.Provider value={{ size: 20 }}>
                            <DeleteIcon></DeleteIcon>
                          </IconContext.Provider>
                        </DeleteButton>
                      </ActionColumn>
                    </tr>
                  </tbody>
                </TableResponsive>
                <AccommodationsPaginationNavigation>
                <AccommodationsPagination>
                  <li>
                    <NavigationPageItem to="/" first>Prev</NavigationPageItem>
                  </li>
                  <li>
                    <NavigationPageItem to="/" active>1</NavigationPageItem>
                  </li>
                  <li>
                    <NavigationPageItem to="/">2</NavigationPageItem>
                  </li>
                  <li>
                    <NavigationPageItem to="/">3</NavigationPageItem>
                  </li>
                  <li>
                    <NavigationPageItem to="/">4</NavigationPageItem>
                  </li>
                  <li>
                    <NavigationPageItem to="/" last>Next</NavigationPageItem>
                  </li>
                </AccommodationsPagination>
              </AccommodationsPaginationNavigation>
              </InformationCard>
            </ContentSection>
          </Row>
        </ProfileWrapper>
      </ProfileScreen>
    </>
  );
};

export default FavouriteList;
