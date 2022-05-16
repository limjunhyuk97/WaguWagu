import HeaderContainer from "./style";
import { Title, GNB, GMBefore } from "@Molecules/Header";

const Header = () => {
  return (
    <HeaderContainer>
      <Title />
      <GNB />
      <GMBefore />
    </HeaderContainer>
  );
};

export default Header;
