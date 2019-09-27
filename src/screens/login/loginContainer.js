import Login from "./login"
import { connect } from "react-redux";
import {loginUserRequest, loginUserSuccess,loginUserFailure } from "../../store/login/loginActions"

const mapStateToProps = state => {
    return {
      loggedIn : state.login.loggedIn,
      errorMessage:state.login.errorMessage,
      loading: state.login.loading
   
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      loginRequest: ()=>{
        dispatch(loginUserRequest())
      },
      loginSuccess: () => {
        dispatch(loginUserSuccess());
      },
      loginFailure: (errorMessage)=>{
        dispatch(loginUserFailure(errorMessage))
      }
    };
  };

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);

  export default LoginContainer;