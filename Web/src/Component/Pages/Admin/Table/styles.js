import styled, { css } from "styled-components";
import { DefaultColor } from "@Common/Style";

// Button Styling
const sharedBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 800;
  font-size: 25px;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #d0d2e0;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;
  transition: 0.2s;
  &:hover {
    color: #ffffff;
    border-color: ${DefaultColor};
    background-color: ${DefaultColor};
    cursor: pointer;
  }
`;

const Btn = styled.button`
  width: 121px;
  height: 40px;
  ${sharedBtn}
`;

// Common
const StoreContainer = styled.div`
  margin: 100px 30px;
`;

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditContainer = styled.div`
  margin: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const EditVector = styled.img`
  margin: 5px;
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

const EditText = styled.div`
  margin: 5px 0px 5px 5px;
  font-size: 25px;
  font-weight: 800;
  text-align: center;
  color: ${DefaultColor};
`;

// Title
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubTitleText = styled.h3`
  font-size: 20px;
  font-weight: 800;
  margin: 100px 0px 8px 100px;
`;

const TitleText = styled.h1`
  font-size: 60px;
  font-weight: 800;
  margin: 20px 0px 8px 100px;
`;

// Table
const TableContainer = styled.div`
  width: 610px;
  height: 300px;
  display: flex;
  align-items: center;
  border-top: 2px solid #fdb165;
  border-bottom: 2px solid #fdb165;
`;

const TableDataContainer = styled.div``;

const TableImg = styled.img`
  width: 314px;
  height: 250px;
  margin-right: 10px;
`;

const TableData = styled.input`
  width: 150px;
  height: 40px;
  margin: 5px;
  border: 1px solid #d0d2e0;
  border-radius: 5px;
  color: #000000;
  font-weight: 700;
  font-size: 20px;
  ::placeholder {
    color: #d0d2e0;
    font-weight: 600;
    font-size: 20px;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px ${DefaultColor};
    ::placeholder {
      opacity: 0;
    }
  }
`;

const TableDataLabel = styled.label``;

export {
  Btn,
  StoreContainer,
  FlexContainer,
  LeftContainer,
  RightContainer,
  EditContainer,
  EditVector,
  EditText,
  TitleContainer,
  SubTitleText,
  TitleText,
  TableContainer,
  TableDataContainer,
  TableImg,
  TableData,
  TableDataLabel,
};
