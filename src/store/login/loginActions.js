import { LOGIN_USER_REQUEST,LOGIN_USER , LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS,} from "./loginActionTypes";

export const loginUserRequest = ()  => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};
export const loginUserSuccess = ()  => {
  return {
    type: LOGIN_USER_SUCCESS,
  };
};
export const loginUserFailure = (errorMessage)  => {
  return {
    type: LOGIN_USER_FAILURE,
    errorMessage: errorMessage
  };
};
