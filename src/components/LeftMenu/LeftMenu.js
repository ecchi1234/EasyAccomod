import React from "react";

import {AuthContext} from "../../App"
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
  ChatIcon
} from "./LeftMenu.elements";

const LeftMenu = ({ active, route }) => {
  // handle login state using context
  const { state, dispatch } = React.useContext(AuthContext);
  return (
    <>
      <LeftMenuContainer>
        <AvatarClearFix>
          <AvatarImage
            src={require("../../assets/img/testimonials/ts-1.jpg").default}
          ></AvatarImage>
        </AvatarClearFix>
        <NameUser>
          <NameUserText>{localStorage.getItem("user") === null ? "Guest" : JSON.parse(localStorage.user).userName}</NameUserText>
        </NameUser>
        <MenuItemContainerClearFix>
          <MenuItemList>
            <MenuItem>
              <MenuItemLink
                active={route === "account" ? true : false}
                to={`/profile`}
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
                to={`/profile/favorite-list`}
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
                to={`/profile/list-house`}
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
                to={`/profile/edit-house`}
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
                to={`/add-house`}
              >
                <IconContainer>
                  <AddHouseIcon></AddHouseIcon>
                </IconContainer>
                Thêm nhà trọ
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink
                active={route === "notification" ? true : false}
                to={`/profile/notification`}
              >
                <IconContainer>
                  <NotificationIcon></NotificationIcon>
                </IconContainer>
                Thông báo
              </MenuItemLink>
            </MenuItem>

            {/* <MenuItem>
              <MenuItemLink
                active={route === "chat" ? true : false}
                to={`/profile/chat`}
              >
                <IconContainer>
                  <ChatIcon></ChatIcon>
                </IconContainer>
                Chat
              </MenuItemLink>
            </MenuItem> */}

            <MenuItem>
              <MenuItemLink
                active={route === "change-password" ? true : false}
                to={`/profile/change-password`}
              >
                <IconContainer>
                  <ChangePasswordIcon></ChangePasswordIcon>
                </IconContainer>
                Đổi mật khẩu
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink
                active={route === "log-out" ? true : false}
                to={`/log-out`}
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
