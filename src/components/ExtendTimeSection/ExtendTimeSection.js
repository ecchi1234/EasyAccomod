import React from "react";

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

const ExtendTimeSection = () => {
  return (
    <>
      <InformationCardTitle>Gia hạn thời gian</InformationCardTitle>
      <SignUpForm>
        <SignUpFormGroup>
          <FormLabel>Thời gian hiển thị thêm </FormLabel>
          <FormTextInput></FormTextInput>
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
        <TotalCost>Tổng tiền:</TotalCost>
        <span>100.000 đ</span>
        <br></br>
        <br></br>
        <Button>Cập nhật</Button>
      </SignUpForm>
    </>
  );
};

export default ExtendTimeSection;
