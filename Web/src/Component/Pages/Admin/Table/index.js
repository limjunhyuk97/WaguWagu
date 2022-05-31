import {
  StoreContainer,
  FlexContainer,
  LeftContainer,
  RightContainer,
} from "./styles";

import Header from "@Organisms/Header/";
import Footer from "@Organisms/Footer/";
import Title from "./Title";
import TableAdd from "./TableAdd";
import TableDetail from "./TableDetail";

import { USER_KEY, USER_NAME, removeCookie, getCookie } from "@Util/cookie";
import { scrollTop } from "@Util/scrollTop";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTableInfo, postTableInfo, deleteTableInfo } from "@API/";

const AdminTable = () => {
  // login
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(false);

  // data
  const [data, setData] = useState({});
  const [newTable, setNewTable] = useState({
    name: "",
    description: "",
    maxCustomerCount: 0,
    minOrderAmout: 0,
  });

  //render
  const [render, setRender] = useState(true);

  const handleLoginout = (menuName, linkTo) => {
    if (menuName === "로그아웃") {
      setLoginStatus(false);
      removeCookie(USER_KEY);
      removeCookie(USER_NAME);
    }
    navigate(linkTo);
  };

  // TableList
  // Add Table : 다른 효율적인 방법을 찾고 싶다.. 일단은 진행..!
  const handleTableInput = (e) => {
    switch (e.target.id) {
      case "new-name":
        setNewTable((prev) => ({
          ...prev,
          name: e.target.value,
        }));
        break;
      case "new-description":
        setNewTable((prev) => ({
          ...prev,
          description: e.target.value,
        }));
        break;
      case "new-maxCustomerCount":
        setNewTable((prev) => ({
          ...prev,
          maxCustomerCount: e.target.value,
        }));
        break;
      case "new-minOrderAmount":
        setNewTable((prev) => ({
          ...prev,
          minOrderAmount: e.target.value,
        }));
        break;
      default:
        break;
    }
  };

  const handleTableAdd = async (e) => {
    const userID = getCookie(USER_KEY);
    await postTableInfo({ userID: userID, data: newTable })
      .then((res) => {
        alert("테이블 정보가 추가되었습니다!");
        setRender((cur) => !cur);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Adjust Table
  const handleModify = (e) => {};

  // Enable Table
  const handleSleepAndWake = () => {};

  // Delete Table
  const handleDelete = async (e) => {
    const userID = getCookie(USER_KEY);
    console.log(e.target.dataset.tableid);
    await deleteTableInfo({
      userID: userID,
      tableID: e.target.dataset.tableid,
    })
      .then((res) => {
        alert("테이블 제거가 완료되었습니다!");
        setRender((cur) => !cur);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // UseEffect
  useEffect(() => {
    scrollTop();
    const status = getCookie(USER_KEY);
    if (status) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
    getTableInfo(status).then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    const status = getCookie(USER_KEY);
    getTableInfo(status).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [render]);

  return (
    <>
      <Header loginStatus={loginStatus} onClick={handleLoginout} />
      <Title />
      <StoreContainer>
        <FlexContainer>
          <LeftContainer style={{ marginRight: "20px" }}>
            <TableAdd
              handleTableInput={handleTableInput}
              handleTableAdd={handleTableAdd}
            />
            <TableDetail
              tables={data.tables}
              modify={handleModify}
              sleepAndWake={handleSleepAndWake}
              delete={handleDelete}
            />
          </LeftContainer>
          <RightContainer style={{ marginLeft: "20px" }}></RightContainer>
        </FlexContainer>
      </StoreContainer>
      <Footer />
    </>
  );
};

export default AdminTable;
