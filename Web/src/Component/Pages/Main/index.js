import { EnrollButton, FindButton, LoginButton } from "@Atoms/Buttons/Main";
import { GMButton, GNBButton } from "@Atoms/Buttons/Header";

const Main = () => {
  return (
    <>
      <div>Heelo It's Main Page</div>
      <EnrollButton />
      <FindButton />
      <GMButton menuName={"로그인"} linkTo={"/login"} />
      <GMButton menuName={"회원가입"} linkTo={"/enroll"} />
      <LoginButton />
      <GNBButton menuName={"메뉴1"} />
    </>
  );
};

export default Main;
