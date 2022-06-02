import { Btn, RequestContainer } from "./styles";

import { deleteReservationInfo } from "@API";

const RequestComplete = (props) => {
  const handleFinished = async (e) => {
    await deleteReservationInfo(props.el.id)
      .then(() => {
        props.modify();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <RequestContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "30px",
          fontWeight: "700",
          margin: "25px 0px",
          padding: "0px 20px",
        }}
      >
        <h2
          style={{
            display: "flex",
          }}
        >
          {`테이블 ${props.el.table.name}`}
          <span style={{ marginLeft: "15px", color: "red" }}>{"수락"}</span>
        </h2>
        <h3 style={{ color: "red" }}>12:50 방문 예정</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "10px",
          marginTop: "20px",
        }}
      >
        <Btn style={{ width: "160px" }} onClick={handleFinished}>
          방문 완료
        </Btn>
      </div>
    </RequestContainer>
  );
};

export default RequestComplete;
