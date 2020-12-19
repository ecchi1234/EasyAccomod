import styled from "styled-components";

import { ImLocation } from "react-icons/im";

import {
  FaHeart,
  FaStar,
  FaCheckSquare,
  FaRegCheckSquare,
  FaGraduationCap,
  FaBriefcaseMedical,
  FaCar,
  FaBookMedical,
  FaPhoneAlt,
} from "react-icons/fa";

import { IoEye, IoMail } from "react-icons/io5";

// các component dùng chung sẽ để ở trên đầu
export const InformationCard = styled.div`
  padding: 1.5rem !important;
  background: #fff;
  border: 1px solid #eaeff5;
  box-shadow: 0 0 10px 1px rgba(71, 85, 95, 0.08);
  margin-bottom: 30px !important;
  position: relative;
`;

export const InformationCardTitle = styled.h5`
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 1.5rem !important;
  font-size: 1.25rem;
  line-height: 1.1;
  margin-top: 0;

  &::after {
    color: #274abb;
    display: block;
    height: 3px;
    font-weight: bold;
    background-color: #274abb;
    content: " ";
    width: 50px;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const AccommodDetailScreen = styled.section`
  padding: 6rem 0 !important;
  background: #f7f7f7;
`;

export const AccommodDetailWrap = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 100%;

  @media screen and (min-width: 576px) {
    width: 540px;
  }

  @media screen and (min-width: 768px) {
    width: 720px;
  }

  @media screen and (min-width: 992px) {
    width: 960px;
  }

  @media screen and (min-width: 1200px) {
    width: 1140px;
  }
`;

export const AccommodDetailContent = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  flex-wrap: wrap;
`;

export const AccommodDetailLeftCol = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media screen and (min-width: 992px) {
    flex: 0 0 calc(100% / 1.5);
    max-width: calc(100% / 1.5);
  }
`;

export const AccommodDetailHeadingSection = styled.section`
  padding: 60px 0 55px 0;
  background: #f7f7f7;
  padding-top: 0 !important;
`;

export const AccommodDetailHeadingWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AccommodDetailHeadingLeft = styled.div``;

export const AccommodDetailHeadingRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const AccommodDetailTitle = styled.h3`
  font-size: 28px;
  line-height: 34px;
  font-weight: 600;
  color: #222;
  text-transform: capitalize !important;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 0.5rem;
  margin-top: 0;
`;

export const AccommodDetailTag = styled.span`
  font-size: 14px;
  background: #274abb;
  color: #fff;
  border: 1px solid #fff;
  padding: 5px 15px;
  border-radius: 50px;
  top: -3px;
  margin-left: 0.5rem;
  position: relative;
  line-height: 34px;
  font-weight: 600;
  text-transform: capitalize !important;
  font-family: "Montserrat", sans-serif;
`;

export const AccommodDetailAddToLike = styled.button``;

export const AccommodDetailLikeButtonIcon = styled(FaHeart)`
  margin-left: 10px;
  vertical-align: middle;
  &:hover {
    cursor: pointer;
    color: #ff385c;
  }
`;

export const AccommodDetailLocation = styled.div`
  margin-top: 0 !important;
  font-size: 17px;
  color: #666;
`;

export const AccommodDetailLocationIcon = styled(ImLocation)`
  padding-right: 0.5rem !important;
  color: #666;
  display: inline-block;
`;

export const AccommodDetailAuthor = styled.div`
  margin-top: 0 !important;
  display: flex;
  align-items: center;
`;

export const AccommodDetailAuthorIcon = styled(ImLocation)`
  font-size: 17px;
  color: #666;
  padding-right: 0.5rem !important;
  color: #666;
  display: inline-block;
`;

export const AccommodDetailAuthorName = styled.div`
  font-size: 17px;
  color: #666;
`;

export const AccommodDetailPrice = styled.h4`
  font-size: 24px;
  font-weight: 600;
  color: #274abb;
  text-transform: capitalize !important;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 0.5rem;
  margin-top: 0;
  line-height: 1.1;
`;

export const AccommodDetailStatistic = styled.div`
  margin-top: 0 !important;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #666;
`;

export const AccommodDetailLikeCount = styled.div`
  display: flex;
  align-items: center;
`;

export const AccommodDetailSeeCount = styled.div`
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
`;

export const AccommodDetailLikeIcon = styled(FaHeart)``;

