import {
  EnrollContainer,
  VectorContainer,
  TitleContainer,
  ProcedureContainer,
  ProcedureVector,
  ProcedureText,
  InputContainer,
  InputTitleContainer,
  InputTextContainer,
  DupCheckButton,
  SubmitButton,
} from "./styles";

import { LEFT_ARROW_VECTOR, PROCEDURE_VECTOR } from "@Common/";

const Phase01 = (props) => {
  return (
    <EnrollContainer>
      <VectorContainer src={LEFT_ARROW_VECTOR}></VectorContainer>
      <TitleContainer>{"와구와구 사장님 회원가입"}</TitleContainer>
      <ProcedureContainer>
        <ProcedureVector src={PROCEDURE_VECTOR} />
        <ProcedureText top={23} left={25}>
          {"개인정보 입력"}
        </ProcedureText>
        <ProcedureText top={23} left={275}>
          {"매장정보 입력"}
        </ProcedureText>
        <ProcedureText top={23} left={500}>
          {"회원가입 종료"}
        </ProcedureText>
      </ProcedureContainer>
    </EnrollContainer>
  );
};

export default Phase01;
