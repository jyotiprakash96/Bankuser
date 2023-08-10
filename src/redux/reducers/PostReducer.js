import { GET_POST_LIST } from "../ActionTypes/ActionTypes";
import { initialuserdata } from "../store/initialStore";

export default function PostReducer(state = initialuserdata, action) {
      const { type, payload } = action;
    
      switch (type) {
        case GET_POST_LIST:
          return {
            ...state,
            postList: payload,
          };
        
        default:
          return state;
      }
    }