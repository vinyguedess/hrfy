import { HUMANS_REQUEST_LIST, HUMANS_RECEIVE_LIST, HUMANS_SET_SEARCH_TERM } from "./actions";


export default (state, action) => 
{
    switch (action.type) 
    {
    case HUMANS_REQUEST_LIST:
        return {
            ...state,
            data: {
                ...state.data,
                isFetching: true
            }
        };
    case HUMANS_RECEIVE_LIST:
        return {
            ...state,
            data: {
                isFetching: false,
                limit: action.limit,
                offset: action.offset,
                list: action.data,
                total: action.total
            }
        };
    case HUMANS_SET_SEARCH_TERM:
        return {
            ...state,
            data: {
                ...state.data,
                refresh: true
            },
            searchTerm: action.term
        };
    default:
        return state || {
            data: {
                isFetching: false,
                limit: 0,
                offset: 10,
                list: null,
                total: 0
            }
        };
    }
};