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
import { getRestaurantInfo, putRestaurantInfo } from "@API";

const AdminTable = () => {
  const navigate = useNavigate();

  // states

  const [loginStatus, setLoginStatus] = useState(false);

  // store data
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [atm, setAtm] = useState(0);

  // menu data
  const [menu, setMenu] = useState([]);

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

  // handle initial asynchronous get
  const handleMenuFetch = async (params) => {
    if (params) setLoginStatus(true);
    else setLoginStatus(false);
    await getRestaurantInfo(params).then((res) => {
      setData(res.data);
      setName(res.data.name);
      setDescription(res.data.description);
      setAtm(res.data.arriveTimeoutMinutes);
      setMenu(res.data.menu);
    });
  };

  // handle Store Data
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAtmChange = (val) => {
    setAtm(val);
    console.log(atm);
  };

  const store_obj = [
    { id: "name", obj: setName, val: name },
    { id: "description", obj: setDescription, val: description },
    { id: "arriveTimeoutMinutes", obj: setAtm, val: atm },
  ];

  const handleClick = async (e) => {
    const objMatches = store_obj.map((el) => {
      return {
        el,
        isMatch: el.id === e.target.id,
      };
    });

    const userID = getCookie(USER_KEY);
    const matchingSet = objMatches.find((el) => el.isMatch);
    setData((data) => {
      data[matchingSet.el.id] = matchingSet.el.val;
    });
    console.log(matchingSet);
    await putRestaurantInfo({
      id: userID,
      data: {
        address: data.address,
        addressDetail: data.addressDetail,
        arriveTimeoutMinutes: data.arriveTimeoutMinutes,
        category: data.category,
        description: data.description,
        name: data.name,
        tel: data.tel,
      },
    })
      .then((res) => {
        alert("식당 정보가 변경되었습니다!");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // ============= right page ============= //

  // ============= useEffect ============= //

  useEffect(() => {
    const status = getCookie(USER_KEY);
    scrollTop();
    handleMenuFetch(status);
  }, []);

  return (
    <>
      <Header loginStatus={loginStatus} onClick={handleLoginout} />
      <Title />
      <StoreContainer>
        <FlexContainer>
          <LeftContainer style={{ marginRight: "20px" }}>
            <Img />
            <Store
              name={name}
              atm={atm}
              description={description}
              handleNameChange={handleNameChange}
              handleAtmChange={handleAtmChange}
              handleDescriptionChange={handleDescriptionChange}
              handlePost={handleClick}
            />
          </LeftContainer>
          <RightContainer style={{ marginLeft: "20px" }}>
            <MenuAdd />
            <MenuDetail />
          </RightContainer>
        </FlexContainer>
      </StoreContainer>
      <Footer />
    </>
  );
};

export default AdminTable;
