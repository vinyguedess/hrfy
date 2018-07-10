import React from "react";
import PropTypes from "prop-types";


const HumansListPager = ({ total, limit, fetchHumans }) => 
{

    const totalButtons = total / limit;

    return (
        <div>
            {
                Array.apply(null, Array(totalButtons)).map((p, key) => (
                    <button key={`table-human-page-${key}`} onClick={fetchHumans(limit, (key - 1) * total)}>
                        {key + 1}
                    </button>
                ))
            }
        </div>
    );
};


HumansListPager.propTypes = {
    total: PropTypes.number.isRequired,

    limit: PropTypes.number.isRequired,

    fetchHumans: PropTypes.func.isRequired
};


export default HumansListPager;