import {
  EditContainer,
  EditVector,
  EditText,
  MenuContainer,
  MenuImg,
  MenuDataContainer,
  MenuData,
  Btn,
  MenuBtns,
} from "./styles";

import { EDIT_VECTOR, FOOD_IMG } from "@Common";

const MenuAdd = () => {
  return (
    <div>
      <EditContainer>
        <EditVector src={EDIT_VECTOR} />
        <EditText>{"메뉴 수정"}</EditText>
      </EditContainer>
      <MenuContainer>
        <MenuImg src={FOOD_IMG} />
        <MenuDataContainer>
          <MenuData
            placeholder={" 메뉴명 입력"}
            id="add--menu--name"
          ></MenuData>
          <MenuData placeholder={" 가격 입력"} id="add--menu--price"></MenuData>
        </MenuDataContainer>
        <MenuBtns>
          <Btn style={{ width: "160px", margin: "8px" }}>사진 업로드</Btn>
          <Btn style={{ width: "160px", margin: "8px" }}>추가</Btn>
        </MenuBtns>
      </MenuContainer>
    </div>
  );
};

export default MenuAdd;
