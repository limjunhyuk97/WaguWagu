import { BasicButton, SubButtonContainer } from "./styles";

const SubButton = ({ btnName, linkTo }) => {
  return <SubButtonContainer to={linkTo}>{btnName}</SubButtonContainer>;
};

const Button = (props) => {
  return <BasicButton to={props["linkTo"]} {...props}></BasicButton>;
};

export { Button, SubButton };
