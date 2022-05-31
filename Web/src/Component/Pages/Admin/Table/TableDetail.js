import {
  EditContainer,
  EditText,
  TableContainer,
  TableDataContainer,
  TableImg,
  TableData,
  Btn,
  TableDataLabel,
} from "./styles";

import { TABLE_IMG } from "@Common";
import { useEffect } from "react";

const TableDetail = (props) => {
  const renderItems = () => {
    // props.menu가 내려왔을 때 rendering을 시켜주어야 함
    // data- 로 시작하는 속성으로 특정 값을 DOM내부에 저장해줄 수 있다.
    if (props.tables)
      return props.tables.map((el) => {
        return (
          <TableContainer style={{ margin: "1px 0px -3px 0px" }}>
            <TableImg src={TABLE_IMG} />
            <TableDataContainer>
              <TableData
                defaultValue={el.name}
                style={{ backgroundColor: "#ffffff" }}
              ></TableData>
              <TableDataLabel>테이블 명</TableDataLabel>
              <TableData
                defaultValue={el.description}
                style={{ backgroundColor: "#ffffff" }}
              ></TableData>
              <TableDataLabel>설명</TableDataLabel>
              <TableData
                defaultValue={el.maxCustomerCount}
                style={{ backgroundColor: "#ffffff" }}
              ></TableData>
              <TableDataLabel>인원 제한</TableDataLabel>
              <TableData
                defaultValue={el.minOrderAmount}
                style={{ backgroundColor: "#ffffff" }}
              ></TableData>
              <TableDataLabel>최소주문금액</TableDataLabel>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Btn
                  style={{
                    width: "80px",
                    margin: "10px",
                  }}
                  onClick={props.modify}
                  data-tableid={el.id}
                >
                  수정
                </Btn>
                <Btn
                  style={{
                    width: "100px",
                    margin: "10px 30px 10px 10px",
                  }}
                  onClick={props.sleep}
                  data-tableid={el.id}
                >
                  비활성
                </Btn>
              </div>
            </TableDataContainer>
          </TableContainer>
        );
      });
    else return;
  };

  // props.menu가 내려왔을 때 그때 rendering을 한번 더 시켜줌
  useEffect(() => {}, [props.tables]);

  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <EditContainer style={{ marginLeft: "410px" }}>
          <EditText>{"활성 / 비활성 처리"}</EditText>
        </EditContainer>
      </div>

      <div style={{ height: "1000px", overflow: "auto" }}>{renderItems()}</div>
    </>
  );
};

export default TableDetail;