export const AccommodDetailSeeIcon = styled(IoEye)``;

export const AccommodDetailLikeValue = styled.div`
  padding-left: 0.2rem;
`;

export const AccommodDetailSeeValue = styled.div`
  padding-left: 0.2rem;
`;

export const AccommodDetailDesc = styled(InformationCard)`
  border-bottom: 0px;
`;

export const AccommodDetailDescTitle = styled(InformationCardTitle)``;

export const AccommodDetailAmenitiesTitle = styled(InformationCardTitle)`
  margin-top: 3rem !important;
`;

export const AccommodDetailDescContent = styled.p`
  color: #666;
  font-weight: 400;
  margin-bottom: 1rem !important;
  line-height: 26px;
  margin-top: 0;
`;

export const AccommodDetailOtherInformation = styled(InformationCard)``;

export const AccommodDetailOtherInformationTitle = styled(
  InformationCardTitle
)``;

export const HomeList = styled.div`
  padding: 0px;
  margin: 0px;
  &::after {
    display: block;
    content: "";
    clear: both;
  }
`;

export const ListItem = styled.li`
  @media screen and (max-width: 576px) {
    width: 50%;
  }
  width: 33%;
  float: left;
  font-size: 14px;
  line-height: 36px;
  list-style: none;
  color: #0098ef;
`;
export const ListItemLabel = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #555 !important;
  margin-right: 0.25rem !important;
  line-height: 36px;
  list-style: none;
`;

export const ListItemInfor = styled.span`
  font-size: 1rem;
  color: #666 !important;
  line-height: 36px;
  list-style: none;
`;

export const ListItemIcon = styled(FaCheckSquare)`
  color: #274abb;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 5px;
  display: inline-block;
  list-style: none;
  vertical-align: sub;
`;

export const ListItemAmenities = styled(ListItemInfor)`
  color: #000 !important;
`;

export const AccommodDetailNearby = styled(InformationCard)``;

export const AccommodDetailNearbyContent = styled.div``;

export const NearbyInfo = styled.div`
  width: 33%;
  display: inline-block;

  @media screen and (max-width: 576px) {
    width: 50%;
    margin-bottom: 1.5rem !important;
  }
`;

export const NearbyTitle = styled.span`
  line-height: 16.5px;
  font-size: 13.2px;
  color: ${({ color }) => color};
  margin-bottom: 1rem !important;
  display: block !important;
`;
export const NearbyList = styled.ul`
  margin-bottom: 0 !important;
  padding-left: 0;
  list-style: none;
  margin-top: 0;
`;

export const NearbyListItem = styled.li`
  display: flex !important;
`;

export const NearbyListItemContent = styled.h6`
  font-size: 13.2px;
  font-weight: 600;
  margin-bottom: 1rem !important;
  margin-right: 0.5rem !important;
  line-height: 1.1;
  margin-top: 0;
  color: #666;
`;

export const NearbyIconEducation = styled(FaGraduationCap)`
  margin-right: 0.5rem !important;
  vertical-align: middle;
`;

export const NearbyIconHealth = styled(FaBookMedical)`
  margin-right: 0.5rem !important;
  vertical-align: middle;
`;

export const NearbyIconTransport = styled(FaCar)`
  margin-right: 0.5rem !important;
  vertical-align: middle;
`;

export const NearbyText = styled.b`
  font-size: 15.5px;
  line-height: 16.5px;
  font-weight: bolder;
  vertical-align: middle;
`;
export const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  width: 100%;
  min-height: 1px;
  @media (min-width: 992px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const AccommodDetailMap = styled(InformationCard)``;

export const AccommodDetailImage = styled.div`
  padding: 1.5rem !important;
  background: #fff;
  border: 1px solid #eaeff5;
  box-shadow: 0 0 10px 1px rgba(71, 85, 95, 0.08);
  margin-bottom: 30px !important;
  position: relative;
