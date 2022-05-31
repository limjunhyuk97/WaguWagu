import {
  EditContainer,
  EditText,
  MenuContainer,
  MenuImg,
  MenuDataContainer,
  MenuData,
  Btn,
  MenuBtns,
} from "./styles";

import { FOOD_IMG } from "@Common";

import { useEffect } from "react";

const MenuDetail = (props) => {
  const renderItems = () => {
    if (props.menu)
      return props.menu.map((el) => {
        return (
          <MenuContainer style={{ margin: "1px 0px -3px 0px" }}>
            <MenuImg src={FOOD_IMG} />
            <MenuDataContainer>
              <MenuData value={el.name} disabled></MenuData>
              <MenuData value={`${el.price} 원`} disabled></MenuData>
            </MenuDataContainer>
            <MenuBtns>
              <Btn style={{ width: "160px", margin: "8px" }}>제거</Btn>
              <Btn style={{ width: "160px", margin: "8px" }}>수정</Btn>
            </MenuBtns>
          </MenuContainer>
        );
      });
    else return;
  };

  useEffect(() => {}, [props.menu]);

  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <EditContainer style={{ marginLeft: "550px" }}>
          <EditText>{"메뉴"}</EditText>
        </EditContainer>
      </div>

      <div style={{ height: "1000px", overflow: "scroll" }}>
        {renderItems()}
      </div>
    </>
  );
};

export default MenuDetail;
