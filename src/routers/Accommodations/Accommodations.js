import React, { useState } from "react";

import { IconContext } from "react-icons/lib";

import axios from "axios";

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
  const handleGetAllPost = () => {
    axios
      .get("https://localhost:5000/api/Post/getall", { withCredentials: true })
      .then((res) => {
        setLoading(false);
        setListAccommod(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const [isLoading, setLoading] = React.useState(true);
  // list of accommod
  const [listAccommod, setListAccommod] = useState([]);

  const handleSearch = () => {
    setLoading(true);
    axios({
      method: "POST",
      url: "https://localhost:5000/api/Post/search",
      withCredentials: true,
      data: {
        city: city,
        district: district,
        commune: commune,
        street: street,
        addressNearBy: addressNearby,
        roomCategoryName: typeRoom,
        airCond: airCond,
        fridge: fridge,
        waterHeater: waterHeater,
        bath: bath,
        withOwner: withOwner,
        kitchen: parseInt(kitchen),
        maxPrice: parseFloat(maxPrice),
        minPrice: parseFloat(minPrice),
      },
    })
      .then((res) => {
        setListAccommod(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  // input ref
  const cityRef = React.useRef();
  const communeRef = React.useRef();
  const districtRef = React.useRef();
  const streetRef = React.useRef();
  const squareRef = React.useRef();
  const maxPriceRef = React.useRef();
  const minPriceRef = React.useRef();
  const addressNearbyRef = React.useRef();
  const airCondRef = React.useRef();
  const fridgeRef = React.useRef();
  const bathRef = React.useRef();
  const withOwnerRef = React.useRef();
  const waterHeaterRef = React.useRef();

  // input value
  const [city, setCity] = React.useState(null);
  const [commune, setCommune] = React.useState(null);
  const [district, setDistrict] = React.useState(null);
  const [street, setStreet] = React.useState(null);
  const [square, setSquare] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(0);
  const [minPrice, setMinPrice] = React.useState(0);
  const [addressNearby, setAddressNearby] = React.useState(null);
  const [kitchen, setKitchen] = React.useState(0);
  const [typeRoom, setTypeRoom] = React.useState(0);
  const [fridge, setFridge] = React.useState(false);
  const [bath, setBath] = React.useState(false);
  const [waterHeater, setWaterHeater] = React.useState(false);
  const [withOwner, setWithOwner] = React.useState(false);
  const [airCond, setAirCond] = React.useState(false);

  React.useEffect(() => {
    handleGetAllPost();
  }, []);

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
                  {isLoading ? (
                    "Loading..."
                  ) : (
                    <AccommodationsList>
                      {listAccommod.length === 0 ? (
                        <div>Không tìm thấy phòng trọ phù hợp</div>
                      ) : (
                        listAccommod.map((e, index) => {
                          return (
                            <AccommodationsItemCol key={e.postId}>
                              <PricingCard to={`/product-detail/${e.postId}`}>
                                <PricingCardImageHeading
                                  src={
                                    require(`C:/Users/Ngoc Chi/Desktop/btl-web/easy-accomod-backend/EasyAccomod/EasyAccomod.FrontendApi/${
                                      e.images.split(";")[0]
                                    }`).default
                                  }
                                ></PricingCardImageHeading>
                                <PricingCardInfo>
                                  <PricingCardInfoWrapper>
                                    <PricingCardInfoTitle
                                      to={`/product-detail/${e.postId}`}
                                    >
                                      {`Nhà trọ ${e.street}`}
                                    </PricingCardInfoTitle>
                                    <PricingCardInfoSubTitle>
                                      <IconContext.Provider
                                        value={{
                                          color: "#18ba60",
                                          size: "1rem",
                                        }}
                                      >
                                        <PricingCardInfoLocationIcon></PricingCardInfoLocationIcon>
                                      </IconContext.Provider>
                                      <PricingCardInfoLocation>
                                        {e.street}
                                      </PricingCardInfoLocation>
                                    </PricingCardInfoSubTitle>
                                    <IconContext.Provider
                                      value={{ color: "#4b59f7", size: "1rem" }}
                                    >
                                      <PricingCardInfoDetails>
                                        <PricingCardInfoItem>
                                          <FaBed />
                                          <PricingCardInfoItemDesc>
                                            {e.rooms} phòng
                                          </PricingCardInfoItemDesc>
                                        </PricingCardInfoItem>

                                        <PricingCardInfoItem>
                                          <FaBath />
                                          <PricingCardInfoItemDesc>
                                            {e.infrastructure.bath
                                              ? "Khép kín"
                                              : "Chung"}
                                          </PricingCardInfoItemDesc>
                                        </PricingCardInfoItem>

                                        <PricingCardInfoItem>
                                          <FaRegObjectGroup />
                                          <PricingCardInfoItemDesc>
                                            {`${e.area} mét vuông`}
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
                                            {e.userName}
                                          </PropertyOwnerName>
                                        </PropertyOwner>
                                        <PropertyTimeStart>
                                          <FaRegCalendarAlt />
                                          <PropertyTimeStartDesc>
                                            {e.publicTime}
                                          </PropertyTimeStartDesc>
                                        </PropertyTimeStart>
                                      </IconContext.Provider>
                                    </PropertyFooter>
                                  </PricingCardInfoWrapper>
                                </PricingCardInfo>
                              </PricingCard>
                            </AccommodationsItemCol>
                          );
                        })
                      )}
                    </AccommodationsList>
                  )}
                </AccommodationsListContainer>

                <AccommodationsRightSidebar>
                  <AccommodationsFilter>
                    <AccommodationsFilterTitle>
                      Tìm kiếm nhà trọ
                    </AccommodationsFilterTitle>
                    <div>
                      <AccommodationsFilterInputGroup>
                        <AccommodationsFilterLabelInput>
                          Địa chỉ
                        </AccommodationsFilterLabelInput>

                        <AccommodationsFilterInput
                          type="text"
                          placeholder={"Thành phố"}
                          ref={cityRef}
                          onChange={() => {
                            setCity(cityRef.current.value);
                          }}
                        ></AccommodationsFilterInput>

                        <AccommodationsFilterInput
                          type="text"
                          placeholder={"Quận/huyện"}
                          ref={districtRef}
                          onChange={() => {
                            setDistrict(districtRef.current.value);
                          }}
                        ></AccommodationsFilterInput>

                        <AccommodationsFilterInput
                          type="text"
                          placeholder={"Đường"}
                          ref={streetRef}
                          onChange={() => {
                            setStreet(streetRef.current.value);
                          }}
                        ></AccommodationsFilterInput>

                        <AccommodationsFilterInput
                          type="text"
                          placeholder={"Phường"}
                          ref={communeRef}
                          onChange={() => {
                            setCommune(communeRef.current.value);
                          }}
                        ></AccommodationsFilterInput>
                      </AccommodationsFilterInputGroup>

                      <AccommodationsFilterInputGroup>
                        <AccommodationsFilterLabelInput>
                          Loại phòng
                        </AccommodationsFilterLabelInput>
                        <AccommodationsFilterSelect
                          value={typeRoom}
                          onChange={(e) => setTypeRoom(e.target.value)}
                        >
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
                        <AccommodationsFilterInput
                          type="text"
                          placeholder={"Diện tích"}
                          ref={squareRef}
                          onChange={() => {
                            setSquare(squareRef.current.value);
                          }}
                        ></AccommodationsFilterInput>
                      </AccommodationsFilterInputGroup>
                      <AccommodationsFilterInputGroup>
                        <AccommodationsFilterLabelInput>
                          Giá tiền
                        </AccommodationsFilterLabelInput>
                        <AccommodationsFilterInput
                          type="text"
                          placeholder={"Giá cao nhất"}
                          ref={maxPriceRef}
                          onChange={() => {
                            setMaxPrice(maxPriceRef.current.value);
                          }}
                        ></AccommodationsFilterInput>
                        <AccommodationsFilterInput
                          type="text"
                          placeholder={"Giá nhỏ nhất"}
                          ref={minPriceRef}
                          onChange={() => {
                            setMinPrice(minPriceRef.current.value);
                          }}
                        ></AccommodationsFilterInput>
                      </AccommodationsFilterInputGroup>

                      <AccommodationsFilterInputGroup>
                        <AccommodationsFilterLabelInput>
                          Cơ sở vật chất
                        </AccommodationsFilterLabelInput>
                        <AccommodationsCheckboxGroup>
                          <AccommodationsFilterCheckbox
                            type={"checkbox"}
                            ref={airCondRef}
                            onChange={() => {
                              if (airCondRef.current.checked) {
                                setAirCond(true);
                              } else {
                                setAirCond(false);
                              }
                            }}
                          ></AccommodationsFilterCheckbox>
                          <AccommodationsCheckboxLabel>
                            Điều hòa
                          </AccommodationsCheckboxLabel>
                        </AccommodationsCheckboxGroup>

                        <AccommodationsCheckboxGroup>
                          <AccommodationsFilterCheckbox
                            type={"checkbox"}
                            ref={waterHeaterRef}
                            onChange={() => {
                              if (waterHeaterRef.current.checked) {
                                setWaterHeater(true);
                              } else {
                                setWaterHeater(false);
                              }
                            }}
                          ></AccommodationsFilterCheckbox>
                          <AccommodationsCheckboxLabel>
                            Nóng lạnh
                          </AccommodationsCheckboxLabel>
                        </AccommodationsCheckboxGroup>

                        <AccommodationsCheckboxGroup>
                          <AccommodationsFilterCheckbox
                            type={"checkbox"}
                            ref={fridgeRef}
                            onChange={() => {
                              if (fridgeRef.current.checked) {
                                setFridge(true);
                              } else {
                                setFridge(false);
                              }
                            }}
                          ></AccommodationsFilterCheckbox>
                          <AccommodationsCheckboxLabel>
                            Tủ lạnh
                          </AccommodationsCheckboxLabel>
                        </AccommodationsCheckboxGroup>

                        <AccommodationsCheckboxGroup>
                          <AccommodationsFilterCheckbox
                            type={"checkbox"}
                            ref={bathRef}
                            onChange={() => {
                              if (bathRef.current.checked) {
                                setBath(true);
                              } else {
                                setBath(false);
                              }
                            }}
                          ></AccommodationsFilterCheckbox>
                          <AccommodationsCheckboxLabel>
                            Vệ sinh khép kín
                          </AccommodationsCheckboxLabel>
                        </AccommodationsCheckboxGroup>

                        <AccommodationsCheckboxGroup>
                          <AccommodationsFilterCheckbox
                            type={"checkbox"}
                            ref={withOwnerRef}
                            onChange={() => {
                              if (withOwnerRef.current.checked) {
                                setWithOwner(false);
                              } else {
                                setWithOwner(true);
                              }
                            }}
                          ></AccommodationsFilterCheckbox>
                          <AccommodationsCheckboxLabel>
                            Không chung chủ
                          </AccommodationsCheckboxLabel>
                        </AccommodationsCheckboxGroup>

                        <AccommodationsFilterSelect
                          onChange={(e) => {
                            setKitchen(e.target.value);
                          }}
                        >
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
                        <AccommodationsFilterInput
                          type="text"
                          ref={addressNearbyRef}
                          onChange={() => {
                            setAddressNearby(addressNearbyRef.current.value);
                          }}
                        ></AccommodationsFilterInput>
                      </AccommodationsFilterInputGroup>

                      <AccommodationsFilterButton
                        onClick={() => {
                          handleSearch();
                        }}
                      >
                        Tìm kiếm
                      </AccommodationsFilterButton>
                    </div>
                  </AccommodationsFilter>
                </AccommodationsRightSidebar>
              </AccommodationsContentRow>
            </AccommodationsContentContainer>
          </AccommodationsContentSection>
        </AccommodationsWrapper>
      </AccommodationsScreen>
    </>
  );
};

export default Accommodations;
