import React from "react";
import { IconContext } from "react-icons/lib";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/style/customSlider.css";
import Slider from "react-slick";
import { useParams } from "react-router-dom";

import axios from "axios";

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
  RatingIconEmpty,
  LikeButton,
} from "./AccommodationDetail.elements";

const AccommodationDetail = () => {
  const { productId } = useParams();
  const [postInformation, setPostInformation] = React.useState({});
  const [listComment, setListComment] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [star, setStar] = React.useState(0);
  const starRef1 = React.useRef();
  const starRef2 = React.useRef();
  const starRef3 = React.useRef();
  const starRef4 = React.useRef();
  const starRef5 = React.useRef();
  const [isReport, setIsReport] = React.useState(false);
  const [isComment, setIsComment] = React.useState(false);

  const [comment, setComment] = React.useState("");
  const [report, setReport] = React.useState("");
  const [user, setUser] = React.useState({});
  const commentRef = React.useRef();
  const reportRef = React.useRef();
  const handleSetUpPage = () => {
    setLoading(true);
    axios
      .get(`https://localhost:5000/api/Post/view?postId=${productId}`, {
        withCredentials: true,
      })
      .then((res) => {
        setPostInformation(res.data);
        return axios.get(
          `https://localhost:5000/api/Comment/getbypostid?postId=${productId}`,
          {
            withCredentials: true,
          }
        );
      })
      .then((res) => {
        setListComment(res.data);
        return axios.get(`https://localhost:5000/api/User/getbyaccessId`, {
          withCredentials: true,
        });
      })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleViewHouse = () => {
    axios
      .get(`https://localhost:5000/api/Post/view?postId=${productId}`, {
        withCredentials: true,
      })
      .then((res) => {
        setPostInformation(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  React.useEffect(() => {
    handleSetUpPage();
  }, []);

  const handleGetComment = () => {
    axios
      .get(
        `https://localhost:5000/api/Comment/getbypostid?postId=${productId}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setListComment(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleAddComment = () => {
    axios
      .post(
        `https://localhost:5000/api/Comment/add?postId=${productId}`,
        {
          title: "string",
          star: star,
          reviewContent: comment,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setIsComment(true);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleAddReport = () => {
    axios
      .post(
        `https://localhost:5000/api/Report/add`,
        {
          reason: report,
          userName: JSON.parse(localStorage.getItem("user")).userName,
          postId: productId,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setIsReport(true);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleGetUserInformation = () => {
    axios
      .get(`https://localhost:5000/api/User/getbyaccessId`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleLikePost = () => {
    setLoading(true);
    axios({
      url: `https://localhost:5000/api/Post/like?postId=${productId}`,
      method: "PUT",
      withCredentials: true,
    })
      .then((res) => {
        setLoading(false);
        handleSetUpPage();
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return isLoading ? (
    <div>Loading....</div>
  ) : (
    <div>
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
                      {`Nhà trọ ${postInformation.street}`}
                      <AccommodDetailTag>
                        {postInformation.hired ? "Đã thuê" : "Cho thuê"}
                      </AccommodDetailTag>
                      <IconContext.Provider value={{ size: 25 }}>
                        <LikeButton onClick={() => handleLikePost()}>
                          <AccommodDetailLikeButtonIcon></AccommodDetailLikeButtonIcon>
                        </LikeButton>
                      </IconContext.Provider>
                    </AccommodDetailTitle>

                    <AccommodDetailStatistic>
                      <AccommodDetailLikeCount>
                        <AccommodDetailLikeIcon></AccommodDetailLikeIcon>
                        <AccommodDetailLikeValue>
                          {postInformation.totalLike}
                        </AccommodDetailLikeValue>
                      </AccommodDetailLikeCount>
                      <AccommodDetailSeeCount>
                        <AccommodDetailSeeIcon></AccommodDetailSeeIcon>
                        <AccommodDetailSeeValue>
                          {postInformation.totalView}
                        </AccommodDetailSeeValue>
                      </AccommodDetailSeeCount>
                    </AccommodDetailStatistic>
                  </AccommodDetailHeadingLeft>
                </AccommodDetailHeadingWrap>
              </AccommodDetailHeadingSection>
              {/** một số hình ảnh về nhà trọ */}
              <AccommodDetailImage>
                <AccommodDetailImageTitle>
                  Thư viện ảnh
                </AccommodDetailImageTitle>
                <AccommodDetailImageContent>
                  <Slider {...settings}>
                    {postInformation.images.split(";").map((e, index) => {
                      if (
                        index ===
                        postInformation.images.split(";").length - 1
                      ) {
                        return null;
                      }
                      return (
                        <AccommodImageItemContainer>
                          <AccommodImageItem
                            src={
                              require(`C:/Users/Ngoc Chi/Desktop/btl-web/easy-accomod-backend/EasyAccomod/EasyAccomod.FrontendApi/${e}`)
                                .default
                            }
                          ></AccommodImageItem>
                        </AccommodImageItemContainer>
                      );
                    })}
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
                    <ListItemInfor>
                      {postInformation.roomCategoryId === 1
                        ? "Nhà trọ"
                        : postInformation.roomCategoryId === 2
                        ? "Chung cư mini"
                        : postInformation.roomCategoryId === 3
                        ? "Nhà nguyên căn"
                        : postInformation.roomCategoryId === 4
                        ? "Chung cư"
                        : ""}
                    </ListItemInfor>
                  </ListItem>

                  <ListItem>
                    <ListItemLabel>Số phòng:</ListItemLabel>
                    <ListItemInfor>{postInformation.rooms}</ListItemInfor>
                  </ListItem>

                  <ListItem>
                    <ListItemLabel>Giá cả:</ListItemLabel>
                    <ListItemInfor>{`${postInformation.price} đ/tháng`}</ListItemInfor>
                  </ListItem>

                  <ListItem>
                    <ListItemLabel>Diện tích:</ListItemLabel>
                    <ListItemInfor>
                      {postInformation.area} mét vuông
                    </ListItemInfor>
                  </ListItem>

                  <ListItem>
                    <ListItemLabel>Chung chủ:</ListItemLabel>
                    <ListItemInfor>Có</ListItemInfor>
                  </ListItem>

                  <ListItem>
                    <ListItemLabel>Giá điện:</ListItemLabel>
                    <ListItemInfor>
                      {postInformation.infrastructure.elecPrice}
                    </ListItemInfor>
                  </ListItem>

                  <ListItem>
                    <ListItemLabel>Giá nước:</ListItemLabel>
                    <ListItemInfor>
                      {postInformation.infrastructure.waterPrice}
                    </ListItemInfor>
                  </ListItem>

                  <ListItem>
                    <ListItemLabel>Bếp:</ListItemLabel>
                    <ListItemInfor>
                      {postInformation.infrastructure.kitchen === 1
                        ? "Khép kín"
                        : postInformation.infrastructure.kitchen === 2
                        ? "Chung"
                        : "Không nấu ăn"}
                    </ListItemInfor>
                  </ListItem>

                  <ListItem>
                    <ListItemLabel>Nhà tắm:</ListItemLabel>
                    <ListItemInfor>
                      {postInformation.infrastructure.bath
                        ? "Khép kín"
                        : "Chung"}
                    </ListItemInfor>
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
                  {postInformation.infrastructure.airCond ? (
                    <ListItem>
                      <IconContext.Provider value={{ size: "1.5rem" }}>
                        <ListItemIcon></ListItemIcon>
                      </IconContext.Provider>
                      <ListItemAmenities>Điều hòa</ListItemAmenities>
                    </ListItem>
                  ) : null}

                  {postInformation.infrastructure.fridge ? (
                    <ListItem>
                      <IconContext.Provider value={{ size: "1.5rem" }}>
                        <ListItemIcon></ListItemIcon>
                      </IconContext.Provider>
                      <ListItemAmenities>Tủ lạnh</ListItemAmenities>
                    </ListItem>
                  ) : null}

                  {postInformation.infrastructure.waterHeater ? (
                    <ListItem>
                      <IconContext.Provider value={{ size: "1.5rem" }}>
                        <ListItemIcon></ListItemIcon>
                      </IconContext.Provider>
                      <ListItemAmenities>Nóng lạnh</ListItemAmenities>
                    </ListItem>
                  ) : null}

                  {postInformation.infrastructure.balcony ? (
                    <ListItem>
                      <IconContext.Provider value={{ size: "1.5rem" }}>
                        <ListItemIcon></ListItemIcon>
                      </IconContext.Provider>
                      <ListItemAmenities>Ban công</ListItemAmenities>
                    </ListItem>
                  ) : null}
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
                          {postInformation.addressNearBy.education
                            .split(";")
                            .map((e, index) => {
                              if (
                                index ===
                                postInformation.addressNearBy.education.split(
                                  ";"
                                ).length -
                                  1
                              ) {
                                return null;
                              }
                              return (
                                <NearbyListItem>
                                  <NearbyListItemContent>
                                    {e}
                                  </NearbyListItemContent>
                                </NearbyListItem>
                              );
                            })}
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
                          {postInformation.addressNearBy.medical
                            .split(";")
                            .map((e, index) => {
                              if (
                                index ===
                                postInformation.addressNearBy.medical.split(";")
                                  .length -
                                  1
                              ) {
                                return null;
                              }
                              return (
                                <NearbyListItem>
                                  <NearbyListItemContent>
                                    {e}
                                  </NearbyListItemContent>
                                </NearbyListItem>
                              );
                            })}
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
                          {postInformation.addressNearBy.busStation
                            .split(";")
                            .map((e, index) => {
                              if (
                                index ===
                                postInformation.addressNearBy.busStation.split(
                                  ";"
                                ).length -
                                  1
                              ) {
                                return null;
                              }
                              return (
                                <NearbyListItem>
                                  <NearbyListItemContent>
                                    {e}
                                  </NearbyListItemContent>
                                </NearbyListItem>
                              );
                            })}
                        </NearbyList>
                      </NearbyInfo>
                    </Column>
                  </Row>
                </AccommodDetailNearbyContent>
              </AccommodDetailNearby>
              <AccommodDetailMap>
                <InformationCardTitle>Địa chỉ</InformationCardTitle>
                <div>{`${postInformation.street}, ${postInformation.commune}, ${postInformation.district}, ${postInformation.city}`}</div>
                <br></br>
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
                  {`${listComment.length} Nhận xét`}
                </AccommodDetailReviewTitle>
                <AccommodDetailReviewContent>
                  {listComment.map((e) => {
                    return (
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
                            <Name>{e.userName}</Name>
                            <RatingBox>
                              <RatingBoxContainer>
                                {e.star === 5 ? (
                                  <>
                                    <RatingIcon></RatingIcon>
                                    <RatingIcon></RatingIcon>
                                    <RatingIcon></RatingIcon>
                                    <RatingIcon></RatingIcon>
                                    <RatingIcon></RatingIcon>
                                  </>
                                ) : e.star === 4 ? (
                                  <>
                                    <RatingIcon></RatingIcon>
                                    <RatingIcon></RatingIcon>
                                    <RatingIcon></RatingIcon>
                                    <RatingIcon></RatingIcon>
                                    <RatingIconEmpty></RatingIconEmpty>
                                  </>
                                ) : e.star === 3 ? (
                                  <>
                                    <RatingIcon></RatingIcon>
                                    <RatingIcon></RatingIcon>
                                    <RatingIcon></RatingIcon>
                                    <RatingIconEmpty></RatingIconEmpty>
                                    <RatingIconEmpty></RatingIconEmpty>
                                  </>
                                ) : e.star === 2 ? (
                                  <>
                                    <RatingIcon></RatingIcon>
                                    <RatingIcon></RatingIcon>
                                    <RatingIconEmpty></RatingIconEmpty>
                                    <RatingIconEmpty></RatingIconEmpty>
                                    <RatingIconEmpty></RatingIconEmpty>
                                  </>
                                ) : e.star === 1 ? (
                                  <>
                                    <RatingIcon></RatingIcon>
                                    <RatingIconEmpty></RatingIconEmpty>
                                    <RatingIconEmpty></RatingIconEmpty>
                                    <RatingIconEmpty></RatingIconEmpty>
                                    <RatingIconEmpty></RatingIconEmpty>
                                  </>
                                ) : (
                                  <>
                                    <RatingIconEmpty></RatingIconEmpty>
                                    <RatingIconEmpty></RatingIconEmpty>
                                    <RatingIconEmpty></RatingIconEmpty>
                                    <RatingIconEmpty></RatingIconEmpty>
                                    <RatingIconEmpty></RatingIconEmpty>
                                  </>
                                )}
                              </RatingBoxContainer>
                            </RatingBox>
                          </Top>
                          <Middle>2 phút trước</Middle>
                          <Bottom>{e.content}</Bottom>
                        </ReviewInformation>
                      </AccommodDetailReviewInnerContent>
                    );
                  })}
                </AccommodDetailReviewContent>
              </AccommodDetailReview>
              <AccommodDetailAddComment>
                <InformationCardTitle>Thêm nhận xét</InformationCardTitle>
                {localStorage.getItem("token") ? (
                  isComment ? (
                    <div>
                      Bình luận đã được gửi đi và sẽ sớm được phê duyệt.
                    </div>
                  ) : (
                    <>
                      <AccommodDetailAddCommentContent>
                        <LeaveRatingTitle>
                          Đánh giá sao tại đây
                        </LeaveRatingTitle>
                        <RatingRow>
                          <StarToRateContainer>
                            <ClearFix></ClearFix>
                            <StarToRate>
                              <InputRating
                                type="radio"
                                name="rating"
                                id="rating-1"
                                value={1}
                                ref={starRef1}
                                onChange={() => {
                                  setStar(6 - starRef1.current.value);
                                }}
                              ></InputRating>
                              <StarLabel htmlFor="rating-1">
                                <StarLabelIcon></StarLabelIcon>
                              </StarLabel>

                              <InputRating
                                type="radio"
                                name="rating"
                                id="rating-2"
                                value={2}
                                ref={starRef2}
                                onChange={() => {
                                  setStar(6 - starRef2.current.value);
                                }}
                              ></InputRating>
                              <StarLabel htmlFor="rating-2">
                                <StarLabelIcon></StarLabelIcon>
                              </StarLabel>

                              <InputRating
                                type="radio"
                                name="rating"
                                id="rating-3"
                                value={3}
                                ref={starRef3}
                                onChange={() => {
                                  setStar(6 - starRef3.current.value);
                                }}
                              ></InputRating>
                              <StarLabel htmlFor="rating-3">
                                <StarLabelIcon></StarLabelIcon>
                              </StarLabel>

                              <InputRating
                                type="radio"
                                name="rating"
                                id="rating-4"
                                value={4}
                                ref={starRef4}
                                onChange={() => {
                                  setStar(6 - starRef4.current.value);
                                }}
                              ></InputRating>
                              <StarLabel htmlFor="rating-4">
                                <StarLabelIcon></StarLabelIcon>
                              </StarLabel>

                              <InputRating
                                type="radio"
                                name="rating"
                                id="rating-5"
                                value={5}
                                ref={starRef5}
                                onChange={() => {
                                  setStar(6 - starRef5.current.value);
                                }}
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
                            <div>
                              <>
                                <FormGroupContainer>
                                  <FormGroup>
                                    <ReviewTextInput
                                      type="text"
                                      name="username"
                                      placeholder="Username"
                                      required
                                      value={user.userName}
                                    ></ReviewTextInput>
                                  </FormGroup>
                                </FormGroupContainer>

                                <TextAreaContainer>
                                  <TextArea
                                    placeholder="Bình luận của bạn..."
                                    ref={commentRef}
                                    onChange={() => {
                                      setComment(commentRef.current.value);
                                    }}
                                    required
                                  ></TextArea>
                                </TextAreaContainer>

                                <SubmitButton
                                  onClick={() => handleAddComment()}
                                >
                                  Đăng nhận xét
                                </SubmitButton>
                              </>
                            </div>
                          </ReviewFormContainer>
                        </Row>
                      </AccommodDetailAddCommentContent>
                    </>
                  )
                ) : (
                  <div>Bạn phải đăng nhập để bình luận!</div>
                )}
              </AccommodDetailAddComment>
              <AccommodDetailAddComment>
                <InformationCardTitle>Báo cáo bài đăng</InformationCardTitle>
                <AccommodDetailAddCommentContent>
                  <Row>
                    <ReviewFormContainer>
                      <div>
                        {localStorage.getItem("token") ? (
                          isReport ? (
                            <div>
                              Báo cáo bài đăng đã được gửi đi và sẽ được xem
                              xét.
                            </div>
                          ) : (
                            <>
                              <TextAreaContainer>
                                <TextArea
                                  placeholder="Lý do báo cáo..."
                                  ref={reportRef}
                                  onChange={() => {
                                    setReport(reportRef.current.value);
                                  }}
                                  required
                                ></TextArea>
                              </TextAreaContainer>

                              <SubmitButton onClick={() => handleAddReport()}>
                                Báo cáo
                              </SubmitButton>
                            </>
                          )
                        ) : (
                          <div>Bạn phải đăng nhập để báo cáo bài đăng!</div>
                        )}
                      </div>
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
                          <AgentName>{postInformation.fullNameOwner}</AgentName>
                          <AgentOtherInformation>Chủ trọ</AgentOtherInformation>
                        </AgentBasicInformationSection>
                        <AgentContactInformationSection>
                          <ContactListItem>
                            <ContactPhoneIcon></ContactPhoneIcon>
                            <ContactPhoneText>
                              {postInformation.contact}
                            </ContactPhoneText>
                          </ContactListItem>

                          <ContactListItem>
                            <ContactEmailIcon></ContactEmailIcon>
                            <ContactEmailText>
                              {postInformation.emailOwner}
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
    </div>
  );
};

export default AccommodationDetail;
