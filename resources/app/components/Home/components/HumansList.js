import React from "react";
import PropTypes from "prop-types";
import { Button, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import HumansListPager from "./HumansListPager";


const HumansList = ({ fetchHumans, data }) => 
{
    fetchHumans();

    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>E-mail</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.list.map((human, key) => (
                            <TableRow key={`table-humans-${key}`}>
                                <TableCell><img src={human.picture} /></TableCell>
                                <TableCell>{human.name}</TableCell>
                                <TableCell>{human.email}</TableCell>
                                <TableCell>{human.phone}</TableCell>
                                <TableCell>
                                    {
                                        <Link to={`/view/${human._id}`}>
                                            <Button variant="fab" color="primary">
                                                <Search />
                                            </Button>
                                        </Link>
                                    }
                                </TableCell>
                            </TableRow>
                        ))
                    }
                    <TableRow>
                        <TableCell colSpan="4">
                            {
                                data.total ?
                                    <HumansListPager total={data.total} limit={data.limit} offset={data.offset} fetchHumans={fetchHumans} /> :
                                    null
                            }
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
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