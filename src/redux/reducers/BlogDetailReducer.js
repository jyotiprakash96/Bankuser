import { GET_POST_DETAILS, } from "../ActionTypes/ActionTypes";
import { initialpostDetails } from "../store/initialStore";

export default function BlogDetailReducer(state = initialpostDetails, action) {
      const { type, payload } = action;
    
      switch (type) {
        case GET_POST_DETAILS:
          return {
            ...state,
            postDetails: payload,
          };
        
        default:
          return state;
      }
    }