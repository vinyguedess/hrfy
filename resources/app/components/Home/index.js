import { connect } from "react-redux";
import Home from "./components/Home";
import { fetchHumans, setSearchTerm } from "./actions";


const mapStateToProps = ({ home }) => ({
    data: {
        ...home.data,
        list: home.data.list || []
    }
});

const mapDispatchToProps = dispatch => ({
    setSearchTerm(term) 
    {
        dispatch(setSearchTerm(term));
    },
    fetchHumans(limit = 10, offset = 0, paginate=false) 
    {
        dispatch(fetchHumans(limit, offset, paginate));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);