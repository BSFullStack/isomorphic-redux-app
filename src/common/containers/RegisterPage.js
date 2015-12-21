import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Register from '../components/Register';
import * as RegisterActions from '../actions/register';


function mapStateToProps(state) {
    return {
        register:state.register
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(RegisterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
