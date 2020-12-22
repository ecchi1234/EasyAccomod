import React from "react";

import { Button } from "../../assets/style/globalStyle";

import {
  AccommodationsScreen,
  AccommodationsWrapper,
  AccommodationsHeaderSection,
  AccommodationsHeaderText,
  AccommodationsHeaderTextContainer,
} from "../Accommodations/Accommodations.elements";

import {
  Row,
  Column,
} from "../AccommodationDetail/AccommodationDetail.elements";
import {
  AddHouseFormGroup,
  AddHouseSection,
  AddHouseSectionTitle,
  ContentSection,
  ContentSectionContainer,
  FormContainer,
  FormLabel,
  TextInput,
  TextAreaInput,
  SelectionContainer,
  SelectionContainerOneColumn,
  SelectionContainerThreeColumn,
  SelectionGroup,
  SelectionInput,
  UploadImageDescContainer,
  UploadImageMessage,
  UploadImageIcon,
  TotalCost,
  AddHouseButtonSection,
  AddHouseButtonSubmitContainer,
  AddHouseButtonSubmit,
  NearbyList,
  NearbyListItem,
  AddNearbyButtonContainer,
} from "./AddHouse.elements";

const AddHouse = () => {
  const [isSubmit, setSubmitted] = React.useState(false);

  const notificationAppear = () => {
    setSubmitted(!isSubmit);
  }
  return isSubmit ? (<>
    <AccommodationsScreen>
      <AccommodationsWrapper>
        <AccommodationsHeaderSection>
          <AccommodationsHeaderTextContainer>
            <AccommodationsHeaderText>Thêm nhà trọ</AccommodationsHeaderText>
          </AccommodationsHeaderTextContainer>
        </AccommodationsHeaderSection>
        <ContentSection>
          <ContentSectionContainer>
            <Row>
              <Column>
                <AddHouseSection>
                  <AddHouseSectionTitle>Thông báo</AddHouseSectionTitle>
                  Bài đăng của bạn đang được chờ duyệt.
                </AddHouseSection>
                <AddHouseButtonSection>
                    <AddHouseButtonSubmitContainer>
                      <AddHouseButtonSubmit onClick={notificationAppear}>Trở về</AddHouseButtonSubmit>
                    </AddHouseButtonSubmitContainer>
                  </AddHouseButtonSection>
              </Column>
            </Row>
          </ContentSectionContainer>
        </ContentSection>
      </AccommodationsWrapper>
    </AccommodationsScreen>
  </>) : (
    <>
      <AccommodationsScreen>
        <AccommodationsWrapper>
          <AccommodationsHeaderSection>
            <AccommodationsHeaderTextContainer>
              <AccommodationsHeaderText>Thêm nhà trọ</AccommodationsHeaderText>
            </AccommodationsHeaderTextContainer>
          </AccommodationsHeaderSection>
          <ContentSection>
            <ContentSectionContainer>
              <Row>
                <Column>
                  <AddHouseSection>
                    <AddHouseSectionTitle>Mô tả nhà trọ</AddHouseSectionTitle>
                    <AddHouseFormGroup>
                      <form>
                        <Row>
                          <Column>
                            <FormContainer>
                              <FormLabel>Tiêu đề</FormLabel>
                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Điền tiêu đề cho nhà trọ của bạn..."
                              ></TextInput>
                            </FormContainer>
                          </Column>
                        </Row>

                        <Row>
                          <Column>
                            <FormContainer>
                              <FormLabel>Mô tả</FormLabel>
                              <TextAreaInput
                                id="description"
                                name="house-desc"
                                placeholder="Mô tả nhà trọ của bạn..."
                              ></TextAreaInput>
                            </FormContainer>
                          </Column>
                        </Row>
                        <Row>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Loại phòng</FormLabel>
                              <SelectionInput>
                                <option>Nhà nguyên căn</option>
                                <option>Chung cư nguyên căn</option>
                                <option>Chung cư mini</option>
                                <option>Phòng trọ</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainer>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Số lượng phòng</FormLabel>
                              <TextInput></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Chung/Không chung chủ</FormLabel>
                              <SelectionInput>
                                <option>Chung chủ</option>
                                <option>Không chung chủ</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainer>
                        </Row>
                        <Row>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Giá cả</FormLabel>
                              <TextInput
                                type="text"
                                placeholder="Tiền trả một tháng..."
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>

                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Diện tích</FormLabel>
                              <TextInput
                                type="text"
                                placeholder="Diện tích phòng..."
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>
                        </Row>
                      </form>
                    </AddHouseFormGroup>
                  </AddHouseSection>
                  <AddHouseSection>
                    <AddHouseSectionTitle>Ảnh</AddHouseSectionTitle>
                    <AddHouseFormGroup>
                      <Row>
                        <Column>
                          <form action="/file-upload">
                            <UploadImageDescContainer>
                              <UploadImageMessage>
                                <UploadImageIcon></UploadImageIcon>
                                Ấn vào đây để thêm file hoặc ném file vào đây
                              </UploadImageMessage>
                            </UploadImageDescContainer>
                          </form>
                        </Column>
                      </Row>
                    </AddHouseFormGroup>
                  </AddHouseSection>
                  <AddHouseSection>
                    <AddHouseSectionTitle>Địa chỉ</AddHouseSectionTitle>
                    <AddHouseFormGroup>
                      <form>
                        <Row>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Số nhà (*)</FormLabel>
                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Số nhà"
                                required
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Đường/Thôn (*)</FormLabel>
                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Đường hoặc thôn"
                                required
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Quận/Huyện (*)</FormLabel>
                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Quận hoặc huyện"
                                required
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Tỉnh/Thành phố (*)</FormLabel>
                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Tỉnh hoặc thành phố"
                                required
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>
                        </Row>
                      </form>
                    </AddHouseFormGroup>
                  </AddHouseSection>
                  <AddHouseSection>
                    <AddHouseSectionTitle>
                      Địa điểm lân cận
                    </AddHouseSectionTitle>
                    <AddHouseFormGroup>
                      <form>
                        <Row>
                          <SelectionContainerOneColumn>
                            <SelectionGroup>
                              <FormLabel style={{ color: "#5bc0de" }}>
                                giáo dục
                              </FormLabel>
                              <NearbyList>
                                <NearbyListItem>Đại học Hà Nội</NearbyListItem>
                              </NearbyList>

                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Tên địa điểm"
                                required
                              ></TextInput>
                              <AddNearbyButtonContainer>
                                {" "}
                                <Button>Thêm</Button>
                              </AddNearbyButtonContainer>
                            </SelectionGroup>
                          </SelectionContainerOneColumn>

                          <SelectionContainerOneColumn>
                            <SelectionGroup>
                              <FormLabel style={{ color: "#5cb85c" }}>
                                sức khỏe & y tế
                              </FormLabel>
                              <NearbyList>
                                <NearbyListItem>Đại học Hà Nội</NearbyListItem>
                              </NearbyList>

                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Tên địa điểm"
                                required
                              ></TextInput>
                              <AddNearbyButtonContainer>
                                {" "}
                                <Button>Thêm</Button>
                              </AddNearbyButtonContainer>
                            </SelectionGroup>
                          </SelectionContainerOneColumn>

                          <SelectionContainerOneColumn>
                            <SelectionGroup>
                              <FormLabel style={{ color: "#d9534f" }}>
                                phương tiện công cộng
                              </FormLabel>
                              <NearbyList>
                                <NearbyListItem>Đại học Hà Nội</NearbyListItem>
                                <NearbyListItem>Đại học Hà Nội</NearbyListItem>
                              </NearbyList>

                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Tên địa điểm"
                                required
                              ></TextInput>
                              <AddNearbyButtonContainer>
                                {" "}
                                <Button>Thêm</Button>
                              </AddNearbyButtonContainer>
                            </SelectionGroup>
                          </SelectionContainerOneColumn>

                          <SelectionContainerOneColumn>
                            <SelectionGroup>
                              <FormLabel style={{ color: "#ffc107" }}>
                                khác
                              </FormLabel>
                              <NearbyList>
                                <NearbyListItem>Đại học Hà Nội</NearbyListItem>
                              </NearbyList>

                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Tên địa điểm"
                                required
                              ></TextInput>
                              <AddNearbyButtonContainer>
                                {" "}
                                <Button>Thêm</Button>
                              </AddNearbyButtonContainer>
                            </SelectionGroup>
                          </SelectionContainerOneColumn>
                        </Row>
                      </form>
                    </AddHouseFormGroup>
                  </AddHouseSection>
                  <AddHouseSection>
                    <AddHouseSectionTitle>Cơ sở vật chất</AddHouseSectionTitle>
                    <AddHouseFormGroup>
                      <form>
                        <Row>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Nhà tắm (*)</FormLabel>
                              <SelectionInput>
                                <option>Khép kín</option>
                                <option>Chung</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainer>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>&nbsp;</FormLabel>
                              <SelectionInput>
                                <option>Có nóng lạnh</option>
                                <option>Không có nóng lạnh</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainer>

                          <SelectionContainerOneColumn>
                            <SelectionGroup>
                              <FormLabel>Bếp (*)</FormLabel>
                              <SelectionInput>
                                <option>Khu bếp riêng</option>
                                <option>Khu bếp chung</option>
                                <option>Không nấu ăn</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainerOneColumn>

                          <SelectionContainerOneColumn>
                            <SelectionGroup>
                              <FormLabel>Điện nước</FormLabel>
                              <SelectionInput>
                                <option>Giá dân</option>
                                <option>Giá thuê</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainerOneColumn>

                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Điều hòa (*)</FormLabel>
                              <SelectionInput>
                                <option>Có</option>
                                <option>Không</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainer>

                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Ban công (*)</FormLabel>
                              <SelectionInput>
                                <option>Có</option>
                                <option>Không</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainer>

                          <SelectionContainerThreeColumn>
                            <SelectionGroup>
                              <FormLabel>Tiện ích khác</FormLabel>
                              <SelectionInput>
                                <option>Tủ lạnh</option>
                                <option>Có</option>
                                <option>Không</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainerThreeColumn>

                          <SelectionContainerThreeColumn>
                            <SelectionGroup>
                              <FormLabel>&nbsp;</FormLabel>
                              <SelectionInput>
                                <option>Máy giặt</option>
                                <option>Có</option>
                                <option>Không</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainerThreeColumn>

                          <SelectionContainerThreeColumn>
                            <SelectionGroup>
                              <FormLabel>&nbsp;</FormLabel>
                              <SelectionInput>
                                <option>giường tủ</option>
                                <option>Có</option>
                                <option>Không</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainerThreeColumn>
                        </Row>
                      </form>
                    </AddHouseFormGroup>
                  </AddHouseSection>
                  <AddHouseSection>
                    <AddHouseSectionTitle>
                      Thông tin liên lạc
                    </AddHouseSectionTitle>
                    <AddHouseFormGroup>
                      <form>
                        <Row>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Tên</FormLabel>
                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Tên"
                                required
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Họ</FormLabel>
                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Họ"
                                required
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Email</FormLabel>
                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Email"
                                required
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Số điện thoại</FormLabel>
                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Số điện thoại"
                                required
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>
                        </Row>
                      </form>
                    </AddHouseFormGroup>
                  </AddHouseSection>
                  <AddHouseSection>
                    <AddHouseSectionTitle>
                      Thời gian hiển thị
                    </AddHouseSectionTitle>
                    <AddHouseFormGroup>
                      <form>
                        <Row>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Thời gian</FormLabel>
                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Thời gian"
                                required
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Đơn vị</FormLabel>
                              <SelectionInput>
                                <option>Theo tuần</option>
                                <option>Theo tháng</option>
                                <option>Theo quý</option>
                                <option>Theo quý</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainer>
                        </Row>
                      </form>
                    </AddHouseFormGroup>
                  </AddHouseSection>
                  <AddHouseSection>
                    <TotalCost>Tổng tiền:</TotalCost>
                    <span>100.000đ</span>
                  </AddHouseSection>

                  <AddHouseButtonSection>
                    <AddHouseButtonSubmitContainer>
                      <AddHouseButtonSubmit onClick={notificationAppear}>Xác nhận</AddHouseButtonSubmit>
                    </AddHouseButtonSubmitContainer>
                  </AddHouseButtonSection>

                  
                </Column>
              </Row>
            </ContentSectionContainer>
          </ContentSection>
        </AccommodationsWrapper>
      </AccommodationsScreen>
    </>
  );
};

export default AddHouse;
