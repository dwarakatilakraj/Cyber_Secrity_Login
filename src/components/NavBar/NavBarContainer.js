import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import NavBar from "./NavBar";
import * as FacebookActions from "../FacebookActions";

const mapStateToProps = ({FacebookReducer}) =>{
    return{
        name : FacebookReducer.data.name,
        data: FacebookReducer.data 
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
    FacebookActions: bindActionCreators(FacebookActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);