import React from "react";
import { IconContext } from "react-icons/lib";
import axios from "axios";

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
  TableRow,
} from "./FavouriteList.elements";

const FavouriteList = () => {
  const [favouriteList, setFavourite] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const handleGetFavoList = () => {
    axios
      .get("https://localhost:5000/api/Post/getfavourite", {
        withCredentials: true,
      })
      .then((res) => {
        setLoading(false);
        setFavourite(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  React.useEffect(() => {
    handleGetFavoList();
  }, []);
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
                  {isLoading ? (
                    <div>Loading....</div>
                  ) : favouriteList.length === 0 ? (
                    <div>Bạn chưa thích bài đăng nào!</div>
                  ) : (
                    <>
                      {" "}
                      <thead>
                        <TableRow>
                          <TableHeadingCell p="pl-2">
                            Top nhà trọ
                          </TableHeadingCell>
                          <TableHeadingCell p="p-0"></TableHeadingCell>

                          <TableHeadingCell></TableHeadingCell>
                        </TableRow>
                      </thead>
                      <tbody>
                        {favouriteList.map((e, index) => {
                          return (
                            <TableRow key={e.postId}>
                              <FavoriteItemImageContainer>
                                <LinkContainer>
                                  <FavoriteHouseImage
                                    src={
                                      require(`C:/Users/Ngoc Chi/Desktop/btl-web/easy-accomod-backend/EasyAccomod/EasyAccomod.FrontendApi/${
                                        e.images.split(";")[0]
                                      }`).default
                                    }
                                  ></FavoriteHouseImage>
                                </LinkContainer>
                              </FavoriteItemImageContainer>
                              <TableColumn>
                                <LinkContainer
                                  to={`/product-detail/${e.postId}`}
                                >
                                  <FavoriteHouseName>
                                    {`Nhà trọ ${e.street}`}
                                  </FavoriteHouseName>
                                </LinkContainer>
                                <FavoriteHouseLocation>
                                  {`${e.street}, ${e.district}`}
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
                                    {`(${e.totalLike} đánh giá)`}
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
                            </TableRow>
                          );
                        })}
                      </tbody>
                    </>
                  )}
                </TableResponsive>
              </InformationCard>
            </ContentSection>
          </Row>
        </ProfileWrapper>
      </ProfileScreen>
    </>
  );
};

export default FavouriteList;
