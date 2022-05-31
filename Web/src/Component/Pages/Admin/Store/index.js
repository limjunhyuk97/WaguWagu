import Header from "@Organisms/Header/";
import Footer from "@Organisms/Footer/";
import Title from "./Title";
import Img from "./Img";
import Store from "./StoreDetail";
import MenuAdd from "./MenuAdd";
import MenuDetail from "./MenuDetail";
import {
  FlexContainer,
  LeftContainer,
  RightContainer,
  StoreContainer,
} from "./styles";

import { USER_KEY, USER_NAME, removeCookie, getCookie } from "@Util/cookie";
import { scrollTop } from "@Util/scrollTop";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRestaurantInfo, putRestaurantInfo, postMenuInfo } from "@API";

const AdminTable = () => {
  const navigate = useNavigate();

  // states
  const [loginStatus, setLoginStatus] = useState(false);
  const [render, setRender] = useState(false);

  // store data
  const [data, setData] = useState({});

  // new menu data
  const [newName, setNewName] = useState("");
  const [newCost, setNewCost] = useState(0);

  // ============= left page ============= //

  // handle log-in/out
  const handleLoginout = (menuName, linkTo) => {
    if (menuName === "로그아웃") {
      setLoginStatus(false);
      removeCookie(USER_KEY);
      removeCookie(USER_NAME);
    }
    navigate(linkTo);
  };

  // handle Store Data
  const handleNameChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const handleDescriptionChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  };

  const handleAtmChange = (val) => {
    setData((prevState) => ({
      ...prevState,
      arriveTimeoutMinutes: val,
    }));
  };

  const handleClick = async (e) => {
    const userID = getCookie(USER_KEY);
    await putRestaurantInfo({
      id: userID,
      data: {
        address: data.address,
        addressDetail: data.addressDetail,
        arriveTimeoutMinutes: data.arriveTimeoutMinutes + 10,
        category: data.category,
        description: data.description,
        name: data.name,
        tel: data.tel,
      },
    })
      .then((res) => {
        alert("식당 정보가 변경되었습니다!");
        setRender((cur) => !cur);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // ============= right page ============= //
  // Add Item
  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNewCostChange = (e) => {
    setNewCost(e.target.value);
  };

  const handleAddItem = async (e) => {
    const userID = getCookie(USER_KEY);
    if (newName === "") {
      alert("메뉴를 입력하세요!");
      return;
    }
    await postMenuInfo({
      id: userID,
      data: { name: newName, price: newCost },
    })
      .then((res) => {
        alert("성공적으로 등록되었습니다");
        setData((cur) => {
          cur.menu.push({ name: newName, price: newCost });
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // ============= useEffect ============= //

  useEffect(() => {
    scrollTop();
    const status = getCookie(USER_KEY);
    if (status) setLoginStatus(true);
    else setLoginStatus(false);
    getRestaurantInfo(status).then((res) => {
      setData(res.data);
    });
  }, []);

  // render가 변경되면 useEffect 호출해서 맨 위로 끌어올리고 data 다시 받아오셈
  useEffect(() => {
    scrollTop();
    const status = getCookie(USER_KEY);
    getRestaurantInfo(status).then((res) => {
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
            <Img />
            <Store
              name={data.name}
              atm={data.arriveTimeoutMinutes}
              description={data.description}
              handleNameChange={handleNameChange}
              handleAtmChange={handleAtmChange}
              handleDescriptionChange={handleDescriptionChange}
              handlePost={handleClick}
            />
          </LeftContainer>
          <RightContainer style={{ marginLeft: "20px" }}>
            <MenuAdd
              handleNewNameChange={handleNewNameChange}
              handleNewCostChange={handleNewCostChange}
              handleAddItem={handleAddItem}
            />
            <MenuDetail menu={data.menu} />
          </RightContainer>
        </FlexContainer>
      </StoreContainer>
      <Footer />
    </>
  );
};

export default AdminTable;
