import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import Facebook from "./Facebook";
import * as Actions from "./FacebookActions";

const mapStateToProps = ({FacebookReducer}) =>{
    return{
        data : FacebookReducer.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
    actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Facebook);