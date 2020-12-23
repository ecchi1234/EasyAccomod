import React from "react";
import { IconContext } from "react-icons/lib";

import { Button } from "../../assets/style/globalStyle";
import { LeftMenu } from "../../components";
import {Link} from "react-router-dom";

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
import { EditButton, EditStatusIcon, StatusValue, ExtendButton } from "./EditHouse.elements";

const EditHouse = () => {
  const [isExtend, setExtend] = React.useState(false);
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
                {isExtend ? (<ExtendTimeSection/>) : (<><InformationCardTitle>Danh sách</InformationCardTitle>
                <TableResponsive>
                  <thead>
                    <TableRow>
                      <TableHeadingCell p="pl-2">Các bài đăng</TableHeadingCell>
                      <TableHeadingCell p="p-0"></TableHeadingCell>
                      
                      <TableHeadingCell>Trạng thái</TableHeadingCell>
                      
                      <TableHeadingCell>Hành động</TableHeadingCell>

                      
                    </TableRow>
                  </thead>
                  <tbody>
                    <TableRow>
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
                      
                      <TableColumn>
                        <DeleteButton>
                          <StatusValue isRented={false}>Chưa thuê</StatusValue>
                          <EditStatusIcon></EditStatusIcon>
                        </DeleteButton>
                      </TableColumn>
                      
                      <TableColumn>
                        <EditButton>Chỉnh sửa</EditButton>
                        <ExtendButton>Gia hạn</ExtendButton>
                      </TableColumn>
                    </TableRow>

                    <TableRow>
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
                      
                      <TableColumn>
                        <DeleteButton>
                          <StatusValue isRented={true}>Đã thuê</StatusValue>
                          <EditStatusIcon></EditStatusIcon>
                        </DeleteButton>
                      </TableColumn>
                     
                      <TableColumn>
                        <EditButton>Chỉnh sửa</EditButton>
                        <Link><ExtendButton onClick={() => {setExtend(true)}}>Gia hạn</ExtendButton></Link>
                      </TableColumn>
                    </TableRow>

                    <TableRow>
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
                      
                      <TableColumn>
                        <DeleteButton>
                          <StatusValue isRented={false}>Chưa thuê</StatusValue>
                          <EditStatusIcon></EditStatusIcon>
                        </DeleteButton>
                      </TableColumn>
                    
                      <TableColumn>
                        <EditButton>Chỉnh sửa</EditButton>
                        <Link><ExtendButton onClick={() => {setExtend(true)}}>Gia hạn</ExtendButton></Link>
                      </TableColumn>
                    </TableRow>

                    <TableRow>
                      <FavoriteItemImageContainer>
                        <LinkContainer>
                          <FavoriteHouseImage
                            src={require("../../assets/img/raw-2.jpg").default}
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
                      
                      <TableColumn>
                        <DeleteButton>
                          <StatusValue isRented={true}>Đã thuê</StatusValue>
                          <EditStatusIcon></EditStatusIcon>
                        </DeleteButton>
                      </TableColumn>
                  
                      <TableColumn>
                        <EditButton>Chỉnh sửa</EditButton>
                        <Link><ExtendButton onClick={() => {setExtend(true)}}>Gia hạn</ExtendButton></Link>
                      </TableColumn>
                    </TableRow>
                  </tbody>
                </TableResponsive>
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
                </>)}

               
              </InformationCard>
            </ContentSection>
          </Row>
        </ProfileWrapper>
      </ProfileScreen>
    </>
  );
};

export default EditHouse;
