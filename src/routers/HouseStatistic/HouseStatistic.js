import React from "react";
import axios from "axios";
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
  TableRow,
  EditIcon,
} from "../FavouriteList/FavouriteList.elements";
import {
  StatisticValue,
  FavoriteCount,
  WatchCount,
  StatisticBox,
  EachStatisticContainer,
} from "./HouseStatistic.elements";

const HouseStatistic = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [houseArray, setHouseArray] = React.useState([]);
  React.useEffect(() => {
    handleGetAllPostByOwner();
  }, []);
  const handleGetAllPostByOwner = () => {
    axios
      .get("https://localhost:5000/api/Post/getallforowner", {
        withCredentials: true,
      })
      .then((response) => {
        setHouseArray(() => {
          setHouseArray(response.data);
        });
        setLoading(false);
        console.log(response.data);
        console.log(houseArray.length);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <>
      <ProfileScreen>
        <ProfileWrapper>
          <Row>
            <LeftMenuWrapper>
              <LeftMenuContainer>
                <LeftMenu route="list-house"></LeftMenu>
              </LeftMenuContainer>
            </LeftMenuWrapper>
            <ContentSection>
              <InformationCard>
                <InformationCardTitle>Danh sách</InformationCardTitle>
                {isLoading ? (
                  "Loading..."
                ) : houseArray.length > 0 ? (
                  <TableResponsive>
                    <thead>
                      <TableRow>
                        <TableHeadingCell p="pl-2">
                          Các bài đăng
                        </TableHeadingCell>
                        <TableHeadingCell p="p-0"></TableHeadingCell>
                        <TableHeadingCell>Lượt xem</TableHeadingCell>
                        <TableHeadingCell>Lượt thích</TableHeadingCell>
                        <TableHeadingCell>Truy cập nhiều</TableHeadingCell>

                        {/* <TableHeadingCell >
                        Trạng thái
                      </TableHeadingCell> */}
                      </TableRow>
                    </thead>
                    <tbody>
                      {houseArray.map((house, index) => {
                        return (
                          <TableRow key={house.postId}>
                            <FavoriteItemImageContainer>
                              <LinkContainer>
                                <FavoriteHouseImage
                                  src={
                                    require(`C:/Users/Ngoc Chi/Desktop/btl-web/easy-accomod-backend/EasyAccomod/EasyAccomod.FrontendApi/${
                                      house.images.split(";")[0]
                                    }`).default
                                  }
                                ></FavoriteHouseImage>
                              </LinkContainer>
                            </FavoriteItemImageContainer>
                            <TableColumn>
                              <LinkContainer
                                to={`/product-detail/${house.postId}`}
                              >
                                <FavoriteHouseName>
                                  Nhà trọ số 1
                                </FavoriteHouseName>
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
                            <TableColumn>{house.totalView}</TableColumn>
                            <TableColumn>{house.totalLike}</TableColumn>
                            <TableColumn>
                              <p>22/12/2020</p>
                            </TableColumn>
                          </TableRow>
                        );
                      })}
                    </tbody>
                  </TableResponsive>
                ) : (
                  "Bạn chưa đăng post nào!"
                )}

                
              </InformationCard>
            </ContentSection>
          </Row>
        </ProfileWrapper>
      </ProfileScreen>
    </>
  );
};

export default HouseStatistic;
