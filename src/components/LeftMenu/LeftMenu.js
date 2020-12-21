import React from "react";
import {
  AvatarClearFix,
  AvatarImage,
  LeftMenuContainer,
  MenuItem,
  MenuItemContainerClearFix,
  MenuItemLink,
  MenuItemList,
  NameUser,
  NameUserText,
  PersonIcon,
  LikeListIcon,
  ChangePasswordIcon,
  IconContainer,
} from "./LeftMenu.elements";

const LeftMenu = ({ active, route }) => {
  return (
    <>
      <LeftMenuContainer>
        <AvatarClearFix>
          <AvatarImage
            src={require("../../assets/img/testimonials/ts-1.jpg").default}
          ></AvatarImage>
        </AvatarClearFix>
        <NameUser>
          <NameUserText>Ecchi Sama</NameUserText>
        </NameUser>
        <MenuItemContainerClearFix>
          <MenuItemList>
            <MenuItem>
              <MenuItemLink active={route === "account" ? true : false} to="/services">
                <IconContainer>
                  <PersonIcon></PersonIcon>
                </IconContainer>
                Hồ sơ cá nhân
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink active={route === "favorite" ? true : false} to="/services/favorite-list">
                <IconContainer>
                  <LikeListIcon></LikeListIcon>
                </IconContainer>
                Danh sách yêu thích
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink active={route === "change-password" ? true : false} to="/services/change-password">
                <IconContainer>
                  <ChangePasswordIcon></ChangePasswordIcon>
                </IconContainer>
                Đổi mật khẩu
              </MenuItemLink>
            </MenuItem>
          </MenuItemList>
        </MenuItemContainerClearFix>
      </LeftMenuContainer>
    </>
  );
};

export default LeftMenu;
