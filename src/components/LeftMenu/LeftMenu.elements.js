import styled from "styled-components";

import { Link } from "react-router-dom";

import { IoPersonSharp,  } from "react-icons/io5";

import {RiAddCircleFill, RiListSettingsLine} from "react-icons/ri";

import { FaHeart, FaLock, FaSignOutAlt, FaThList, FaBell } from "react-icons/fa";

export const LeftMenuContainer = styled.div`
  box-shadow: 0 0 20px rgba(38, 38, 38, 0.2);
  margin: 0 auto 50px;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  margin-bottom: 0 !important;
`;

export const AvatarClearFix = styled.div`
  padding: 20px 20px 120px;
  text-align: center;
  position: relative;
  background-repeat: no-repeat;
  border: none;
  margin: 0;
  background: #fff;
  background-size: cover;
  color: #ffffff;
  z-index: 1;
  display: flex;
  justify-content: center;

  &:after {
    display: block;
    content: "";
    clear: both;
  }
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  background-clip: padding-box;
  bottom: 5px;
  height: 100px;
  width: 100px;
  /* left: 59.5%; */
  /* margin-left: -75px; */
  position: absolute;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.1);
  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
`;

export const NameUser = styled.div``;

export const NameUserText = styled.h2`
  text-transform: capitalize;
  font-weight: 400;
  padding-top: 15px;
  font-size: 16px;
  margin-bottom: 30px;
  color: #aeb7c2;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  line-height: 1.1;
  margin-top: 0;
`;

export const MenuItemContainerClearFix = styled.div`
  padding-top: 30px;

  &:after {
    display: block;
    content: "";
    clear: both;
  }
`;

export const MenuItemList = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin-bottom: 0 !important;

  margin-top: 0;
`;

export const MenuItem = styled.li`
  list-style: none;
`;

export const IconContainer = styled.span`
  margin-right: 10px;
`;

export const PersonIcon = styled(IoPersonSharp)``;

export const LikeListIcon = styled(FaHeart)``;

export const ChangePasswordIcon = styled(FaLock)``;

export const SignOutIcon = styled(FaSignOutAlt)``;

export const ListHouseIcon = styled(FaThList)``;

export const NotificationIcon = styled(FaBell)``;

export const AddHouseIcon = styled(RiAddCircleFill)``;

export const EditHouseIcon = styled(RiListSettingsLine)``;

export const MenuItemLink = styled(Link)`
  transition: all 0.3s ease;
  color: #000;
  padding: 12px 50px;
  display: block;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border-left-width: 4px;
  border-left-color: ${({ active }) => (active ? "#274abb" : "#fff")};
  border-left-style: solid;

  /* background: ${({ active }) => (active ? "#172134" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#aeb7c2")}; */

  &:hover {
    background: #274abb;
    color: #fff;
    cursor: pointer;
    border-left-color: #274abb;
  }
`;
