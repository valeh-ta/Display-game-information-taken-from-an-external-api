/* 
Error :  has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

import axios from "axios";
import { gameDetailsURL } from "../../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
    },
  });
};
 */
export const loadDetail = (gameData) => (dispatch) => {
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: gameData,
    },
  });
};

export const emptyDetail = () => {
  return {
    type: "EMPTY_DETAIL",
    payload: {
      game: {},
    },
  };
};
