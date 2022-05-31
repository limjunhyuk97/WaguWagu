import {
  POST_ACCOUNT_INFO,
  GET_ID_DUP,
  POST_RESTAURANT_INFO,
  GET_RESTAURANT_INFO,
  PUT_RESTAURANT_INFO,
  POST_MENU_INFO,
} from "@Common/API";
import axios from "axios";

import { USER_KEY, getCookie } from "@Common/Util/cookie";

// login
export const postAccountInfo = async (params) => {
  return await axios.post(POST_ACCOUNT_INFO, JSON.stringify(params), {
    headers: { "Content-Type": `application/json` },
  });
};

// enroll
export const getIDValidation = async (params) => {
  return await axios.get(`${GET_ID_DUP}?email=${params}`);
};

export const postRestaurantInfo = async (params) => {
  return await axios.post(POST_RESTAURANT_INFO, JSON.stringify(params), {
    headers: { "Content-Type": `application/json` },
  });
};

// admin - store
export const getRestaurantInfo = async (params) => {
  return await axios.get(`${GET_RESTAURANT_INFO}/${params}`);
};

export const putRestaurantInfo = async (params) => {
  return await axios.put(
    `${PUT_RESTAURANT_INFO}/${params.id}`,
    JSON.stringify(params.data),
    {
      headers: { "Content-Type": `application/json` },
    }
  );
};

export const postMenuInfo = async (params) => {
  return await axios.post(
    `${POST_MENU_INFO}/${params.id}/menu`,
    JSON.stringify(params.data),
    {
      headers: { "Content-Type": `application/json` },
    }
  );
};
