import Constants from "./AboutConstants"
import axios from 'axios';
// import { bindActionCreators } from "../../../../../../AppData/Local/Microsoft/TypeScript/3.4.5/node_modules/redux/index.js";


export function getUserDataSuccess (data){
    return{
        type:Constants.GET_USER_DATA_SUCCESS,
        data
    }
}

export function loadData (){
    return{
        type:Constants.GET_DATA,
        
    }
}


export function getData(){
      const url = " https://randomuser.me/api/ ";
    return(dispatch) =>{
        axios.get(url,{
            // headers:Headers
        })
        .then((response) =>{
            if(response.status === 200){
            const data = response.data.results;
            dispatch(getUserDataSuccess(data))
            }else if(response.data.code === 400 ){
                console.log("data!!!!", response); 
            }
        }).catch((error) => {
            console.log("logged Error", error.message);
        })
    }
}