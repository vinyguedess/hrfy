import Axios from "axios";


const shouldFetchHumans = ({ home }) => 
{
    if (!home.data.isFetching && !home.data.list)
        return true;

    if (!home.data.isFetching && home.data.refresh)
        return true;

    return false;
};


export const fetchHumans = (limit, offset) => (dispatch, getState) => 
{
    const state = getState();
    if (shouldFetchHumans(state)) 
    {
        dispatch(requestHumans());
        return Axios.get("/api/humans", {
            params: {
                limit, offset, search: {
                    name: state.home.searchTerm || null
                }
            }
        })
            .then(({ data, headers }) => 
            {
                dispatch(receiveHumans({
                    data,
                    limit,
                    offset,
                    total: parseInt(headers["x-total-count"])
                }));
            });
    }
};


export const HUMANS_REQUEST_LIST = "HUMANS:REQUEST_LIST";
const requestHumans = () => ({ type: HUMANS_REQUEST_LIST });


export const HUMANS_RECEIVE_LIST = "HUMANS:RECEIVE_LIST";
const receiveHumans = ({ data, limit, offset, total }) => ({
    type: HUMANS_RECEIVE_LIST,
    data,
    limit,
    offset,
    total
});


export const HUMANS_SET_SEARCH_TERM = "HUMANS:SET_SEARCH_TERM";
export const setSearchTerm = term => ({ type: HUMANS_SET_SEARCH_TERM, term });