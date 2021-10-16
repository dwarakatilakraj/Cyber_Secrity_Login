import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import LogOut from "./Logout";
import * as Actions from "../FacebookActions";

const mapStateToProps = ({FacebookReducer}) =>{
    return{
        data : FacebookReducer.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
    FacebookActions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);