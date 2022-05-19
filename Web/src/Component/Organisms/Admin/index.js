import {
  MenuContainer,
  MenuInnerContainer,
  MenuNameContainer,
  MenuInfoContainer,
  MenuIconContainer,
  TitleContainer,
  SubTitleContainer,
} from "./styles";

import { Vector1 } from "./constant";

const MenuItem = ({ mainTitle, subTitle, linkTo }) => {
  return (
    <MenuContainer to={linkTo}>
      <MenuInnerContainer>
        <MenuNameContainer>{mainTitle}</MenuNameContainer>
        <MenuInfoContainer>{subTitle}</MenuInfoContainer>
      </MenuInnerContainer>
      <MenuIconContainer src={Vector1} />
    </MenuContainer>
  );
};

const Title = ({ text }) => {
  return <TitleContainer>{text}</TitleContainer>;
};

const Index = ({ text }) => {
  return <SubTitleContainer>{text}</SubTitleContainer>;
};

export { MenuItem, Title, Index };
