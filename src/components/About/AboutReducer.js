import Constants from "./AboutConstants"
const initState ={
    data:{},
    loading:true
}


const AboutReducer = (state = initState, action) =>{
switch(action.type){
    case Constants.GET_USER_DATA_SUCCESS:
        return Object.assign({}, state,{
            data:action.data,
            loading:false
        })
    case Constants.GET_DATA:
        return Object.assign({}, state,{
            loading:true
        })
        default:
            return state;
        }
        
        }
        
export default AboutReducer;