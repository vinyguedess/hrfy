import React from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";


const SearchBar = ({ setSearchTerm }) => (
    <div>
        <TextField id="hrfy-search" label="Search" onChange={e => setSearchTerm(e.target.value)} />
        {/* <input type="text" placeholder="Search" onChange={e => setSearchTerm(e.target.value)} /> */}
    </div >
);


SearchBar.propTypes = {
    setSearchTerm: PropTypes.func.isRequired
};


export default SearchBar;