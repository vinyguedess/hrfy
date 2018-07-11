import React from "react";
import PropTypes from "prop-types";


const ViewFormation = ({ formation }) => (
    <div>
        <div>
            <small>Institution</small>
            <h3>{formation.institution}</h3>
        </div>

        <div>
            <small>Course</small>
            <h3>{formation.course}</h3>
        </div>

        <div>
            <small>Period</small>
            <h3>
                {formation.startDate} {"->"} {formation.isConcluded ? formation.endDate : "Current"}
            </h3>
        </div>
    </div>
);


ViewFormation.propTypes = {
    formation: PropTypes.shape({
        institution: PropTypes.string.isRequired,
        course: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        isConcluded: PropTypes.bool.isRequired
    }).isRequired
};


export default ViewFormation;