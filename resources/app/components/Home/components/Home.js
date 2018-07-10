import React from "react";
import SearchBar from "./SearchBar";
import HumansList from "./HumansList";
import PropTypes from "prop-types";


const Home = ({ data, fetchHumans, setSearchTerm }) => (
    <div>
        <SearchBar setSearchTerm={setSearchTerm} />
        <HumansList fetchHumans={fetchHumans} data={data} />
    </div>
);


Home.propTypes = {
    data: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        total: PropTypes.number.isRequired,
        limit: PropTypes.number.isRequired,
        offset: PropTypes.number.isRequired,
        list: PropTypes.array.isRequired
    }).isRequired,

    fetchHumans: PropTypes.func.isRequired,

    setSearchTerm: PropTypes.func.isRequired
};


export default Home;