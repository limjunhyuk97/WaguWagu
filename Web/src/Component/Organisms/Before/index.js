import { SubContainer, SubItemContainer } from "./styles";
import { SubButtonsBefore, SubButtonsAfter } from "./constant";
import { SubButton } from "@Atoms/Buttons";

const renderSubButtons = (status) => {
  if (!status) {
    return SubButtonsBefore.map((el) => {
      return (
        <SubItemContainer>
          <SubButton btnName={el["btnName"]} linkTo={el["linkTo"]} />
        </SubItemContainer>
      );
    });
  } else {
    return SubButtonsAfter.map((el) => {
      return (
        <SubItemContainer>
          <SubButton btnName={el["btnName"]} linkTo={el["linkTo"]} />
        </SubItemContainer>
      );
    });
  }
};

const SubMenu = ({ loginStatus }) => {
  return <SubContainer>{renderSubButtons(loginStatus)}</SubContainer>;
};

export default SubMenu;
