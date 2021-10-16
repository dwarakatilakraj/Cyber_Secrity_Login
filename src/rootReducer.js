import FacebookReducer from "./components/FacebookReducer"
import AboutReducer from "./components/About/AboutReducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    FacebookReducer:FacebookReducer,
    AboutReducer:AboutReducer
});

export default rootReducer;