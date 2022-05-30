import Header from "@Organisms/Header/";
import Footer from "@Organisms/Footer/";

import { USER_KEY, USER_NAME, removeCookie, getCookie } from "@Util/cookie";
import { scrollTop } from "@Util/scrollTop";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AdminTable = () => {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(false);

  const handleLoginout = (menuName, linkTo) => {
    navigate(linkTo);
    if (menuName === "로그아웃") {
      setLoginStatus(false);
      removeCookie(USER_KEY);
      removeCookie(USER_NAME);
    }
  };

  useEffect(() => {
    const status = getCookie(USER_KEY);
    scrollTop();
    if (status) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, []);

  return (
    <>
      <Header loginStatus={loginStatus} onClick={handleLoginout} />
      <Footer />
    </>
  );
};

export default AdminTable;
