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
  SignOutIcon,
  NotificationIcon,
  ListHouseIcon,
  AddHouseIcon,
  EditHouseIcon,
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
              <MenuItemLink
                active={route === "account" ? true : false}
                to="/services"
              >
                <IconContainer>
                  <PersonIcon></PersonIcon>
                </IconContainer>
                Hồ sơ cá nhân
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink
                active={route === "favorite" ? true : false}
                to="/services/favorite-list"
              >
                <IconContainer>
                  <LikeListIcon></LikeListIcon>
                </IconContainer>
                Danh sách yêu thích
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                active={route === "list-house" ? true : false}
                to="/services/list-house"
              >
                <IconContainer>
                  <ListHouseIcon></ListHouseIcon>
                </IconContainer>
                Thống kê nhà trọ
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink
                active={route === "edit-house" ? true : false}
                to="/services/list-house"
              >
                <IconContainer>
                  <EditHouseIcon></EditHouseIcon>
                </IconContainer>
                Chỉnh sửa nhà trọ
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink
                active={route === "add-house" ? true : false}
                to="/services/add-house"
              >
                <IconContainer>
                  <AddHouseIcon></AddHouseIcon>
                </IconContainer>
                Thêm nhà trọ
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink
                active={route === "change-password" ? true : false}
                to="/services/change-password"
              >
                <IconContainer>
                  <NotificationIcon></NotificationIcon>
                </IconContainer>
                Thông báo
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink
                active={route === "change-password" ? true : false}
                to="/services/change-password"
              >
                <IconContainer>
                  <ChangePasswordIcon></ChangePasswordIcon>
                </IconContainer>
                Đổi mật khẩu
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink
                active={route === "change-password" ? true : false}
                to="/services/change-password"
              >
                <IconContainer>
                  <SignOutIcon></SignOutIcon>
                </IconContainer>
                Đăng xuất
              </MenuItemLink>
            </MenuItem>
          </MenuItemList>
        </MenuItemContainerClearFix>
      </LeftMenuContainer>
    </>
  );
};

export default LeftMenu;
