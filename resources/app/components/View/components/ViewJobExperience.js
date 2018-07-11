import React from "react";
import PropTypes from "prop-types";


const ViewJobExperience = ({ experience }) =>
    (
        <div>
            <div>
                <small>Company</small>
                <h3>{experience.companyName}</h3>
            </div>

            <div>
                <small>Role</small>
                <h3>{experience.role}</h3>
            </div>

            <div>
                <small>Period</small>
                <h3>{experience.startDate} {"->"} {experience.endDate}</h3>
            </div>
        </div>
    );


ViewJobExperience.propTypes = {
    experience: PropTypes.shape({
        companyName: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired
    }).isRequired
};


export default ViewJobExperience;