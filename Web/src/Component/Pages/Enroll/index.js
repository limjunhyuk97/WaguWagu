import Phase01 from "./Phase01";
import Phase02 from "./Phase02";

import { FullFrame } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getIDValidation } from "@API";

const Enroll = () => {
  // navigate
  const navigate = useNavigate();

  // Backwards
  const navigateBack = () => {
    navigate("/main");
  };

  // phase
  const [phaseAbled, setPhaseAbled] = useState(1);

  // Data for Post
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tell, setTell] = useState("");
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");

  // state OBJ
  const stateOBJS = [
    { id: "name", obj: setName, val: name },
    { id: "email", obj: setEmail, val: email },
    { id: "tell", obj: setTell, val: tell },
    { id: "id", obj: setID, val: id },
    { id: "pw", obj: setPW, val: pw },
  ];

  // Hooks for phase1
  const handleInput = (e) => {
    const objMatches = stateOBJS.map((el) => {
      return {
        el,
        isMatch: el.id === e.target.id,
      };
    });

    const matchingSet = objMatches.find((el) => el.isMatch);
    matchingSet.el.obj(e.target.value);
  };

  const emailVaildationCheck = async (e) => {
    if (id === "") {
      alert("아이디를 필수로 입력해주세요!");
      setPhaseAbled(1);
      return;
    }
    await getIDValidation(id)
      .then(() => {
        alert("이미 존재하는 아이디 입니다!");
        setPhaseAbled(1.5);
      })
      .catch(() => {
        alert("사용가능한 아이디입니다!");
        setPhaseAbled((cur) => {
          if (cur < 2) setPhaseAbled(1.7);
          else return cur;
        });
      });
  };

  const validationCheck01 = () => {
    const emptyStates = stateOBJS.filter((el) => el.val === "");
    if (emptyStates.length !== 0) {
      alert("빈 항목들을 채워주세요!");
      return;
    } else {
      if (phaseAbled < 1.7) {
        alert("아이디 중복확인을 진행해주세요!");
        return;
      }
      setPhaseAbled(2);
      return;
    }
  };

  // useEffect
  useEffect(() => {}, [phaseAbled, name, email, tell, id, pw]);

  // Render Component
  const renderItems = (phaseAbled) => {
    if (phaseAbled < 2)
      return (
        <Phase01
          onChange={handleInput}
          idCheck={emailVaildationCheck}
          phase={phaseAbled}
          onClick={validationCheck01}
          popBack={navigateBack}
        ></Phase01>
      );
    else if (phaseAbled >= 2 || phaseAbled < 3) return <Phase02></Phase02>;
    else return;
  };

  return <FullFrame>{renderItems(phaseAbled)}</FullFrame>;
};

export default Enroll;
