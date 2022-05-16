import { GMContainer } from "./styles";
import { GMButton } from "@Atoms/Buttons/Header/";
import { GMInner } from "@Constant/Header/";

const renderItems = () => {
  return GMInner.map((el) => {
    return <GMButton menuName={el.menuName} linkTo={el.linkTo}></GMButton>;
  });
};

const GMBefore = () => {
  return <GMContainer>{renderItems()}</GMContainer>;
};

export default GMBefore;
