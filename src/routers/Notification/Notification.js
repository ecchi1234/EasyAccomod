import React from "react";
import { IconContext } from "react-icons/lib";

import { FaCheck } from "react-icons/fa";

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
} from "../FavouriteList/FavouriteList.elements";
import {
  NotificationContentSection,
  NotificationTitleConfirmedIcon,
  NotificationTitleIconRejectedIcon,
  NotificationTitleSection,
  NotificationTitleValue,
} from "./Notification.elements";

const Notification = () => {
  return (
    <>
      <ProfileScreen>
        <ProfileWrapper>
          <Row>
            <LeftMenuWrapper>
              <LeftMenuContainer>
                <LeftMenu route="notification"></LeftMenu>
              </LeftMenuContainer>
            </LeftMenuWrapper>
            <ContentSection>
              <InformationCard>
                <InformationCardTitle>Thông báo</InformationCardTitle>
                <NotificationTitleSection>
                  <NotificationTitleConfirmedIcon></NotificationTitleConfirmedIcon>
                  <NotificationTitleValue isConfirmed={true}>
                    Bài đăng "Nhà trọ số 1" đã được phê duyệt
                  </NotificationTitleValue>
                </NotificationTitleSection>
                <NotificationContentSection>
                  <div>Ngày phê duyệt: 01/01/2021</div>
                  <div>Ngày hết hạn: 01/02/2021</div>
                  <div>Số tiền cần trả: 100.000đ</div>
                  <div>
                    Qúy khách đến văn phòng Easy Accommod để nộp phí đăng bài.
                  </div>
                </NotificationContentSection>
              </InformationCard>

              <InformationCard>
                <InformationCardTitle>Thông báo</InformationCardTitle>
                <NotificationTitleSection>
                  <NotificationTitleIconRejectedIcon></NotificationTitleIconRejectedIcon>
                  <NotificationTitleValue isConfirmed={false}>
                    Bài đăng "Nhà trọ số 1" đã bị từ chối
                  </NotificationTitleValue>
                </NotificationTitleSection>

                <NotificationContentSection>
                  <div>Lý do: thông tin chưa đủ</div>
                </NotificationContentSection>
              </InformationCard>

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
            </ContentSection>
          </Row>
        </ProfileWrapper>
      </ProfileScreen>
    </>
  );
};

export default Notification;
