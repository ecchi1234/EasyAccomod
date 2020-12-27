import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../assets/style/globalStyle";
import axios from "axios";
import ScrollToTop from "../../components/ScrollToTop";

import { useFormInput } from "../../utils/hooks";
import { TiDelete } from "react-icons/ti";
import { IconContext } from "react-icons/lib";

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
  DeleteNearbyButton,
  FileUploadComponent,
} from "../AddHouse/AddHouse.elements";

const EditInformation = () => {
  const handleSubmitPost = () => {
    var formData = new FormData();
    formData.append("Commune", coummune);
    for (const c of medicalList) {
      formData.append("Medicals", c.name);
    }
    // formData.append("Medicals", "Bệnh viện tư nhân");
    formData.append("Street", street);
    formData.append("ElecPrice", elecPrice);
    formData.append("Balcony", balcony);
    formData.append("RoomCategoryName", typeRoom);
    formData.append("Kitchen", kitchen);
    formData.append("Fridge", fridge);
    formData.append("UserId", localStorage.getItem("token"));
    formData.append("Price", price);
    formData.append("City", city);
    for (const e of educationList) {
      formData.append("Educations", e.name);
    }
    // formData.append("Educations", "Đại học Hà Nội");
    // formData.append("Educations", "Trường mầm non");
    for (const i of binary) {
      formData.append("fileimgs", new Blob([i], { type: "img/jpeg" }));
    }
    // formData.append("fileimgs", new Blob([binary], { type: "img/jpeg" }));
    // formData.append("fileimgs", new Blob([binary], { type: "img/jpeg" }));
    // formData.append("fileimgs", new Blob([binary], { type: "img/jpeg" }));
    formData.append("AirCond", airCond);
    formData.append("Area", area);
    formData.append("WithOwner", isWithOwner);
    formData.append("District", district);
    formData.append("Hired", false);
    formData.append("WaterPrice", waterPrice);
    formData.append("Bath", bath);
    formData.append("EffectiveTime", effectiveTime);
    formData.append("WaterHeater", waterHeater);
    formData.append("Rooms", numberRoom);
    for (const b of transportList) {
      formData.append("BusStations", b.name);
    }
    // formData.append("BusStations", "Xe Bus 29");
    axios("https://localhost:5000/api/Post/add", {
      method: "POST",
      withCredentials: true,
      data: formData,
    })
      .then((response) => {
        notificationAppear();
        console.log("done");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // moneyAmountreff
  const moneyRef = React.useRef();
  const [isSubmit, setSubmitted] = React.useState(false);
  // list image
  const [listImage, setListImage] = React.useState([]);

  // value of type room
  const [typeRoom, setTypeRoom] = React.useState("");

  // value of number of room
  const [numberRoom, setNumberRoom] = React.useState(0);

  // value of if with owner or dont with
  const [isWithOwner, setWithOwner] = React.useState(null);

  // value of price per month
  const [price, setPrice] = React.useState(0);

  // value of area
  const [area, setArea] = React.useState(0);

  // value of bath
  const [bath, setBath] = React.useState(null);

  // value of water heater
  const [waterHeater, setWaterHeater] = React.useState(null);

  // value of kitchen
  const [kitchen, setKitchen] = React.useState(null);

  // value of elec price
  const [elecPrice, setElecPrice] = React.useState(null);

  // value of water price
  const [waterPrice, setWaterPrice] = React.useState(null);

  // value of air cond
  const [airCond, setAirCond] = React.useState(null);

  // value of balcony
  const [balcony, setBalcony] = React.useState(null);

  // value of fridge
  const [fridge, setFridge] = React.useState(null);

  // value of street and number of home
  const [street, setStreet] = React.useState("");

  // value of commune (phường)
  const [coummune, setCommune] = React.useState("");

  // value of district (quận)
  const [district, setDistrict] = React.useState("");

  // value of city
  const [city, setCity] = React.useState("");

  // value of effective time (thời hạn bài đăng hiển thị)
  const [effectiveTime, setEffectiveTime] = React.useState(0);

  // binary link array (convert image to binary)
  const [binary, setBinary] = React.useState([]);

  // nearby list item
  const [educationList, setEducationList] = React.useState([]);
  const [medicalList, setMedicalList] = React.useState([]);
  const [transportList, setTransportList] = React.useState([]);

  // reference to input
  const educationName = React.useRef();
  const medicalName = React.useRef();
  const transportName = React.useRef();
  const fileName = React.useRef();
  const priceRef = React.useRef();
  const numberRoomRef = React.useRef();
  const areaRef = React.useRef();
  const communeRef = React.useRef();
  const streetRef = React.useRef();
  const cityRef = React.useRef();
  const districtRef = React.useRef();
  const elecPriceRef = React.useRef();
  const waterPriceRef = React.useRef();
  const effectiveTimeRef = React.useRef();

  const notificationAppear = () => {
    setSubmitted(!isSubmit);
  };

  // handle add button on nearby address
  const handleAddNearbyAddress = (type) => {
    if (type === 1) {
      const name = educationName.current.value;
      if (name === "") return;
      setEducationList((prev) => {
        return [...prev, { id: uuidv4(), name: name }];
      });
      educationName.current.value = null;
    } else if (type === 2) {
      const name = medicalName.current.value;
      if (name === "") return;
      setMedicalList((prev) => {
        return [...prev, { id: uuidv4(), name: name }];
      });
      medicalName.current.value = null;
    } else if (type === 3) {
      const name = transportName.current.value;
      if (name === "") return;
      setTransportList((prev) => {
        return [...prev, { id: uuidv4(), name: name }];
      });
      transportName.current.value = null;
    }
  };
  // handle delete button on nearby address
  const handleDeleteNearbyAddress = (id, type) => {
    if (type === 1) {
      const newList = educationList.filter((item) => item.id !== id);
      setEducationList(newList);
    } else if (type === 2) {
      const newList = medicalList.filter((item) => item.id !== id);
      setMedicalList(newList);
    } else if (type === 3) {
      const newList = transportList.filter((item) => item.id !== id);
      setTransportList(newList);
    }
  };

  const getBinary = () => {
    document.querySelector("#test").addEventListener(
      "change",
      function () {
        var reader = new FileReader();
        reader.onload = function () {
          var arrayBuffer = this.result,
            array = new Uint8Array(arrayBuffer),
            binaryString = String.fromCharCode.apply(null, array);

          console.log(binaryString);
        };
        reader.readAsArrayBuffer(this.files[0]);
      },
      false
    );
  };
  return isSubmit ? (
    <>
      <ScrollToTop />
      <AccommodationsScreen>
        <AccommodationsWrapper>
          <AccommodationsHeaderSection>
            <AccommodationsHeaderTextContainer>
              <AccommodationsHeaderText>Chỉnh sửa nhà trọ</AccommodationsHeaderText>
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
                      <AddHouseButtonSubmit onClick={notificationAppear}>
                        Trở về
                      </AddHouseButtonSubmit>
                    </AddHouseButtonSubmitContainer>
                  </AddHouseButtonSection>
                </Column>
              </Row>
            </ContentSectionContainer>
          </ContentSection>
        </AccommodationsWrapper>
      </AccommodationsScreen>
    </>
  ) : (
    <>
      <ScrollToTop />
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
                      <div>
                        <Row>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Loại phòng (*)</FormLabel>
                              <SelectionInput
                                value={typeRoom}
                                onChange={(e) => {
                                  setTypeRoom(e.target.value);
                                  console.log(typeRoom);
                                }}
                              >
                                <option>---</option>
                                <option value="Nhà Nguyên Căn">
                                  Nhà nguyên căn
                                </option>
                                <option value="Chung cư">
                                  Chung cư nguyên căn
                                </option>
                                <option value="Chung Cư Mini">
                                  Chung cư mini
                                </option>
                                <option value="Nhà trọ">Phòng trọ</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainer>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Số lượng phòng (*)</FormLabel>
                              <TextInput
                                ref={numberRoomRef}
                                onChange={() => {
                                  setNumberRoom(numberRoomRef.current.value);
                                }}
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Chung/Không chung chủ (*)</FormLabel>
                              <SelectionInput
                                value={isWithOwner}
                                onChange={(e) => {
                                  setWithOwner(e.target.value);
                                  console.log(isWithOwner);
                                }}
                              >
                                <option>---</option>
                                <option value={true}>Chung chủ</option>
                                <option value={false}>Không chung chủ</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainer>
                        </Row>

                        <Row>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>
                                Giá cả (*) (tính theo tháng)
                              </FormLabel>
                              <TextInput
                                type="text"
                                placeholder="Tiền trả một tháng..."
                                value={price}
                                ref={priceRef}
                                onChange={(e) => {
                                  setPrice(priceRef.current.value);
                                }}
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>

                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Diện tích (*)</FormLabel>
                              <TextInput
                                type="text"
                                placeholder="Diện tích phòng..."
                                ref={areaRef}
                                onChange={() => {
                                  setArea(areaRef.current.value);
                                }}
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>
                        </Row>
                      </div>
                    </AddHouseFormGroup>
                  </AddHouseSection>

                  <AddHouseSection>
                    <AddHouseSectionTitle>Ảnh</AddHouseSectionTitle>
                    <AddHouseFormGroup>
                      <Row>
                        <Column>
                          <form>
                            <UploadImageDescContainer>
                              <UploadImageMessage>
                                <FileUploadComponent
                                  ref={fileName}
                                  type="file"
                                  id="test"
                                  onChange={() => {
                                    console.log(typeof fileName.current.value);

                                    let index = fileName.current.value.lastIndexOf(
                                      "\\"
                                    );

                                    setListImage((prev) => [
                                      ...prev,
                                      fileName.current.value.substr(index + 1),
                                    ]);
                                    console.log(listImage);
                                    var reader = new FileReader();

                                    reader.onload = function () {
                                      var arrayBuffer = reader.result,
                                        array = new Uint8Array(arrayBuffer);
                                      // binaryString = String.fromCharCode.apply(null, array);
                                      setBinary((prev) => [...prev, array]);
                                      // console.log(binaryString);
                                    };
                                    reader.readAsArrayBuffer(
                                      fileName.current.files[0]
                                    );
                                  }}
                                />
                                <UploadImageIcon></UploadImageIcon>
                                Ấn vào đây để thêm file (ít nhất 3 ảnh)
                              </UploadImageMessage>
                            </UploadImageDescContainer>
                          </form>
                          <ul style={{ listStyle: "none" }}>
                            {listImage.map((img, index) => {
                              return <li key={index}>{img}</li>;
                            })}
                          </ul>
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
                              <FormLabel>Đường/thôn (*)</FormLabel>
                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Đường/Thôn"
                                required
                                ref={streetRef}
                                onChange={() => {
                                  setStreet(streetRef.current.value);
                                }}
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Phường/Xã (*)</FormLabel>
                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Phường/Xã"
                                required
                                ref={communeRef}
                                onChange={() => {
                                  setCommune(communeRef.current.value);
                                }}
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
                                ref={districtRef}
                                onChange={() => {
                                  setDistrict(districtRef.current.value);
                                }}
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
                                ref={cityRef}
                                onChange={() => {
                                  setCity(() => {
                                    setCity(cityRef.current.value);
                                  });
                                }}
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
                      <div>
                        <Row>
                          <SelectionContainerOneColumn>
                            <SelectionGroup>
                              <FormLabel style={{ color: "#5bc0de" }}>
                                giáo dục
                              </FormLabel>
                              <NearbyList>
                                {educationList.map((item) => {
                                  return (
                                    <NearbyListItem key={item.id}>
                                      {item.name}

                                      <DeleteNearbyButton
                                        onClick={() =>
                                          handleDeleteNearbyAddress(item.id, 1)
                                        }
                                      >
                                        <IconContext.Provider
                                          value={{
                                            size: "1rem",
                                            color: "#ccc",
                                          }}
                                        >
                                          <TiDelete />
                                        </IconContext.Provider>
                                      </DeleteNearbyButton>
                                    </NearbyListItem>
                                  );
                                })}
                              </NearbyList>

                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Tên địa điểm"
                                required
                                ref={educationName}
                              ></TextInput>
                              <AddNearbyButtonContainer>
                                {" "}
                                <Button
                                  onClick={() => handleAddNearbyAddress(1)}
                                >
                                  Thêm
                                </Button>
                              </AddNearbyButtonContainer>
                            </SelectionGroup>
                          </SelectionContainerOneColumn>

                          <SelectionContainerOneColumn>
                            <SelectionGroup>
                              <FormLabel style={{ color: "#5cb85c" }}>
                                sức khỏe & y tế
                              </FormLabel>
                              <NearbyList>
                                {medicalList.map((item) => {
                                  return (
                                    <NearbyListItem key={item.id}>
                                      {item.name}
                                      <DeleteNearbyButton
                                        onClick={() =>
                                          handleDeleteNearbyAddress(item.id, 2)
                                        }
                                      >
                                        <IconContext.Provider
                                          value={{
                                            size: "1rem",
                                            color: "#ccc",
                                          }}
                                        >
                                          <TiDelete />
                                        </IconContext.Provider>
                                      </DeleteNearbyButton>
                                    </NearbyListItem>
                                  );
                                })}
                              </NearbyList>

                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Tên địa điểm"
                                required
                                ref={medicalName}
                              ></TextInput>
                              <AddNearbyButtonContainer>
                                {" "}
                                <Button
                                  onClick={() => handleAddNearbyAddress(2)}
                                >
                                  Thêm
                                </Button>
                              </AddNearbyButtonContainer>
                            </SelectionGroup>
                          </SelectionContainerOneColumn>

                          <SelectionContainerOneColumn>
                            <SelectionGroup>
                              <FormLabel style={{ color: "#d9534f" }}>
                                phương tiện công cộng
                              </FormLabel>
                              <NearbyList>
                                {transportList.map((item) => {
                                  return (
                                    <NearbyListItem key={item.id}>
                                      {item.name}
                                      <DeleteNearbyButton
                                        onClick={() =>
                                          handleDeleteNearbyAddress(item.id, 3)
                                        }
                                      >
                                        <IconContext.Provider
                                          value={{
                                            size: "1rem",
                                            color: "#ccc",
                                          }}
                                        >
                                          <TiDelete />
                                        </IconContext.Provider>
                                      </DeleteNearbyButton>
                                    </NearbyListItem>
                                  );
                                })}
                              </NearbyList>

                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Tên địa điểm"
                                required
                                ref={transportName}
                              ></TextInput>
                              <AddNearbyButtonContainer>
                                {" "}
                                <Button
                                  onClick={() => handleAddNearbyAddress(3)}
                                >
                                  Thêm
                                </Button>
                              </AddNearbyButtonContainer>
                            </SelectionGroup>
                          </SelectionContainerOneColumn>
                        </Row>
                      </div>
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
                              <SelectionInput
                                value={bath}
                                onChange={(e) => {
                                  setBath(e.target.value);
                                }}
                              >
                                <option value={true}>Khép kín</option>
                                <option value={false}>Chung</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainer>
                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>&nbsp;</FormLabel>
                              <SelectionInput
                                value={waterHeater}
                                onChange={(e) => {
                                  setWaterHeater(e.target.value);
                                }}
                              >
                                <option value={true}>Có nóng lạnh</option>
                                <option value={false}>
                                  Không có nóng lạnh
                                </option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainer>

                          <SelectionContainerOneColumn>
                            <SelectionGroup>
                              <FormLabel>Bếp (*)</FormLabel>
                              <SelectionInput
                                value={kitchen}
                                onChange={(e) => {
                                  setKitchen(e.target.value);
                                }}
                              >
                                <option value={1}>Khu bếp riêng</option>
                                <option value={2}>Khu bếp chung</option>
                                <option value={3}>Không nấu ăn</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainerOneColumn>

                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Giá điện</FormLabel>
                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Tỉnh hoặc thành phố"
                                required
                                ref={elecPriceRef}
                                onChange={() => {
                                  setElecPrice(elecPriceRef.current.value);
                                }}
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>

                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Giá nước</FormLabel>
                              <TextInput
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Tỉnh hoặc thành phố"
                                required
                                ref={waterPriceRef}
                                onChange={() => {
                                  setWaterPrice(waterPriceRef.current.value);
                                }}
                              ></TextInput>
                            </SelectionGroup>
                          </SelectionContainer>

                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Điều hòa (*)</FormLabel>
                              <SelectionInput
                                value={airCond}
                                onChange={(e) => {
                                  setAirCond(e.target.value);
                                }}
                              >
                                <option>---</option>
                                <option value={true}>Có</option>
                                <option value={false}>Không</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainer>

                          <SelectionContainer>
                            <SelectionGroup>
                              <FormLabel>Ban công (*)</FormLabel>
                              <SelectionInput
                                value={balcony}
                                onChange={(e) => {
                                  setBalcony(e.target.value);
                                }}
                              >
                                <option>---</option>
                                <option value={true}>Có</option>
                                <option value={false}>Không</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainer>

                          <SelectionContainerThreeColumn>
                            <SelectionGroup>
                              <FormLabel>Tiện ích khác</FormLabel>
                              <SelectionInput
                                value={fridge}
                                onChange={(e) => {
                                  setFridge(e.target.value);
                                }}
                              >
                                <option>Tủ lạnh</option>
                                <option value={true}>Có</option>
                                <option value={false}>Không</option>
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
                                value={
                                  localStorage.getItem("user")
                                    ? JSON.parse(localStorage.getItem("user"))
                                        .lastName
                                    : ""
                                }
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
                                value={
                                  localStorage.getItem("user")
                                    ? JSON.parse(localStorage.getItem("user"))
                                        .firstName
                                    : ""
                                }
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
                                value={
                                  localStorage.getItem("user")
                                    ? JSON.parse(localStorage.getItem("user"))
                                        .email
                                    : ""
                                }
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
                                value={
                                  localStorage.getItem("user")
                                    ? JSON.parse(localStorage.getItem("user"))
                                        .phoneNumber
                                    : ""
                                }
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
                                ref={effectiveTimeRef}
                                onChange={() => {
                                  if (effectiveTimeRef.current.value !== "") {
                                    moneyRef.current.innerText =
                                      10000 *
                                      parseInt(effectiveTimeRef.current.value);
                                  }

                                  setEffectiveTime(
                                    effectiveTimeRef.current.value
                                  );
                                }}
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
                                <option>Theo năm</option>
                              </SelectionInput>
                            </SelectionGroup>
                          </SelectionContainer>
                        </Row>
                      </form>
                    </AddHouseFormGroup>
                  </AddHouseSection>
                  <AddHouseSection>
                    <TotalCost>Tổng tiền:</TotalCost>
                    <span ref={moneyRef}>0</span><span> đ</span>
                  </AddHouseSection>

                  <AddHouseButtonSection>
                    <AddHouseButtonSubmitContainer>
                      <AddHouseButtonSubmit onClick={() => handleSubmitPost()}>
                        Xác nhận
                      </AddHouseButtonSubmit>
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

export default EditInformation;
