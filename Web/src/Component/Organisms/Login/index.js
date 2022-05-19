import {
  FormContainer,
  SubContainer,
  CheckContainer,
  SubmenuContainer,
} from "./styles";

import Input from "@Atoms/Input";
import CheckBox from "@Atoms/CheckBox";
import SubMenu from "@Organisms/Before";

import { IDBoxStyles, PWBoxStyles, SubBtnStyles } from "./constant";

const InputFrame = (props) => {
  return (
    <FormContainer>
      <Input {...IDBoxStyles} onChange={props.handleIDChange}></Input>
      <Input {...PWBoxStyles} onChange={props.handlePWChange}></Input>
      <SubContainer>
        <CheckContainer>
          <CheckBox
            checked={props.sustainLoginCheck}
            onChange={props.handleCheckChange}
          />
          <span
            style={{
              marginLeft: 10,
              verticalAlign: "middle",
              fontSize: "20px",
            }}
          >
            {"아이디 저장"}
          </span>
        </CheckContainer>
        <SubmenuContainer>
          <SubMenu {...SubBtnStyles} />
        </SubmenuContainer>
      </SubContainer>
    </FormContainer>
  );
};

export default InputFrame;
