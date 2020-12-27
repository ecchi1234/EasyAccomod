import styled from "styled-components";

import { AiFillSetting } from "react-icons/ai";

export const EditStatusIcon = styled(AiFillSetting)`
  margin-left: 0.5rem;
  vertical-align: sub;
`;

export const StatusValue = styled.span`
  color: ${({ isRented }) => (isRented ? "red" : "#274abb")};
  font-size: 14px;
`;

export const EditButton = styled.button`
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ canEdit }) => (canEdit ? "green" : "#ccc")};
  
  border: none;
  margin-right: 5px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const ExtendButton = styled(EditButton)`
  background-color: #4b59f7;
`;
