import React from "react";
import axios from "axios";
import { IconContext } from "react-icons/lib";

import { Button } from "../../assets/style/globalStyle";
import { LeftMenu } from "../../components";
import { Link } from "react-router-dom";

import ExtendTimeSection from "../../components/ExtendTimeSection/ExtendTimeSection";
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
} from "../HouseStatistic/HouseStatistic.elements";
import {
  EditButton,
  EditStatusIcon,
  StatusValue,
  ExtendButton,
} from "./EditHouse.elements";

const EditHouse = () => {
  const [isExtend, setExtend] = React.useState(false);
  const [postSelect, setPostSelect] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);
  const [houseArray, setHouseArray] = React.useState([]);
  const [timeToExtend, setTimeToExtend] = React.useState(0);
  React.useEffect(() => {
    handleGetAllPostByOwner();
  }, []);
  const handleGetAllPostByOwner = () => {
    axios
      .get("https://localhost:5000/api/Post/getallforowner")
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
  
  const handleMoveToExtend = () => {
    setExtend(!isExtend);
  }
  return (
    <>
      <ProfileScreen>
        <ProfileWrapper>
          <Row>
            <LeftMenuWrapper>
              <LeftMenuContainer>
                <LeftMenu route="edit-house"></LeftMenu>
              </LeftMenuContainer>
            </LeftMenuWrapper>
            <ContentSection>
              <InformationCard>
                {isExtend ? (
                  <ExtendTimeSection postExtend={postSelect} goBack={handleMoveToExtend}/>
                ) : (
                  <>
                    <InformationCardTitle>Danh sách</InformationCardTitle>
                    {isLoading ? (
                      "Loading...."
                    ) : houseArray.length > 0 ? (
                      <TableResponsive>
                        <thead>
                          <TableRow>
                            <TableHeadingCell p="pl-2">
                              Các bài đăng
                            </TableHeadingCell>
                            <TableHeadingCell p="p-0"></TableHeadingCell>

                            <TableHeadingCell>Trạng thái</TableHeadingCell>

                            <TableHeadingCell>Hành động</TableHeadingCell>
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
                                      {`Nhà trọ ${house.street}`}
                                    </FavoriteHouseName>
                                  </LinkContainer>
                                  <FavoriteHouseLocation>
                                    {`${house.street}`}
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

                                <TableColumn>
                                  <DeleteButton>
                                    <StatusValue isRented={house.hired}>
                                      Chưa thuê
                                    </StatusValue>
                                    <EditStatusIcon></EditStatusIcon>
                                  </DeleteButton>
                                </TableColumn>

                                <TableColumn>
                                  <EditButton>Chỉnh sửa</EditButton>
                                  <ExtendButton onClick={() => 
                                    {
                                      setPostSelect(house.postId);
                                      handleMoveToExtend();
                                    }}>Gia hạn</ExtendButton>
                                </TableColumn>
                              </TableRow>
                            );
                          })}
                        </tbody>
                      </TableResponsive>
                    ) : (
                      "Bạn chưa có bài post nào!"
                    )}

                    <AccommodationsPaginationNavigation>
                      <AccommodationsPagination>
                        <li>
                          <NavigationPageItem to="/" first>
                            Prev
                          </NavigationPageItem>
                        </li>
                        <li>
                          <NavigationPageItem to="/" active>
                            1
                          </NavigationPageItem>
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
                          <NavigationPageItem to="/" last>
                            Next
                          </NavigationPageItem>
                        </li>
                      </AccommodationsPagination>
                    </AccommodationsPaginationNavigation>
                  </>
                )}
              </InformationCard>
            </ContentSection>
          </Row>
        </ProfileWrapper>
      </ProfileScreen>
    </>
  );
};

export default EditHouse;
