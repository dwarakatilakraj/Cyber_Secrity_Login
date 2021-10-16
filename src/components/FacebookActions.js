
import Constants from "./Constants.js"
// import axios from 'axios';
// import { bindActionCreators } from "../../../../../../AppData/Local/Microsoft/TypeScript/3.4.5/node_modules/redux/index.js";

export function getData (response){
    return (dispatch) =>{
        dispatch({type:Constants.GET_USER_INFO, response})
    }
}
export function logOut (){
    return (dispatch) =>{
        dispatch({type:Constants.LOG_OUT})
    }
}