`;

export const AccommodDetailImageTitle = styled.h5`
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 1.5rem !important;
  font-size: 1.25rem;
  line-height: 1.1;
  margin-top: 0;

  &::after {
    color: #274abb;
    display: block;
    height: 3px;
    font-weight: bold;
    background-color: #274abb;
    content: " ";
    width: 50px;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const AccommodDetailImageContent = styled.div``;

export const AccommodImageItemContainer = styled.div``;

export const AccommodImageItem = styled.img`
  max-width: 100%;
  height: auto;
  display: inline-block;
  vertical-align: middle;
  border-style: none;
`;
// styled component for add comment
export const AccommodDetailAddComment = styled(InformationCard)``;

export const AccommodDetailAddCommentContent = styled.div``;

export const ClearFix = styled.div`
  &::after {
    display: block;
    content: "";
    clear: both;
  }
`;

export const StarToRate = styled.div`
  height: 24px;
  float: left;
`;

export const LeaveRatingTitle = styled.span`
  display: block;
  margin-top: 2.5rem;
  margin-bottom: 7px;
  font-size: 15px;
  font-weight: 400;
  color: #666;
`;

export const StarToRateContainer = styled(Column)`
  @media screen and (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const InputRating = styled.input`
  display: none;
  width: auto;
  margin-right: 5px;
  box-sizing: border-box;
  padding: 0;
`;

export const StarLabel = styled(FaStar)`
  font-size: 24px;
  float: right;
  letter-spacing: 4px;
  color: #dadada;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #ffc107;
  }
