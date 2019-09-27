import { LOGIN_USER_REQUEST,LOGIN_USER , LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE,} from "./loginActionTypes";
const initialState = {
  loggedIn: false,
  loading: false,
  errorMessage: ""
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        loading: false
      };
    }
    case LOGIN_USER_FAILURE: {
      return {
        ...state,
        loggedIn: false,
        loading: false,
        errorMessage:action.errorMessage
      };
    }


  }
  return state;
};
export default loginReducer;

