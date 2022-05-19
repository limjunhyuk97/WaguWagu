import MainTemplate from "@Templates/Main";
import { USER_KEY } from "@Common/";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const Main = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [cookie] = useCookies(["user-id"]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (cookie[USER_KEY]) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, [cookie]);

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
