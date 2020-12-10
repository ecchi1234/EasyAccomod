import React from "react";
import {
  CustomerSec,
  CustomerSectionWrap,
  CustomerHeadingSection,
  CustomerTopSubHeading,
  CustomerBottomSubHeading,
  CustomerContainerOwlCarousel,
  CustomerOwlCarouselStageOuter,
  CustomerOwlCarouselStage,
  CustomerOwlCarouselItem,
  CustomerOwlCarouselNav,
  CustomerOwlCarouselDots,
  CustomerName,
  CustomerImage,
  CustomerLocation,
  CustomerRating,
  CustomerComment,
  CustomerOwlItemContent,
  CustomerStarItem,
  CustomerStarIcon,
  CustomerCommentContainer,
  CustomerQuoteIcon,
  CustomerOwlCarouselDot
} from "./CustomerSection.elements";
const CustomerSection = () => {
  return (
    <>
      <CustomerSec>
        <CustomerSectionWrap>
          <CustomerHeadingSection>
            <CustomerTopSubHeading>Happy</CustomerTopSubHeading>
            <CustomerBottomSubHeading>Customers</CustomerBottomSubHeading>
          </CustomerHeadingSection>
          <CustomerContainerOwlCarousel>
            <CustomerOwlCarouselStageOuter>
              <CustomerOwlCarouselStage>

                <CustomerOwlCarouselItem>
                  <CustomerOwlItemContent>
                    <CustomerName>Ecchi Sama</CustomerName>
                    <CustomerImage
                      src={
                        require("../../assets/img/testimonials/ts-1.jpg")
                          .default
                      }
                    ></CustomerImage>
                    <CustomerLocation>Hà Nội</CustomerLocation>
                    <CustomerRating>
                      <CustomerStarItem>
                        <CustomerStarIcon></CustomerStarIcon>
                      </CustomerStarItem>
                      <CustomerStarItem>
                        <CustomerStarIcon></CustomerStarIcon>
                      </CustomerStarItem>
                      <CustomerStarItem>
                        <CustomerStarIcon></CustomerStarIcon>
                      </CustomerStarItem>
                      <CustomerStarItem>
                        <CustomerStarIcon></CustomerStarIcon>
                      </CustomerStarItem>
                      <CustomerStarItem>
                        <CustomerStarIcon></CustomerStarIcon>
                      </CustomerStarItem>
                    </CustomerRating>
                    <CustomerCommentContainer>
                      <CustomerQuoteIcon></CustomerQuoteIcon>
                      <CustomerComment>
                        Lorem ipsum dolor sit amet, ligula magna at etiam
                        aliquip venenatis. Vitae sit felis donec, suscipit
                        tortor et sapien donec.
                      </CustomerComment>
                    </CustomerCommentContainer>
                  </CustomerOwlItemContent>
                </CustomerOwlCarouselItem>

                <CustomerOwlCarouselItem>
                  <CustomerOwlItemContent>
                    <CustomerName>Ecchi Sama</CustomerName>
                    <CustomerImage
                      src={
                        require("../../assets/img/testimonials/ts-2.jpg")
                          .default
                      }
                    ></CustomerImage>
                    <CustomerLocation>Hồ Chí Minh</CustomerLocation>
                    <CustomerRating>
                      <CustomerStarItem>
                        <CustomerStarIcon></CustomerStarIcon>
                      </CustomerStarItem>
                      <CustomerStarItem>
                        <CustomerStarIcon></CustomerStarIcon>
                      </CustomerStarItem>
                      <CustomerStarItem>
                        <CustomerStarIcon></CustomerStarIcon>
                      </CustomerStarItem>
                      <CustomerStarItem>
                        <CustomerStarIcon></CustomerStarIcon>
                      </CustomerStarItem>
                      <CustomerStarItem>
                        <CustomerStarIcon></CustomerStarIcon>
                      </CustomerStarItem>
                    </CustomerRating>
                    <CustomerCommentContainer>
                      <CustomerQuoteIcon></CustomerQuoteIcon>
                      <CustomerComment>
                        Lorem ipsum dolor sit amet, ligula magna at etiam
                        aliquip venenatis. Vitae sit felis donec, suscipit
                        tortor et sapien donec.
                      </CustomerComment>
                    </CustomerCommentContainer>
                  </CustomerOwlItemContent>
                </CustomerOwlCarouselItem>

                <CustomerOwlCarouselItem>
                  <CustomerOwlItemContent>
                    <CustomerName>Ecchi Sama</CustomerName>
                    <CustomerImage
                      src={
                        require("../../assets/img/testimonials/ts-3.jpg")
                          .default
                      }
                    ></CustomerImage>
                    <CustomerLocation>Đà Nẵng</CustomerLocation>
                    <CustomerRating>
                      <CustomerStarItem>
                        <CustomerStarIcon></CustomerStarIcon>
                      </CustomerStarItem>
                      <CustomerStarItem>
                        <CustomerStarIcon></CustomerStarIcon>
                      </CustomerStarItem>
                      <CustomerStarItem>
                        <CustomerStarIcon></CustomerStarIcon>
                      </CustomerStarItem>
                      <CustomerStarItem>
                        <CustomerStarIcon></CustomerStarIcon>
                      </CustomerStarItem>
                      <CustomerStarItem>
                        <CustomerStarIcon></CustomerStarIcon>
                      </CustomerStarItem>
                    </CustomerRating>
                    <CustomerCommentContainer>
                      <CustomerQuoteIcon></CustomerQuoteIcon>
                      <CustomerComment>
                        Lorem ipsum dolor sit amet, ligula magna at etiam
                        aliquip venenatis. Vitae sit felis donec, suscipit
                        tortor et sapien donec.
                      </CustomerComment>
                    </CustomerCommentContainer>
                  </CustomerOwlItemContent>
                </CustomerOwlCarouselItem>

              </CustomerOwlCarouselStage>
            </CustomerOwlCarouselStageOuter>
            <CustomerOwlCarouselNav></CustomerOwlCarouselNav>
            <CustomerOwlCarouselDots>
                <CustomerOwlCarouselDot></CustomerOwlCarouselDot>
                <CustomerOwlCarouselDot></CustomerOwlCarouselDot>
            </CustomerOwlCarouselDots>
          </CustomerContainerOwlCarousel>
        </CustomerSectionWrap>
      </CustomerSec>
    </>
  );
};

export default CustomerSection;
