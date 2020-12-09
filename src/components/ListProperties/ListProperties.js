import React, { useState } from "react";
import { Button } from "../../assets/style/globalStyle";
import {
  FaBed,
  FaBath,
  FaRegObjectGroup,
  FaWarehouse,
  FaUser,
  FaRegCalendarAlt,
} from "react-icons/fa";

import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingSectionHeading,
  PricingTopSubHeading,
  PricingBottomSubHeading,
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
  PropertiesLinkContainer,
  PropertiesBtnLink,
} from "./ListProperties.elements";

function ListProperties({time}) {
  const [hoverLike, setHoverLike] = useState(true);
  const handleHoverLikeIcon = () => setHoverLike(true);
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingSectionHeading>
            <PricingTopSubHeading>{time}</PricingTopSubHeading>
            <PricingBottomSubHeading>Nhà trọ</PricingBottomSubHeading>
          </PricingSectionHeading>
          <PricingContainer>
           
          <PricingCard to="/sign-up">
              <PricingCardImageHeading
                src={
                  require("../../assets/img/feature-properties/fp-1.jpg")
                    .default
                }
              ></PricingCardImageHeading>
              <PricingCardInfo>
                <PricingCardInfoWrapper>
                  <PricingCardInfoTitle>
                    Real House Luxury Villa
                  </PricingCardInfoTitle>
                  <PricingCardInfoSubTitle>
                    <IconContext.Provider
                      value={{ color: "#18ba60", size: "1rem" }}
                    >
                      <PricingCardInfoLocationIcon></PricingCardInfoLocationIcon>
                    </IconContext.Provider>
                    <PricingCardInfoLocation>
                      Est St, 77 - Central Park South, NYC
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
                    <HouseCost>$ 230,000</HouseCost>
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
                        <PropertyOwnerName>John Doe</PropertyOwnerName>
                      </PropertyOwner>
                      <PropertyTimeStart>
                        <FaRegCalendarAlt />
                        <PropertyTimeStartDesc>
                          2 months ago
                        </PropertyTimeStartDesc>
                      </PropertyTimeStart>
                    </IconContext.Provider>
                  </PropertyFooter>
                </PricingCardInfoWrapper>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardImageHeading
                src={
                  require("../../assets/img/feature-properties/fp-2.jpg")
                    .default
                }
              ></PricingCardImageHeading>
              <PricingCardInfo>
                <PricingCardInfoWrapper>
                  <PricingCardInfoTitle>
                    Real House Luxury Villa
                  </PricingCardInfoTitle>
                  <PricingCardInfoSubTitle>
                    <IconContext.Provider
                      value={{ color: "#18ba60", size: "1rem" }}
                    >
                      <PricingCardInfoLocationIcon></PricingCardInfoLocationIcon>
                    </IconContext.Provider>
                    <PricingCardInfoLocation>
                      Est St, 77 - Central Park South, NYC
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
                    <HouseCost>$ 230,000</HouseCost>
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
                        <PropertyOwnerName>John Doe</PropertyOwnerName>
                      </PropertyOwner>
                      <PropertyTimeStart>
                        <FaRegCalendarAlt />
                        <PropertyTimeStartDesc>
                          2 months ago
                        </PropertyTimeStartDesc>
                      </PropertyTimeStart>
                    </IconContext.Provider>
                  </PropertyFooter>
                </PricingCardInfoWrapper>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardImageHeading
                src={
                  require("../../assets/img/feature-properties/fp-3.jpg")
                    .default
                }
              ></PricingCardImageHeading>
              <PricingCardInfo>
                <PricingCardInfoWrapper>
                  <PricingCardInfoTitle>
                    Real House Luxury Villa
                  </PricingCardInfoTitle>
                  <PricingCardInfoSubTitle>
                    <IconContext.Provider
                      value={{ color: "#18ba60", size: "1rem" }}
                    >
                      <PricingCardInfoLocationIcon></PricingCardInfoLocationIcon>
                    </IconContext.Provider>
                    <PricingCardInfoLocation>
                      Est St, 77 - Central Park South, NYC
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
                    <HouseCost>$ 230,000</HouseCost>
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
                        <PropertyOwnerName>John Doe</PropertyOwnerName>
                      </PropertyOwner>
                      <PropertyTimeStart>
                        <FaRegCalendarAlt />
                        <PropertyTimeStartDesc>
                          2 months ago
                        </PropertyTimeStartDesc>
                      </PropertyTimeStart>
                    </IconContext.Provider>
                  </PropertyFooter>
                </PricingCardInfoWrapper>
              </PricingCardInfo>
            </PricingCard>

          </PricingContainer>
          <PropertiesLinkContainer>
            <PropertiesBtnLink to="/properties">
              <Button big primary fontBig>View All</Button>
            </PropertiesBtnLink>
          </PropertiesLinkContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default ListProperties;
