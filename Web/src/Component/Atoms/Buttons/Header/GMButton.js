import { LinkContainer, GMContainer } from "./styles";

const GMButton = ({ menuName, linkTo }) => {
  return (
    <LinkContainer to={linkTo}>
      <GMContainer>{menuName}</GMContainer>
    </LinkContainer>
  );
};

export default GMButton;
