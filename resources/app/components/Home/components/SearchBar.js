import React from "react";
import PropTypes from "prop-types";


const SearchBar = ({ setSearchTerm }) => (
    <div>
        <form onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Search" onChange={e => setSearchTerm(e.target.value)} />
        </form>
    </div >
);


SearchBar.propTypes = {
    setSearchTerm: PropTypes.func.isRequired
};


export default SearchBar;