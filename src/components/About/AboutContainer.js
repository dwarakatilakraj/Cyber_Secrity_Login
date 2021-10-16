import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import About from "./About";
import * as Actions from "./AboutActions";

const mapStateToProps = ({AboutReducer}) =>{
    return{
        data : AboutReducer.data,
        loading: AboutReducer.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
    actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);