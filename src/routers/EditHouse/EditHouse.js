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
  const [hired, setHired] = React.useState(false);
  const statusRef = React.useRef();
  React.useEffect(() => {
    handleGetAllPostByOwner();
  }, []);
  const handleGetAllPostByOwner = () => {
    setLoading(true);
    axios
      .get("https://localhost:5000/api/Post/getallforowner", {
        withCredentials: true,
      })
      .then((response) => {
        setHouseArray(() => {
          setHouseArray(response.data);
          setHired(response.data.hired);
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
  };

  const handleEditStatus = (id, value) => {
    axios({
      url: `https://localhost:5000/api/Post/updatestatus?postId=${id}&hired=${value}`,
      method: "PUT",
      withCredentials: true,
    })
      .then((res) => {
        handleGetAllPostByOwner();
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                  <ExtendTimeSection
                    postExtend={postSelect}
                    goBack={handleMoveToExtend}
                  />
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
                                  {/* <DeleteButton>
                                    <StatusValue isRented={house.hired}>
                                      Chưa thuê
                                    </StatusValue>
                                    <EditStatusIcon></EditStatusIcon>
                                  </DeleteButton> */}
                                  <select
                                    ref={statusRef}
                                    id={house.postId}
                                    value={house.hired}
                                    onChange={(e) => {
                                      handleEditStatus(
                                        house.postId,
                                        e.target.value
                                      );
                                    }}
                                  >
                                    <option value={true}>Đã thuê</option>
                                    <option value={false}>Chưa thuê</option>
                                  </select>
                                </TableColumn>

                                <TableColumn>
                                  <Link to={`/edit-information/${house.postId}`}>
                                    {" "}
                                    <EditButton
                                      disabled={
                                        house.postStatus === 3 ? true : false
                                      }
                                      canEdit={
                                        house.postStatus === 3 ? false : true
                                      }
                                    >
                                      Chỉnh sửa
                                    </EditButton>
                                  </Link>

                                  <ExtendButton
                                    onClick={() => {
                                      setPostSelect(house.postId);
                                      handleMoveToExtend();
                                    }}
                                  >
                                    Gia hạn
                                  </ExtendButton>
                                </TableColumn>
                              </TableRow>
                            );
                          })}
                        </tbody>
                      </TableResponsive>
                    ) : (
                      "Bạn chưa có bài post nào!"
                    )}
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
