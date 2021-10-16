import Constants from "./Constants.js"
const initState ={
    data:{},
}


const FacebookReducer = (state = initState, action) =>{
switch(action.type){
    case Constants.GET_USER_INFO:
        return Object.assign({}, state,{
            data:action.response
        })
    case Constants.LOG_OUT:
            return Object.assign({}, state,{
                data:{}
            })
    default:
    return state;
}

}


export default FacebookReducer;