import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const ViewTags = ({ tags }) =>
    (
        <div>
            {
                tags ?
                    tags.map((tag, key) =>
                        <Link to="/" key={`view-profile-tags-${key}`}>{`#${tag}`}</Link>)
                    :
                    "Loading tags"
            }
        </div>
    );


ViewTags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
};


export default ViewTags;