import React from "react";
import axios from "axios";

import { Button } from "../../assets/style/globalStyle";

import { InformationCardTitle } from "../../routers/AccommodationDetail/AccommodationDetail.elements";
import { TotalCost } from "../../routers/AddHouse/AddHouse.elements";

import {
  SignUpForm,
  SignUpFormGroup,
  FormLabel,
  FormTextInput,
} from "../../routers/SignUp/SignUp.elements";
import { SelectionInput } from "./ExtendTimeSection.elements";

const ExtendTimeSection = ({ postExtend, goBack }) => {
  const extendTimeRef = React.useRef();
  const [extendTime, setExtendTime] = React.useState(0);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [price, setPrice] = React.useState(0);
  const moneyRef = React.useRef();
  const handleExtendTimeRequest = () => {
    axios("https://localhost:5000/api/RequestExtend/request", {
      method: "POST",
      withCredentials: true,
      data: {
        postId: postExtend,
        userId: JSON.parse(localStorage.getItem("token")),
        requestTime: parseInt(extendTime),
      },
    })
      .then((res) => {
        setIsSubmit(true);
        setPrice(res.data.costOfExtend);
        console.log("done");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <InformationCardTitle>Gia hạn thời gian</InformationCardTitle>
      <div>
        {isSubmit ? (
          <>
            <div>
              Yeu cau gia han cua quy khach dang duoc xem xet. Ket qua se duoc
              thong bao toi quy khach
            </div>
            <br></br>
          </>
        ) : (
          <>
            <SignUpFormGroup>
              <FormLabel>Thời gian hiển thị thêm </FormLabel>
              <FormTextInput
                ref={extendTimeRef}
                onChange={() => {
                  setExtendTime(extendTimeRef.current.value);
                }}
              ></FormTextInput>
            </SignUpFormGroup>

            <SignUpFormGroup>
              <FormLabel>Đơn vị</FormLabel>
              <SelectionInput>
                <option>Ngày</option>
                <option>Tuần</option>
                <option>Tháng</option>
                <option>Năm</option>
              </SelectionInput>
            </SignUpFormGroup>
          </>
        )}

        <TotalCost>Tổng tiền: </TotalCost>
        <span>{price} đ</span>
        <br></br>
        <br></br>
        <Button
          onClick={() => {
            if (isSubmit) {
              goBack();
            } else {
              handleExtendTimeRequest();
            }
          }}
        >
          {isSubmit ? "Quay về" : "Cập nhật"}
        </Button>
      </div>
    </>
  );
};

export default ExtendTimeSection;