`;

export const ReviewFormContainer = styled(Column)`
  @media screen and (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const FormGroupContainer = styled(Column)`
  padding: 0;
  padding-right: 1rem;
  @media screen and (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const ReviewTextInput = styled.input`
  padding: 0.7rem;
  border: 1px solid #dddddd;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1.25;
  color: #464a4c;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border-radius: 0.25rem;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
`;

export const RatingRow = styled(Row)`
  margin-bottom: 1.5rem !important;
`;

export const TextAreaContainer = styled(ReviewFormContainer)`
  margin-bottom: 1rem;
  padding: 0;
  padding-right: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 0.7rem;
  border: 1px solid #dddddd;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1.25;
  color: #464a4c;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border-radius: 0.25rem;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  height: 130px;
  resize: vertical;
  overflow: auto;
  margin: 0;
`;

export const SubmitButton = styled.button`
  background: #274abb;
  cursor: pointer;
  font-size: 16px;
  border: none;
  transition: all 0.5s ease;
  margin-top: 0.5rem !important;
  padding: 0.75rem 1.5rem;
  border-radius: 0.3rem;
  color: #fff;
  display: inline-block;
  font-weight: normal;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  text-transform: none;
  overflow: visible;
  margin: 0;
  &:hover {
    background: #121b22;
    color: #fff;
  }
`;
export const AccommodDetailReview = styled(InformationCard)`
  margin-bottom: 0 !important;
`;

export const AccommodDetailReviewTitle = styled(InformationCardTitle)`
  margin-bottom: 3rem !important;
  font-size: 18px;
`;

export const AccommodDetailReviewContent = styled(Row)`
  /* margin-bottom: 3rem !important; */
`;

export const ReviewAuthorAvatarSection = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  width: 100%;
  min-height: 1px;
  @media screen and (min-width: 768px) {
    flex: 0 0 calc(100% / 6);
    max-width: calc(100% / 6);
  }
`;

export const ReviewAuthorImage = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-right: 2rem;
  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
`;

export const ReviewInformation = styled.div`
  padding-left: 0px;
  padding-right: 15px;
  position: relative;
  width: 100%;
  min-height: 1px;
  @media screen and (min-width: 768px) {
    flex: 0 0 calc(100% / 1.2);
    max-width: calc(100% / 1.2);
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TopWrap = styled.div``;

export const Name = styled.h5`
  color: #274abb;
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 0.5rem !important;
  line-height: 1.1;
  margin-top: 0;
`;

export const RatingBox = styled.div``;

export const RatingBoxContainer = styled.div`
  float: left;
  margin-right: 0 !important;
`;

export const RatingIcon = styled(FaStar)`
  color: #ffc107;
  display: inline-block;
`;

export const Middle = styled.p`
  margin-bottom: 1.5rem !important;
  line-height: 26px;
  margin-top: 0;
  color: #666;
`;

export const Bottom = styled.div`
  line-height: 26px;
  margin-top: 0;
  margin-bottom: 1rem;
  color: #666;
`;

export const AccommodDetailReviewInnerContent = styled(Column)`
  flex: 0 0 100%;
  max-width: 100%;
  padding-left: 0 !important;
  margin-top: 0;
  margin-bottom: 1rem;
  display: flex;
`;

export const AccommodDetailRightCol = styled.aside`
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  width: 100%;
  min-height: 1px;
  @media screen and (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media screen and (min-width: 992px) {
    flex: 0 0 calc(100% / 3);
    max-width: calc(100% / 3);
  }
`;

export const AccommodDetailRightColWrap = styled.div``;

export const AgentInformation = styled.div`
  background: #fff;
  border-radius: 6px;
  padding: 1.5rem;
  transform: translate3d(0, 0, 0);
  z-index: 90;
  margin-bottom: 0px;
  position: relative;
  border: 1px solid #eaeff5;
  box-shadow: 0 0 10px 1px rgba(71, 85, 95, 0.08);
`;

export const SideBar = styled.div``;

export const SideBarHeadingSection = styled.div`
  padding-bottom: 1.5rem;
  padding-top: 0px;
  border-bottom: 1px solid #eaeff5;
  line-height: 1.1;
`;

export const HeadingText = styled.h4`
  color: #222 !important;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  line-height: 1.1;
`;

export const SideBarContentSection = styled.div`
  padding: 1.5rem 0 0;
`;

export const SideBarContentContainer = styled.div``;

export const AgentBasicInformationSection = styled(ClearFix)`
  margin-bottom: 15px;
`;

export const AgentImage = styled.img`
  float: left;
  width: 85px;
  height: 85px;
  border: 4px solid #fff;
  margin-right: 15px;
  border-radius: 50%;
  box-shadow: 0 0 40px rgba(82, 85, 90, 0.1);
  display: inline-block;
  max-width: 100%;
  vertical-align: middle;
`;

export const AgentName = styled.h4`
  margin-top: 18px;
  font-size: 18px;
  color: #222;
  font-weight: 600;
  margin-bottom: 2px;
  font-family: "Montserrat", sans-serif;
  line-height: 1.1;
`;

export const AgentOtherInformation = styled.p`
  font-size: 15px;
  color: #666;
  font-weight: 400;
  line-height: 26px;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const AgentContactInformationSection = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const ContactListItem = styled.li`
  color: #666;
  margin-bottom: 1.2rem;
  font-weight: 400;
  font-size: 15px;
  list-style-type: none;
  display: flex;
`;

export const ContactLocationIcon = styled(ImLocation)`
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  background-color: #fff;
  color: #274abb;
  border-radius: 50%;
  font-size: 18px;
  margin-right: 10px;
  transition: all 0.3s;
  display: inline-block;
`;

export const ContactLocationText = styled.span`
  color: #666;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 15px;
`;

export const ContactPhoneIcon = styled(FaPhoneAlt)`
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  background-color: #fff;
  color: #274abb;
  border-radius: 50%;
  font-size: 18px;
  margin-right: 10px;
  transition: all 0.3s;
  display: inline-block;
`;

export const ContactPhoneText = styled.span`
  color: #666;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 15px;
`;

export const ContactEmailIcon = styled(IoMail)`
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  background-color: #fff;
  color: #274abb;
  border-radius: 50%;
  font-size: 18px;
  margin-right: 10px;
  transition: all 0.3s;
  display: inline-block;
`;

export const ContactEmailText = styled.span`
  color: #666;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 15px;
`;

// những nhà trọ mới thêm gần đầy

export const NewAccommod = styled(AgentInformation)`
  margin-top: 30px !important;
`;

export const RecentPost = styled.div`
  
`;

export const RecentMain = styled.div`
  display: flex;
  flex: 0 1 100%;
  position: relative;
  &:nth-child(2) {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
`;

export const RecentImageContainer = styled.div``;

export const RecentImage = styled.img`
  width: 90px;
  height: 70px;
  margin-right: 1rem;
  display: inline-block;
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
`;

export const RecentInfoContainer = styled.div``;
export const RecentName = styled.h6`
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  color: #222;
  font-weight: 400;
  margin-bottom: 0.5rem;
  line-height: 1.1;
  margin-top: 0;
`;

export const RecentPrice = styled.p`
  line-height: 26px;
  margin-top: 0;
  margin-bottom: 1rem;
  color: #666;
`;

export const Time = styled.div``;

export const TimeText = styled.p`
  position: absolute;
  font-size: 0.8rem;

  color: #666;
  right: 0;
  bottom: 0;
`;

export const Banner = styled.img`
display: inline-block;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
`;
