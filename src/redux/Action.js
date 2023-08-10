import axios from "axios";
import { GET_POST_LIST } from "./ActionTypes/ActionTypes";

export const getPostData = async (id,dispatch) => {
    const url = process.env.REACT_APP_URL + "users/" + id + "/posts";
    console.log(url);
    await axios
      .get(url)
      .then(function (response) {
        dispatch({
          type: GET_POST_LIST,
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };