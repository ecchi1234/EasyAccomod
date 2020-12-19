import React, { useState } from "react";

import { IconContext } from "react-icons/lib";

import {
  FaBed,
  FaBath,
  FaRegObjectGroup,
  FaWarehouse,
  FaUser,
  FaRegCalendarAlt,
} from "react-icons/fa";

import {
  AccommodationsScreen,
  AccommodationsWrapper,
  AccommodationsHeaderSection,
  AccommodationsContentSection,
  AccommodationsListContainer,
  AccommodationsList,
  AccommodationsPagination,
  AccommodationsRightSidebar,
  AccommodationsFilter,
  AccommodationsFilterTitle,
  AccommodationsFilterForm,
  AccommodationsFilterSelect,
  AccommodationsFilterInput,
  AccommodationsFilterButton,
  AccommodationsHeaderText,
  AccommodationsHeaderTextContainer,
  AccommodationsContentContainer,
  AccommodationsContentRow,
  AccommodationsListHeadingBlock,
  Left,
  Right,
  AccommodationsItemCol,
  AccommodationsFilterInputGroup,
  AccommodationsSelectOption,
  AccommodationsFilterLabelInput,
  AccommodationsFilterCheckbox,
  AccommodationsCheckboxGroup,
  AccommodationsCheckboxLabel,
  AccommodationsPaginationNavigation,
  NavigationPageItem,
} from "./Accommodations.elements";

import {
  PricingCardInfo,
  PricingCardImageHeading,
  PricingCardInfoWrapper,
  PricingCardInfoDetails,
  PricingCardInfoItemDesc,
  PricingCardInfoItem,
  PricingCardInfoTitle,
  PricingCardInfoLocation,
  PricingCardInfoLocationIcon,
  PricingCardInfoSubTitle,
  PriceProperties,
  HouseCost,
  LikeIcon,
  PropertyFooter,
  PropertyOwner,
  PropertyOwnerName,
  PropertyTimeStart,
  PropertyTimeStartDesc,
} from "../../components/ListProperties/ListProperties.elements";

import { PricingCard } from "./Accommodations.elements";

