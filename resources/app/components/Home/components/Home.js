import React from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "./SearchBar";
import HumansList from "./HumansList";
import PropTypes from "prop-types";


const Home = ({ data, fetchHumans, setSearchTerm }) => (
    <Grid container>
        <Grid item xs={12}>
            <SearchBar setSearchTerm={setSearchTerm} />
        </Grid>

        <Grid item xs={12}>
            <HumansList fetchHumans={fetchHumans} data={data} />
        </Grid>
    </Grid>
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