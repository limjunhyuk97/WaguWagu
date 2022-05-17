import MainTemplate from "@Templates/Main";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const Main = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(["user-id"]);

  const makeCookie = () => {
    setCookie("user-id", "1234", { path: "/", maxAge: 2 });
  };

  useEffect(() => {
    console.log(cookie);
    makeCookie();
    console.log(cookie);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MainTemplate
        loginStatus={loginStatus}
        loginMessage={"로그인 해주세요!"}
        greetingsMessage={"임준혁님 안녕하세요!"}
      ></MainTemplate>
    </>
  );
};

export default Main;
