import React from "react";
import PropTypes from "prop-types";
import HumansListPager from "./HumansListPager";


const HumansList = ({ fetchHumans, data }) => 
{
    fetchHumans();

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.list.map((human, key) => (
                            <tr key={`table-humans-${key}`}>
                                <td><img src={human.picture} /></td>
                                <td>{human.name}</td>
                                <td>{human.email}</td>
                                <td>{human.phone}</td>
                                <td>
                                    <a href={`/view/${human._id}`}>
                                        View
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">
                            {
                                data.total ?
                                    <HumansListPager total={data.total} limit={data.limit} offset={data.offset} fetchHumans={fetchHumans} /> :
                                    null
                            }
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div >
    );
};


HumansList.propTypes = {

    fetchHumans: PropTypes.func.isRequired,

    data: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        total: PropTypes.number.isRequired,
        limit: PropTypes.number.isRequired,
        offset: PropTypes.number.isRequired,
        list: PropTypes.array.isRequired
    }).isRequired

};


export default HumansList;