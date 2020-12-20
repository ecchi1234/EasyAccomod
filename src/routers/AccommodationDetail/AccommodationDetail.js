import React from "react";
import { IconContext } from "react-icons/lib";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/style/customSlider.css";
import Slider from "react-slick";

import {
  AccommodationsPagination,
  AccommodationsPaginationNavigation,
  NavigationPageItem,
} from "../Accommodations/Accommodations.elements";

import { settings } from "./Data";
import {
  AccommodDetailScreen,
  AccommodDetailWrap,
  AccommodDetailContent,
  AccommodDetailLeftCol,
  AccommodDetailRightCol,
  AccommodDetailHeadingSection,
  AccommodDetailImage,
  AccommodDetailDesc,
  AccommodDetailOtherInformation,
  AccommodDetailNearby,
  AccommodDetailMap,
  AccommodDetailReview,
  AccommodDetailAddComment,
  AccommodDetailHeadingWrap,
  AccommodDetailHeadingLeft,
  AccommodDetailHeadingRight,
  AccommodDetailTitle,
  AccommodDetailLocation,
  AccommodDetailTag,
  AccommodDetailPrice,
  AccommodDetailStatistic,
  AccommodDetailLikeCount,
  AccommodDetailSeeCount,
  AccommodDetailLikeIcon,
  AccommodDetailSeeIcon,
  AccommodDetailLikeValue,
  AccommodDetailSeeValue,
  AccommodDetailAddToLike,
  AccommodDetailLikeButtonIcon,
  AccommodDetailImageTitle,
  AccommodDetailImageContent,
  AccommodImageItemContainer,
  AccommodImageItem,
  AccommodDetailDescTitle,
  AccommodDetailDescContent,
  AccommodDetailOtherInformationTitle,
  AccommodDetailAmenitiesTitle,
  HomeList,
  ListItem,
  ListItemLabel,
  ListItemInfor,
  ListItemIcon,
  ListItemAmenities,
  InformationCardTitle,
  AccommodDetailNearbyContent,
  Row,
  Column,
  NearbyInfo,
  NearbyTitle,
  NearbyList,
  NearbyIconEducation,
  NearbyText,
  NearbyListItem,
  NearbyListItemContent,
  NearbyIconTransport,
  NearbyIconHealth,
  AccommodDetailReviewTitle,
  AccommodDetailReviewContent,
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
  AccommodDetailAddCommentContent,
  StarToRateContainer,
  StarToRate,
  ClearFix,
  LeaveRatingTitle,
  StarLabel,
  StarLabelIcon,
  InputRating,
  ReviewFormContainer,
  FormGroupContainer,
  FormGroup,
  ReviewTextInput,
  RatingRow,
  TextArea,
  TextAreaContainer,
  SubmitButton,
  AccommodDetailRightColWrap,
  AgentInformation,
  SideBar,
  SideBarHeadingSection,
  HeadingText,
  SideBarContentSection,
  SideBarContentContainer,
  AgentBasicInformationSection,
  AgentImage,
  AgentName,
  AgentContactInformationSection,
  AgentOtherInformation,
  ContactListItem,
  ContactLocationIcon,
  ContactLocationText,
  ContactPhoneIcon,
  ContactPhoneText,
  ContactEmailIcon,
  ContactEmailText,
  NewAccommod,
  RecentPost,
  RecentMain,
  RecentImageContainer,
  RecentImage,
  RecentInfoContainer,
  RecentName,
  RecentPrice,
  Time,
  TimeText,
  Banner,
} from "./AccommodationDetail.elements";

