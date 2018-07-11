import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import View from "./components/View";
import { fetchHumansById } from "./actions";


const mapStateToProps = ({ view }) => ({
    human: view.human
});


const mapDispatchToProps = dispatch => ({
    fetchHumanById(id) 
    {
        dispatch(fetchHumansById(id));
    }
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(View));