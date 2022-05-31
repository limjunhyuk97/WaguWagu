import {
  DescriptionTitle,
  DescriptionText,
  DescriptionTextArea,
  TimeControl,
  InnerButton,
  InnerText,
  Btn,
} from "./styles";

import { useState, useEffect } from "react";

const convertMinute = (minute) => {
  let hour = parseInt(minute / 60);
  let min = minute % 60;
  return { hour: hour, min: min };
};

const StoreDetail = (props) => {
  const [atm, setAtm] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  useEffect(() => {
    setAtm(props.atm);
    setHour(convertMinute(atm).hour);
    setMinute(convertMinute(atm).min);
    console.log(props.atm);
  }, []);

  const handleAdder = () => {
    setAtm((prev) => prev + 10);
    setHour(convertMinute(atm).hour);
    setMinute(convertMinute(atm).min);
    props.handleAtmChange(atm);
    console.log(props.atm);
  };

  const handleDeduction = () => {
    setAtm((prev) => prev - 10);
    setHour(convertMinute(atm).hour);
    setMinute(convertMinute(atm).min);
    props.handleAtmChange(atm);
    console.log(props.atm);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <DescriptionTitle style={{ marginBottom: "20px", marginTop: "20px" }}>
          매장명
        </DescriptionTitle>
        <DescriptionText
          onChange={props.handleNameChange}
          value={props.name || ""}
        />
        <Btn
          id="name"
          style={{ marginLeft: "350px", marginTop: "20px" }}
          onClick={props.handlePost}
        >
          수정
        </Btn>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <DescriptionTitle style={{ marginBottom: "20px", marginTop: "20px" }}>
          매장설명
        </DescriptionTitle>
        <DescriptionTextArea
          onChange={props.handleDescriptionChange}
          defaultValue={props.description || ""}
        ></DescriptionTextArea>
        <Btn
          id="description"
          style={{ marginLeft: "350px", marginTop: "20px" }}
          onClick={props.handlePost}
        >
          수정
        </Btn>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <DescriptionTitle style={{ marginBottom: "20px", marginTop: "20px" }}>
          최대 방문 대기 시간 설정
        </DescriptionTitle>
        <TimeControl>
          <InnerButton onClick={handleDeduction}>- 10</InnerButton>
          <InnerText>{`${hour < 10 ? `0${hour}` : `${hour}`} : ${
            minute / 10 ? `${minute}` : `0${minute}`
          }`}</InnerText>
          <InnerButton onClick={handleAdder}>+ 10</InnerButton>
        </TimeControl>
        <Btn
          id="arriveTimeoutMinutes"
          style={{ marginLeft: "350px", marginTop: "20px" }}
          onClick={props.handlePost}
        >
          수정
        </Btn>
      </div>
    </>
  );
};

export default StoreDetail;
