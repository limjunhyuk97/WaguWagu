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

const MenuDetail = () => {
  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <EditContainer style={{ marginLeft: "550px" }}>
          <EditText>{"메뉴"}</EditText>
        </EditContainer>
      </div>

      <div style={{ height: "1000px", overflow: "scroll" }}>
        <MenuContainer style={{ borderBottom: "none" }}>
          <MenuImg src={FOOD_IMG} />
          <MenuDataContainer>
            <MenuData placeholder={" 메뉴명 입력"}></MenuData>
            <MenuData placeholder={" 가격 입력"}></MenuData>
          </MenuDataContainer>
          <MenuBtns>
            <Btn style={{ width: "160px", margin: "8px" }}>사진 업로드</Btn>
            <Btn style={{ width: "160px", margin: "8px" }}>추가</Btn>
            <Btn style={{ width: "160px", margin: "8px" }}>삭제</Btn>
          </MenuBtns>
        </MenuContainer>
        <MenuContainer style={{ borderBottom: "none" }}>
          <MenuImg src={FOOD_IMG} />
          <MenuDataContainer>
            <MenuData placeholder={" 메뉴명 입력"}></MenuData>
            <MenuData placeholder={" 가격 입력"}></MenuData>
          </MenuDataContainer>
          <MenuBtns>
            <Btn style={{ width: "160px", margin: "8px" }}>사진 업로드</Btn>
            <Btn style={{ width: "160px", margin: "8px" }}>추가</Btn>
            <Btn style={{ width: "160px", margin: "8px" }}>삭제</Btn>
          </MenuBtns>
        </MenuContainer>
        <MenuContainer style={{ borderBottom: "none" }}>
          <MenuImg src={FOOD_IMG} />
          <MenuDataContainer>
            <MenuData placeholder={" 메뉴명 입력"}></MenuData>
            <MenuData placeholder={" 가격 입력"}></MenuData>
          </MenuDataContainer>
          <MenuBtns>
            <Btn style={{ width: "160px", margin: "8px" }}>사진 업로드</Btn>
            <Btn style={{ width: "160px", margin: "8px" }}>추가</Btn>
            <Btn style={{ width: "160px", margin: "8px" }}>삭제</Btn>
          </MenuBtns>
        </MenuContainer>
        <MenuContainer style={{ borderBottom: "none" }}>
          <MenuImg src={FOOD_IMG} />
          <MenuDataContainer>
            <MenuData placeholder={" 메뉴명 입력"}></MenuData>
            <MenuData placeholder={" 가격 입력"}></MenuData>
          </MenuDataContainer>
          <MenuBtns>
            <Btn style={{ width: "160px", margin: "8px" }}>사진 업로드</Btn>
            <Btn style={{ width: "160px", margin: "8px" }}>추가</Btn>
            <Btn style={{ width: "160px", margin: "8px" }}>삭제</Btn>
          </MenuBtns>
        </MenuContainer>
        <MenuContainer style={{ borderBottom: "none" }}>
          <MenuImg src={FOOD_IMG} />
          <MenuDataContainer>
            <MenuData placeholder={" 메뉴명 입력"}></MenuData>
            <MenuData placeholder={" 가격 입력"}></MenuData>
          </MenuDataContainer>
          <MenuBtns>
            <Btn style={{ width: "160px", margin: "8px" }}>사진 업로드</Btn>
            <Btn style={{ width: "160px", margin: "8px" }}>추가</Btn>
            <Btn style={{ width: "160px", margin: "8px" }}>삭제</Btn>
          </MenuBtns>
        </MenuContainer>
        <MenuContainer style={{ borderBottom: "none" }}>
          <MenuImg src={FOOD_IMG} />
          <MenuDataContainer>
            <MenuData placeholder={" 메뉴명 입력"}></MenuData>
            <MenuData placeholder={" 가격 입력"}></MenuData>
          </MenuDataContainer>
          <MenuBtns>
            <Btn style={{ width: "160px", margin: "8px" }}>사진 업로드</Btn>
            <Btn style={{ width: "160px", margin: "8px" }}>추가</Btn>
            <Btn style={{ width: "160px", margin: "8px" }}>삭제</Btn>
          </MenuBtns>
        </MenuContainer>
      </div>
    </>
  );
};

export default MenuDetail;
