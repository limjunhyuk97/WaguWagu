import { LinkContainer, LoginContainer } from "./styles";

const LoginButton = () => {
  return (
    <LinkContainer to="/login">
      <LoginContainer>{"사장님 서비스 로그인"}</LoginContainer>
    </LinkContainer>
  );
};

export default LoginButton;