const Accommodations = () => {
  const [listAccommod, setListAccommod] = useState([
    {
      title: "Nhà siêu cấp VIP",
      time: "2 phút trước",
      author: "Linda",
      location: "144 Xuân Thủy",
      price: "100,000",
    },
    {
      title: "Nhà siêu cấp VIP",
      time: "2 phút trước",
      author: "Linda",
      location: "144 Xuân Thủy",
      price: "100,000",
    },
    {
      title: "Nhà siêu cấp VIP",
      time: "2 phút trước",
      author: "Linda",
      location: "144 Xuân Thủy",
      price: "100,000",
    },
    {
      title: "Nhà siêu cấp VIP",
      time: "2 phút trước",
      author: "Linda",
      location: "144 Xuân Thủy",
      price: "100,000",
    },
    {
      title: "Nhà siêu cấp VIP",
      time: "2 phút trước",
      author: "Linda",
      location: "144 Xuân Thủy",
      price: "100,000",
    },
    {
      title: "Nhà siêu cấp VIP",
      time: "2 phút trước",
      author: "Linda",
      location: "144 Xuân Thủy",
      price: "100,000",
    },
  ]);
  const [hoverLike, setHoverLike] = useState(true);
  return (
    <>
      <AccommodationsScreen>
        <AccommodationsWrapper>
          <AccommodationsHeaderSection>
            <AccommodationsHeaderTextContainer>
              <AccommodationsHeaderText>
                Danh sách nhà trọ
              </AccommodationsHeaderText>
            </AccommodationsHeaderTextContainer>
          </AccommodationsHeaderSection>
          <AccommodationsContentSection>
            <AccommodationsContentContainer>
              <AccommodationsContentRow>
                <AccommodationsListContainer>
                  <AccommodationsListHeadingBlock>
                    <Left>Danh sách</Left>

                    <Right>
                      <option value={1}>Giá từ cao đến thấp</option>
                      <option value={2}>Giá từ thấp đến cao</option>
                    </Right>
                  </AccommodationsListHeadingBlock>
                  <AccommodationsList>
                    {listAccommod.map((e, index) => {
                      return (
                        <AccommodationsItemCol key={index}>
                          <PricingCard to="/product-detail">
                            <PricingCardImageHeading
                              src={
                                require(`../../assets/img/feature-properties/fp-${
                                  index + 1
                                }.jpg`).default
                              }
                            ></PricingCardImageHeading>
                            <PricingCardInfo>
                              <PricingCardInfoWrapper>
                                <PricingCardInfoTitle to="/product-detail">
                                  {e.title}
                                </PricingCardInfoTitle>
                                <PricingCardInfoSubTitle>
                                  <IconContext.Provider
                                    value={{ color: "#18ba60", size: "1rem" }}
                                  >
                                    <PricingCardInfoLocationIcon></PricingCardInfoLocationIcon>
                                  </IconContext.Provider>
                                  <PricingCardInfoLocation>
                                    {e.location}
                                  </PricingCardInfoLocation>
                                </PricingCardInfoSubTitle>
                                <IconContext.Provider
                                  value={{ color: "#4b59f7", size: "1rem" }}
                                >
                                  <PricingCardInfoDetails>
                                    <PricingCardInfoItem>
                                      <FaBed />
                                      <PricingCardInfoItemDesc>
                                        6 Bedrooms
                                      </PricingCardInfoItemDesc>
                                    </PricingCardInfoItem>

                                    <PricingCardInfoItem>
                                      <FaBath />
                                      <PricingCardInfoItemDesc>
                                        3 Bathrooms
                                      </PricingCardInfoItemDesc>
                                    </PricingCardInfoItem>

                                    <PricingCardInfoItem>
                                      <FaRegObjectGroup />
                                      <PricingCardInfoItemDesc>
                                        720 sq ft
                                      </PricingCardInfoItemDesc>
                                    </PricingCardInfoItem>

                                    <PricingCardInfoItem>
                                      <FaWarehouse />
                                      <PricingCardInfoItemDesc>
                                        2 Garages
                                      </PricingCardInfoItemDesc>
                                    </PricingCardInfoItem>
                                  </PricingCardInfoDetails>
                                </IconContext.Provider>
                                <PriceProperties>
                                  <HouseCost>{`$ ${e.price}`}</HouseCost>
                                  <IconContext.Provider
                                    value={{
                                      color: hoverLike ? "#e54242" : "#666",
                                      size: "1rem",
                                    }}
                                  >
                                    <LikeIcon />
                                  </IconContext.Provider>
                                </PriceProperties>
                                <PropertyFooter>
                                  <IconContext.Provider
                                    value={{ color: "#666", size: "1rem" }}
                                  >
                                    <PropertyOwner>
                                      <FaUser />
                                      <PropertyOwnerName>
                                        {e.author}
                                      </PropertyOwnerName>
                                    </PropertyOwner>
                                    <PropertyTimeStart>
                                      <FaRegCalendarAlt />
                                      <PropertyTimeStartDesc>
                                        {e.time}
                                      </PropertyTimeStartDesc>
                                    </PropertyTimeStart>
                                  </IconContext.Provider>
                                </PropertyFooter>
                              </PricingCardInfoWrapper>
                            </PricingCardInfo>
                          </PricingCard>
                        </AccommodationsItemCol>
                      );
                    })}
                  </AccommodationsList>
                </AccommodationsListContainer>

                <AccommodationsRightSidebar>
                  <AccommodationsFilter>
                    <AccommodationsFilterTitle>
                      Tìm kiếm nhà trọ
                    </AccommodationsFilterTitle>
                    <AccommodationsFilterForm>
                      <AccommodationsFilterInputGroup>
                        <AccommodationsFilterLabelInput>
                          Địa chỉ
                        </AccommodationsFilterLabelInput>
                        <AccommodationsFilterSelect>
                          <AccommodationsSelectOption value={0}>
                            Thành phố
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={1}>
                            Hồ Chí Minh
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={2}>
                            Đà Nẵng
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={3}>
                            Thanh Hóa
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={4}>
                            HƯng Yên
                          </AccommodationsSelectOption>
                        </AccommodationsFilterSelect>

                        <AccommodationsFilterSelect>
                          <AccommodationsSelectOption value={0}>
                            Quận/huyện
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={1}>
                            Thanh Xuân
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={2}>
                            Ba Đình
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={3}>
                            Cầu Giấy
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={4}>
                            Tây Hồ
                          </AccommodationsSelectOption>
                        </AccommodationsFilterSelect>

                        <AccommodationsFilterSelect>
                          <AccommodationsSelectOption value={0}>
                            Đường
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={1}>
                            Nguyễn Trãi
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={2}>
                            Nguyễn Tuân
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={3}>
                            Nguyễn Huy Tưởng
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={4}>
                            Lê Duẩn
                          </AccommodationsSelectOption>
                        </AccommodationsFilterSelect>

                        <AccommodationsFilterSelect>
                          <AccommodationsSelectOption value={0}>
                            Phường
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={1}>
                            Thanh Xuân Trung
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={2}>
                            Dịch Vọng Hậu
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={3}>
                            Mai Dịch
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={4}>
                            Ô Chợ Dừa
                          </AccommodationsSelectOption>
                        </AccommodationsFilterSelect>
                      </AccommodationsFilterInputGroup>

                      <AccommodationsFilterInputGroup>
                        <AccommodationsFilterLabelInput>
                          Loại phòng
                        </AccommodationsFilterLabelInput>
                        <AccommodationsFilterSelect>
                          <AccommodationsSelectOption value={0}>
                            Loại phòng
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={1}>
                            Phòng trọ
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={2}>
                            Chung cư mini
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={3}>
                            Nhà nguyên căn
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={4}>
                            Chung cư nguyên căn
                          </AccommodationsSelectOption>
                        </AccommodationsFilterSelect>
                      </AccommodationsFilterInputGroup>
                      <AccommodationsFilterInputGroup>
                        <AccommodationsFilterLabelInput>
                          Diện tích
                        </AccommodationsFilterLabelInput>
                        <AccommodationsFilterInput></AccommodationsFilterInput>
                      </AccommodationsFilterInputGroup>
                      <AccommodationsFilterInputGroup>
                        <AccommodationsFilterLabelInput>
                          Giá tiền
                        </AccommodationsFilterLabelInput>
                        <AccommodationsFilterInput
                          placeholder={"Giá cao nhất"}
                        ></AccommodationsFilterInput>
                        <AccommodationsFilterInput
                          placeholder={"Giá nhỏ nhất"}
                        ></AccommodationsFilterInput>
                      </AccommodationsFilterInputGroup>

                      <AccommodationsFilterInputGroup>
                        <AccommodationsFilterLabelInput>
                          Cơ sở vật chất
                        </AccommodationsFilterLabelInput>
                        <AccommodationsCheckboxGroup>
                          <AccommodationsFilterCheckbox
                            type={"checkbox"}
                          ></AccommodationsFilterCheckbox>
                          <AccommodationsCheckboxLabel>
                            Điều hòa
                          </AccommodationsCheckboxLabel>
                        </AccommodationsCheckboxGroup>

                        <AccommodationsCheckboxGroup>
                          <AccommodationsFilterCheckbox
                            type={"checkbox"}
                          ></AccommodationsFilterCheckbox>
                          <AccommodationsCheckboxLabel>
                            Máy lạnh
                          </AccommodationsCheckboxLabel>
                        </AccommodationsCheckboxGroup>

                        <AccommodationsCheckboxGroup>
                          <AccommodationsFilterCheckbox
                            type={"checkbox"}
                          ></AccommodationsFilterCheckbox>
                          <AccommodationsCheckboxLabel>
                            Vệ sinh khép kín
                          </AccommodationsCheckboxLabel>
                        </AccommodationsCheckboxGroup>

                        <AccommodationsCheckboxGroup>
                          <AccommodationsFilterCheckbox
                            type={"checkbox"}
                          ></AccommodationsFilterCheckbox>
                          <AccommodationsCheckboxLabel>
                            Không chung chủ
                          </AccommodationsCheckboxLabel>
                        </AccommodationsCheckboxGroup>

                        <AccommodationsFilterSelect>
                          <AccommodationsSelectOption value={0}>
                            Bếp
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={1}>
                            Khu bếp riêng
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={2}>
                            Khu bếp chung
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={3}>
                            Không nấu ăn
                          </AccommodationsSelectOption>
                        </AccommodationsFilterSelect>
                      </AccommodationsFilterInputGroup>
                      <AccommodationsFilterInputGroup>
                        <AccommodationsFilterLabelInput>
                          Địa điểm ở gần
                        </AccommodationsFilterLabelInput>
                        <AccommodationsFilterSelect>
                          <AccommodationsSelectOption value={0}>
                            Địa điểm
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={1}>
                            Trường đại học
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={2}>
                            Bệnh viện
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={3}>
                            Siêu thị
                          </AccommodationsSelectOption>
                          <AccommodationsSelectOption value={4}>
                            Chợ
                          </AccommodationsSelectOption>
                        </AccommodationsFilterSelect>
                      </AccommodationsFilterInputGroup>

                      <AccommodationsFilterButton>
                        Tìm kiếm
                      </AccommodationsFilterButton>
                    </AccommodationsFilterForm>
                  </AccommodationsFilter>
                </AccommodationsRightSidebar>
              </AccommodationsContentRow>
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
            </AccommodationsContentContainer>
          </AccommodationsContentSection>
        </AccommodationsWrapper>
      </AccommodationsScreen>
    </>
  );
};

export default Accommodations;
