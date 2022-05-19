import {
  FormContainer,
  SubContainer,
  CheckContainer,
  SubmenuContainer,
} from "./styles";

import Input from "@Atoms/Input";
import { Button } from "@Atoms/Buttons";
import CheckBox from "@Atoms/CheckBox";
import SubMenu from "@Organisms/Before";

import { IDBoxStyles, PWBoxStyles, SubmitBtnStyles } from "./constant";

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
            {...SubmitBtnStyles}
          />
          <span style={{ marginLeft: 10, verticalAlign: "middle" }}>
            {"아이디 저장"}
          </span>
        </CheckContainer>
        <SubmenuContainer>
          <Button>
            <SubMenu loginStatus={false} />
          </Button>
        </SubmenuContainer>
      </SubContainer>
    </FormContainer>
  );
};

export default InputFrame;
