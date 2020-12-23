import styled from "styled-components";

import { FaCheck } from "react-icons/fa";

import { IoMdWarning } from "react-icons/io";

export const NotificationTitleSection = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

export const NotificationTitleConfirmedIcon = styled(FaCheck)`
  color: green;
`;

export const NotificationTitleIconRejectedIcon = styled(IoMdWarning)`
  color: red;
`;

export const NotificationTitleValue = styled.h3`
  color: ${({ isConfirmed }) => (isConfirmed ? "green" : "red")};

  margin-left: 0.5rem;
`;

export const NotificationContentSection = styled.div`
  padding: 10px;
`;
