import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import NavBar from "./NavBar";
import * as Actions from "./NavBarActions";
import * as FacebookActions from "../FacebookActions";

const mapStateToProps = ({FacebookReducer}) =>{
    return{
        name : FacebookReducer.data.name,
        data: FacebookReducer.data 
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
    actions: bindActionCreators(Actions, dispatch),
    FacebookActions: bindActionCreators(FacebookActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);