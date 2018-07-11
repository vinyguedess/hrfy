import React from "react";
import PropTypes from "prop-types";


const SearchBar = ({ setSearchTerm }) => (
    <div>
        <input type="text" placeholder="Search" onChange={e => setSearchTerm(e.target.value)} />
    </div >
);


SearchBar.propTypes = {
    setSearchTerm: PropTypes.func.isRequired
};


export default SearchBar;