import {
  MyContainer,
  InstructionContainer,
  EntranceContainer,
  SubContainer,
} from "./styles";
import MyButton from "@Atoms/Buttons/Main";
import SubMenu from "@Organisms/Before";

const Entrance = ({ loginStatus, loginMessage, greetingsMessage }) => {
  return (
    <EntranceContainer>
      <InstructionContainer>
        {loginStatus ? greetingsMessage : loginMessage}
      </InstructionContainer>
      <MyContainer>
        <MyButton loginStatus={loginStatus} />
      </MyContainer>
      <SubContainer>{SubMenu(loginStatus)}</SubContainer>
    </EntranceContainer>
  );
};

export default Entrance;