const AccommodationDetail = () => {
  return (
    <>
      <AccommodDetailScreen>
        {/** tương đương với container trong bootstrap */}
        <AccommodDetailWrap>
          {/** tương đương với row trong bootstrap */}
          <AccommodDetailContent>
            {/** đây là bắt đầu phần nội dung bao gồm các thông tin về nhà ở, bình luận, và ô bình luận */}
            <AccommodDetailLeftCol>
              {/** tiêu đề của trang thông tin về nhà trọ */}
              <AccommodDetailHeadingSection>
                <AccommodDetailHeadingWrap>
                  <AccommodDetailHeadingLeft>
                    <AccommodDetailTitle>
                      Nhà trọ siêu vip
                      <AccommodDetailTag>Cho thuê</AccommodDetailTag>
                      <IconContext.Provider value={{ size: 25 }}>
                        <AccommodDetailLikeButtonIcon></AccommodDetailLikeButtonIcon>
                      </IconContext.Provider>
                    </AccommodDetailTitle>

                    <AccommodDetailStatistic>
                      <AccommodDetailLikeCount>
                        <AccommodDetailLikeIcon></AccommodDetailLikeIcon>
                        <AccommodDetailLikeValue>1000</AccommodDetailLikeValue>
                      </AccommodDetailLikeCount>
                      <AccommodDetailSeeCount>
                        <AccommodDetailSeeIcon></AccommodDetailSeeIcon>
                        <AccommodDetailSeeValue>2000000</AccommodDetailSeeValue>
                      </AccommodDetailSeeCount>
                    </AccommodDetailStatistic>
                  </AccommodDetailHeadingLeft>

                  <AccommodDetailHeadingRight>
                    <AccommodDetailPrice>$ 100,000</AccommodDetailPrice>
                    <span style={{ color: "#666" }}>/tháng</span>
                  </AccommodDetailHeadingRight>
                </AccommodDetailHeadingWrap>
              </AccommodDetailHeadingSection>
              {/** một số hình ảnh về nhà trọ */}
              <AccommodDetailImage>
                <AccommodDetailImageTitle>
                  Thư viện ảnh
                </AccommodDetailImageTitle>
                <AccommodDetailImageContent>
                  <Slider {...settings}>
                    <AccommodImageItemContainer>
                      <AccommodImageItem
                        src={
                          require("../../assets/img/single-accommod/s-1.jpg")
                            .default
                        }
                      ></AccommodImageItem>
                    </AccommodImageItemContainer>

                    <AccommodImageItemContainer>
                      <AccommodImageItem
                        src={
                          require("../../assets/img/single-accommod/s-2.jpg")
                            .default
                        }
                      ></AccommodImageItem>
                    </AccommodImageItemContainer>

                    <AccommodImageItemContainer>
                      <AccommodImageItem
                        src={
                          require("../../assets/img/single-accommod/s-3.jpg")
                            .default
                        }
                      ></AccommodImageItem>
                    </AccommodImageItemContainer>

                    <AccommodImageItemContainer>
                      <AccommodImageItem
                        src={
                          require("../../assets/img/single-accommod/s-4.jpg")
                            .default
                        }
                      ></AccommodImageItem>
                    </AccommodImageItemContainer>

                    <AccommodImageItemContainer>
                      <AccommodImageItem
                        src={
                          require("../../assets/img/single-accommod/s-5.jpg")
                            .default
                        }
                      ></AccommodImageItem>
                    </AccommodImageItemContainer>
                  </Slider>
                </AccommodDetailImageContent>
              </AccommodDetailImage>
              {/** mô tả chi tiết của nhà trọ bằng lời */}
              <AccommodDetailDesc>
                <AccommodDetailDescTitle>Mô tả</AccommodDetailDescTitle>
                <AccommodDetailDescContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  rerum beatae consequatur, totam fugit, alias fuga aliquam quod
                  tempora a nisi esse magnam nulla quas! Error praesentium, vero
                  dolorum laborum. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Cum rerum beatae consequatur, totam fugit.
                </AccommodDetailDescContent>

                <AccommodDetailDescContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  rerum beatae consequatur, totam fugit, alias fuga aliquam quod
                  tempora a nisi esse magnam nulla quas! Error praesentium, vero
                  dolorum laborum. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Cum rerum beatae consequatur, totam fugit.
                </AccommodDetailDescContent>

                <AccommodDetailDescContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  rerum beatae consequatur, totam fugit, alias fuga aliquam quod
                  tempora a nisi esse magnam nulla quas! Error praesentium, vero
                  dolorum laborum. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Cum rerum beatae consequatur, totam fugit.
                </AccommodDetailDescContent>
              </AccommodDetailDesc>
              {/** một vài thông tin khác như số phòng, cơ sở vật chất */}
              <AccommodDetailOtherInformation>
                <AccommodDetailOtherInformationTitle>
                  Thông tin chi tiết
                </AccommodDetailOtherInformationTitle>
                <HomeList>
                  <ListItem>
                    <ListItemLabel>Loại phòng:</ListItemLabel>
                    <ListItemInfor>Phòng trọ</ListItemInfor>
                  </ListItem>

                  <ListItem>
                    <ListItemLabel>Số phòng:</ListItemLabel>
                    <ListItemInfor>1</ListItemInfor>
                  </ListItem>

                  <ListItem>
                    <ListItemLabel>Giá cả:</ListItemLabel>
                    <ListItemInfor>100,000đ/tháng</ListItemInfor>
                  </ListItem>

                  <ListItem>
                    <ListItemLabel>Diện tích:</ListItemLabel>
                    <ListItemInfor>100 mét vuông</ListItemInfor>
                  </ListItem>

                  <ListItem>
                    <ListItemLabel>Chung chủ:</ListItemLabel>
                    <ListItemInfor>Có</ListItemInfor>
                  </ListItem>

                  <ListItem>
                    <ListItemLabel>Điện nước:</ListItemLabel>
                    <ListItemInfor>Giá dân</ListItemInfor>
                  </ListItem>

                  <ListItem>
                    <ListItemLabel>Bếp:</ListItemLabel>
                    <ListItemInfor>Khu bếp riêng</ListItemInfor>
                  </ListItem>

                  <ListItem>
                    <ListItemLabel>Chỗ để xe:</ListItemLabel>
                    <ListItemInfor>Có</ListItemInfor>
                  </ListItem>
                </HomeList>
                <AccommodDetailAmenitiesTitle>
                  Tiện nghi
                </AccommodDetailAmenitiesTitle>
                <HomeList>
                  <ListItem>
                    <IconContext.Provider value={{ size: "1.5rem" }}>
                      <ListItemIcon></ListItemIcon>
                    </IconContext.Provider>
                    <ListItemAmenities>Điều hòa</ListItemAmenities>
                  </ListItem>

                  <ListItem>
                    <IconContext.Provider value={{ size: "1.5rem" }}>
                      <ListItemIcon></ListItemIcon>
                    </IconContext.Provider>
                    <ListItemAmenities>Tủ lạnh</ListItemAmenities>
                  </ListItem>

                  <ListItem>
                    <IconContext.Provider value={{ size: "1.5rem" }}>
                      <ListItemIcon></ListItemIcon>
                    </IconContext.Provider>
                    <ListItemAmenities>Bình nóng lạnh</ListItemAmenities>
                  </ListItem>

                  <ListItem>
                    <IconContext.Provider value={{ size: "1.5rem" }}>
                      <ListItemIcon></ListItemIcon>
                    </IconContext.Provider>
                    <ListItemAmenities>Máy giặt</ListItemAmenities>
                  </ListItem>

                  <ListItem>
                    <IconContext.Provider value={{ size: "1.5rem" }}>
                      <ListItemIcon></ListItemIcon>
                    </IconContext.Provider>
                    <ListItemAmenities>Ban công</ListItemAmenities>
                  </ListItem>
                </HomeList>
              </AccommodDetailOtherInformation>
              <AccommodDetailNearby>
                <InformationCardTitle>Địa điểm lân cận</InformationCardTitle>
                <AccommodDetailNearbyContent>
                  <Row>
                    <Column>
                      <NearbyInfo>
                        <NearbyTitle color="#5bc0de">
                          <IconContext.Provider value={{ size: "1rem" }}>
                            <NearbyIconEducation></NearbyIconEducation>
                          </IconContext.Provider>
                          <NearbyText>Giáo dục</NearbyText>
                        </NearbyTitle>
                        <NearbyList>
                          <NearbyListItem>
                            <NearbyListItemContent>
                              Trường Đại học Công nghệ
                            </NearbyListItemContent>
                          </NearbyListItem>

                          <NearbyListItem>
                            <NearbyListItemContent>
                              Trường Đại học Thương Mại
                            </NearbyListItemContent>
                          </NearbyListItem>

                          <NearbyListItem>
                            <NearbyListItemContent>
                              Trường Đại học Sư phạm Hà Nội
                            </NearbyListItemContent>
                          </NearbyListItem>

                          <NearbyListItem>
                            <NearbyListItemContent>
                              Trường THPT Chuyên Ngữ
                            </NearbyListItemContent>
                          </NearbyListItem>
                        </NearbyList>
                      </NearbyInfo>

                      <NearbyInfo>
                        <NearbyTitle color="#5cb85c">
                          <IconContext.Provider value={{ size: "1rem" }}>
                            <NearbyIconHealth></NearbyIconHealth>
                          </IconContext.Provider>
                          <NearbyText>Sức khỏe & Y tế</NearbyText>
                        </NearbyTitle>
                        <NearbyList>
                          <NearbyListItem>
                            <NearbyListItemContent>
                              Trường Đại học Công nghệ
                            </NearbyListItemContent>
                          </NearbyListItem>

                          <NearbyListItem>
                            <NearbyListItemContent>
                              Trường Đại học Thương Mại
                            </NearbyListItemContent>
                          </NearbyListItem>

                          <NearbyListItem>
                            <NearbyListItemContent>
                              Trường Đại học Sư phạm Hà Nội
                            </NearbyListItemContent>
                          </NearbyListItem>

                          <NearbyListItem>
                            <NearbyListItemContent>
                              Trường THPT Chuyên Ngữ
                            </NearbyListItemContent>
                          </NearbyListItem>
                        </NearbyList>
                      </NearbyInfo>

                      <NearbyInfo>
                        <NearbyTitle color="#d9534f">
                          <IconContext.Provider value={{ size: "1rem" }}>
                            <NearbyIconTransport></NearbyIconTransport>
                          </IconContext.Provider>
                          <NearbyText>Phương tiện công cộng</NearbyText>
                        </NearbyTitle>
                        <NearbyList>
                          <NearbyListItem>
                            <NearbyListItemContent>
                              Trường Đại học Công nghệ
                            </NearbyListItemContent>
                          </NearbyListItem>

                          <NearbyListItem>
                            <NearbyListItemContent>
                              Trường Đại học Thương Mại
                            </NearbyListItemContent>
                          </NearbyListItem>

                          <NearbyListItem>
                            <NearbyListItemContent>
                              Trường Đại học Sư phạm Hà Nội
                            </NearbyListItemContent>
                          </NearbyListItem>

                          <NearbyListItem>
                            <NearbyListItemContent>
                              Trường THPT Chuyên Ngữ
                            </NearbyListItemContent>
                          </NearbyListItem>
                        </NearbyList>
                      </NearbyInfo>
                    </Column>
                  </Row>
                </AccommodDetailNearbyContent>
              </AccommodDetailNearby>
              <AccommodDetailMap>
                <InformationCardTitle>Địa chỉ</InformationCardTitle>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8955429165135!2d105.78008511360125!3d21.03686519288047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4aaba3425b%3A0x8d2cc2bd70d95673!2zVFQgSOG7lyB0cuG7oyDEkMOgbyB04bqhbyB2w6AgUGjDoXQgdHJp4buDbiDEkMO0IHRo4buLIMSQ4bqhaSBo4buNYywgMTQ0IFh1w6JuIFRo4buneSwgTWFpIEThu4tjaCwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1608279207403!5m2!1svi!2s"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </AccommodDetailMap>
              <AccommodDetailReview>
                <AccommodDetailReviewTitle>
                  5 Nhận xét
                </AccommodDetailReviewTitle>
                <AccommodDetailReviewContent>
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
                        <Name>Ecchi Sama</Name>
                        <RatingBox>
                          <RatingBoxContainer>
                            <RatingIcon></RatingIcon>
                            <RatingIcon></RatingIcon>
                            <RatingIcon></RatingIcon>
                            <RatingIcon></RatingIcon>
                            <RatingIcon></RatingIcon>
                          </RatingBoxContainer>
                        </RatingBox>
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
                          require("../../assets/img/testimonials/ts-3.jpg")
                            .default
                        }
                      ></ReviewAuthorImage>
                    </ReviewAuthorAvatarSection>
                    <ReviewInformation>
                      <Top>
                        <Name>Ecchi Sama</Name>
                        <RatingBox>
                          <RatingBoxContainer>
                            <RatingIcon></RatingIcon>
                            <RatingIcon></RatingIcon>
                            <RatingIcon></RatingIcon>
                            <RatingIcon></RatingIcon>
                            <RatingIcon></RatingIcon>
                          </RatingBoxContainer>
                        </RatingBox>
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
                        <Name>Ecchi Sama</Name>
                        <RatingBox>
                          <RatingBoxContainer>
                            <RatingIcon></RatingIcon>
                            <RatingIcon></RatingIcon>
                            <RatingIcon></RatingIcon>
                            <RatingIcon></RatingIcon>
                            <RatingIcon></RatingIcon>
                          </RatingBoxContainer>
                        </RatingBox>
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
                </AccommodDetailReviewContent>
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
              </AccommodDetailReview>
              <AccommodDetailAddComment>
                <InformationCardTitle>Thêm nhận xét</InformationCardTitle>
                <AccommodDetailAddCommentContent>
                  <LeaveRatingTitle>Đánh giá sao tại đây</LeaveRatingTitle>
                  <RatingRow>
                    <StarToRateContainer>
                      <ClearFix></ClearFix>
                      <StarToRate>
                        <InputRating
                          type="radio"
                          name="rating"
                          id="rating-1"
                          value={1}
                        ></InputRating>
                        <StarLabel htmlFor="rating-1">
                          <StarLabelIcon></StarLabelIcon>
                        </StarLabel>

                        <InputRating
                          type="radio"
                          name="rating"
                          id="rating-2"
                          value={2}
                        ></InputRating>
                        <StarLabel htmlFor="rating-2">
                          <StarLabelIcon></StarLabelIcon>
                        </StarLabel>

                        <InputRating
                          type="radio"
                          name="rating"
                          id="rating-3"
                          value={3}
                        ></InputRating>
                        <StarLabel htmlFor="rating-3">
                          <StarLabelIcon></StarLabelIcon>
                        </StarLabel>

                        <InputRating
                          type="radio"
                          name="rating"
                          id="rating-4"
                          value={4}
                        ></InputRating>
                        <StarLabel htmlFor="rating-4">
                          <StarLabelIcon></StarLabelIcon>
                        </StarLabel>

                        <InputRating
                          type="radio"
                          name="rating"
                          id="rating-5"
                          value={5}
                        ></InputRating>
                        <StarLabel htmlFor="rating-5">
                          <StarLabelIcon></StarLabelIcon>
                        </StarLabel>
                      </StarToRate>
                      <ClearFix></ClearFix>
                    </StarToRateContainer>
                  </RatingRow>
                  <Row>
                    <ReviewFormContainer>
                      <form>
                        <FormGroupContainer>
                          <FormGroup>
                            <ReviewTextInput
                              type="text"
                              name="name"
                              placeholder="First Name"
                              required
                            ></ReviewTextInput>
                          </FormGroup>
                        </FormGroupContainer>

                        <FormGroupContainer>
                          <FormGroup>
                            <ReviewTextInput
                              type="text"
                              name="name"
                              placeholder="Last Name"
                              required
                            ></ReviewTextInput>
                          </FormGroup>
                        </FormGroupContainer>

                        <FormGroupContainer>
                          <FormGroup>
                            <ReviewTextInput
                              type="text"
                              name="name"
                              placeholder="Email"
                              required
                            ></ReviewTextInput>
                          </FormGroup>
                        </FormGroupContainer>

                        <TextAreaContainer>
                          <TextArea
                            placeholder="Bình luận của bạn..."
                            required
                          ></TextArea>
                        </TextAreaContainer>

                        <SubmitButton>Đăng nhận xét</SubmitButton>
                      </form>
                    </ReviewFormContainer>
                  </Row>
                </AccommodDetailAddCommentContent>
              </AccommodDetailAddComment>
              <AccommodDetailAddComment>
                <InformationCardTitle>Báo cáo bài đăng</InformationCardTitle>
                <AccommodDetailAddCommentContent>
                  <Row>
                    <ReviewFormContainer>
                      <form>
                        <TextAreaContainer>
                          <TextArea
                            placeholder="Lý do báo cáo..."
                            required
                          ></TextArea>
                        </TextAreaContainer>

                        <SubmitButton>Báo cáo</SubmitButton>
                      </form>
                    </ReviewFormContainer>
                  </Row>
                </AccommodDetailAddCommentContent>
              </AccommodDetailAddComment>
            </AccommodDetailLeftCol>
            {/** kết thúc của phần nội dung về nhà ở */}
            <AccommodDetailRightCol>
              <AccommodDetailRightColWrap>
                <SideBar>
                  <AgentInformation>
                    <SideBarHeadingSection>
                      <HeadingText>Thông tin chủ trọ</HeadingText>
                    </SideBarHeadingSection>
                    <SideBarContentSection>
                      <SideBarContentContainer>
                        <AgentBasicInformationSection>
                          <AgentImage
                            src={
                              require("../../assets/img/testimonials/ts-1.jpg")
                                .default
                            }
                          ></AgentImage>
                          <AgentName>Ecchi Sama</AgentName>
                          <AgentOtherInformation>Chủ trọ</AgentOtherInformation>
                        </AgentBasicInformationSection>
                        <AgentContactInformationSection>
                          <ContactListItem>
                            <ContactLocationIcon></ContactLocationIcon>
                            <ContactLocationText>
                              144 Xuân Thủy
                            </ContactLocationText>
                          </ContactListItem>

                          <ContactListItem>
                            <ContactPhoneIcon></ContactPhoneIcon>
                            <ContactPhoneText>
                              (+84) 913 008 335
                            </ContactPhoneText>
                          </ContactListItem>

                          <ContactListItem>
                            <ContactEmailIcon></ContactEmailIcon>
                            <ContactEmailText>
                              ecchi1234@gmail.com
                            </ContactEmailText>
                          </ContactListItem>
                        </AgentContactInformationSection>
                      </SideBarContentContainer>
                    </SideBarContentSection>
                  </AgentInformation>
                  <NewAccommod>
                    <SideBarHeadingSection>
                      <HeadingText>Bài đăng gần đây</HeadingText>
                    </SideBarHeadingSection>
                    <SideBarContentSection>
                      <SideBarContentContainer>
                        <RecentPost>
                          <RecentMain>
                            <RecentImageContainer>
                              <RecentImage
                                src={
                                  require("../../assets/img/feature-properties/fp-1.jpg")
                                    .default
                                }
                              ></RecentImage>
                            </RecentImageContainer>
                            <RecentInfoContainer>
                              <RecentName>Nhà còn 2 phòng</RecentName>
                              <RecentPrice>100 triệu/tháng</RecentPrice>
                            </RecentInfoContainer>

                            <TimeText>2 phút trước</TimeText>
                          </RecentMain>

                          <RecentMain>
                            <RecentImageContainer>
                              <RecentImage
                                src={
                                  require("../../assets/img/feature-properties/fp-2.jpg")
                                    .default
                                }
                              ></RecentImage>
                            </RecentImageContainer>
                            <RecentInfoContainer>
                              <RecentName>Nhà còn 2 phòng</RecentName>
                              <RecentPrice>100 triệu/tháng</RecentPrice>
                            </RecentInfoContainer>

                            <TimeText>2 phút trước</TimeText>
                          </RecentMain>

                          <RecentMain>
                            <RecentImageContainer>
                              <RecentImage
                                src={
                                  require("../../assets/img/feature-properties/fp-3.jpg")
                                    .default
                                }
                              ></RecentImage>
                            </RecentImageContainer>
                            <RecentInfoContainer>
                              <RecentName>Nhà còn 2 phòng</RecentName>
                              <RecentPrice>100 triệu/tháng</RecentPrice>
                            </RecentInfoContainer>

                            <TimeText>2 phút trước</TimeText>
                          </RecentMain>
                        </RecentPost>
                      </SideBarContentContainer>
                    </SideBarContentSection>
                  </NewAccommod>
                  <NewAccommod>
                    <SideBarHeadingSection>
                      <HeadingText>Đặc biệt hôm nay</HeadingText>
                    </SideBarHeadingSection>
                    <SideBarContentSection>
                      <SideBarContentContainer>
                        <Banner
                          src={
                            require("../../assets/img/single-accommod/banner.jpg")
                              .default
                          }
                        ></Banner>
                      </SideBarContentContainer>
                    </SideBarContentSection>
                  </NewAccommod>
                </SideBar>
              </AccommodDetailRightColWrap>
            </AccommodDetailRightCol>
          </AccommodDetailContent>
        </AccommodDetailWrap>
      </AccommodDetailScreen>
    </>
  );
};

export default AccommodationDetail;
