import { GET_USER_DETAILS } from "../ActionTypes/ActionTypes";
import { initialuserdata } from "../store/initialStore";

export default function UserReducer(state = initialuserdata, action) {
      const { type, payload } = action;
    
      switch (type) {
        case GET_USER_DETAILS:
          return {
            ...state,
            userdata: payload,
          };
        
        default:
          return state;
      }
    }