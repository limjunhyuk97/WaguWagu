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

const styles = { backgroundColor: "#ffffff", height: "36px", textSize: "24px" };

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
              <div>
                <TableData
                  defaultValue={el.name}
                  style={{ ...styles }}
                ></TableData>
                <TableDataLabel>테이블 명</TableDataLabel>
              </div>
              <div>
                <TableData
                  defaultValue={el.description}
                  style={{ ...styles }}
                ></TableData>
                <TableDataLabel>설명</TableDataLabel>
              </div>
              <div>
                <TableData
                  defaultValue={el.maxCustomerCount}
                  style={{ ...styles }}
                ></TableData>
                <TableDataLabel>인원 제한</TableDataLabel>
              </div>
              <div>
                <TableData
                  defaultValue={el.minOrderAmount}
                  style={{ ...styles }}
                ></TableData>
                <TableDataLabel>최소주문금액</TableDataLabel>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "10px",
                }}
              >
                <Btn
                  style={{
                    width: "80px",
                  }}
                  onClick={props.modify}
                  data-tableid={el.id}
                >
                  수정
                </Btn>
                <Btn
                  style={{
                    width: "100px",
                    marginLeft: "10px",
                  }}
                  onClick={props.sleep}
                  data-tableid={el.id}
                >
                  비활성
                </Btn>
                <Btn
                  style={{
                    width: "80px",
                    marginLeft: "10px",
                  }}
                  onClick={props.delete}
                  data-tableid={el.id}
                >
                  삭제
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
