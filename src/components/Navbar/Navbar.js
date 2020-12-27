import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../assets/style/globalStyle";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";

import { AuthContext } from "../../App";

const Navbar = ({ isLogged, isOwner, lastName}) => {
  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#4b59f7" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              Easy <p style={{ color: "#4b59f7", fontWeight: 600 }}>Accomod</p>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Trang chủ</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/products">Nhà trọ</NavLinks>
              </NavItem>
              

              {isLogged ? (
                <NavItem>
                  <NavLinks to="/profile">{`Xin chào, ${lastName}`}</NavLinks>
                </NavItem>
              ) : (
                <NavItemBtn>
                  {button ? (
                    <NavBtnLink to="/sign-up">
                      <Button primary>ĐĂNG KÝ</Button>
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink to="/sign-up">
                      <Button fontBig primary>
                        Đăng ký
                      </Button>
                    </NavBtnLink>
                  )}
                </NavItemBtn>
              )}

              {isLogged ? (isOwner ? (
                <NavItemBtn>
                  {button ? (
                    <NavBtnLink to="/add-house">
                      <Button primary>THÊM POST</Button>
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink to="/add-house">
                      <Button fontBig primary>
                        Thêm post
                      </Button>
                    </NavBtnLink>
                  )}
                </NavItemBtn>
              ) : null) : null}

              {/* <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button fontBig primary>
                      Signup
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn> */}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
