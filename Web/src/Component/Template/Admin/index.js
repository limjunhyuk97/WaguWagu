import { MainContainer, MenuContainer, MenuItemContainer } from "./styles";
import Footer from "@Organisms/Footer";
import Header from "@Organisms/Header";
import { MenuItem, Title, Index } from "@Organisms/Admin";
import {
  MainTitle,
  AccountManagementTitle,
  StoreManagementTitle,
  AccountManagement,
  StoreManagement,
} from "./constant";

import { removeCookie, getCookie, USER_KEY, USER_NAME } from "@Util/cookie";
import { scrollTop } from "@Util/scrollTop";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// mainTitle, subTitle, linkTo

const renderMenu = (items) => {
  return items.map((el) => {
    return (
      <MenuItem
        mainTitle={el["title"]}
        subTitle={el["subtitle"]}
        linkTo={el["linkTo"]}
      ></MenuItem>
    );
  });
};

const AdminTemplate = () => {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(true);

  const handleLoginout = (menuName, linkTo) => {
    if (menuName === "로그아웃") {
      setLoginStatus(false);
      removeCookie(USER_KEY);
      removeCookie(USER_NAME);
    }
    navigate(linkTo);
  };

  useEffect(() => {
    scrollTop();
    const status = getCookie(USER_KEY);
    if (status) setLoginStatus(true);
    else setLoginStatus(false);
  }, []);

  return (
    <>
      <Header loginStatus={loginStatus} onClick={handleLoginout} />
      {loginStatus ? (
        <>
          <MainContainer>
            <Title text={MainTitle} />
            <MenuContainer>
              <Index text={AccountManagementTitle}></Index>
              <MenuItemContainer>
                {renderMenu(AccountManagement)}
              </MenuItemContainer>
            </MenuContainer>
            <MenuContainer>
              <Index text={StoreManagementTitle}></Index>
              <MenuItemContainer>
                {renderMenu(StoreManagement)}
              </MenuItemContainer>
            </MenuContainer>
          </MainContainer>
        </>
      ) : (
        <div
          style={{
            height: "1000px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: "800", fontSize: "40px" }}>
            앗! 로그인이 안되어 있어요!
          </div>
        </div>
      )}
      <Footer></Footer>
    </>
  );
};

export default AdminTemplate;
