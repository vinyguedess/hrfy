import Axios from "axios";


const shouldFetchHumanById = ({ view }) => 
{
    if (!view.human)
        return true;

    return false;
};


export const fetchHumansById = id => (dispatch, getState) => 
{
    if (shouldFetchHumanById(getState())) 
    {
        dispatch(requestHumanById());
        Axios.get(`/api/humans/${id}`)
            .then(({ data }) => dispatch(receiveHumanById(data)));
    }
};


export const VIEW_REQUEST_HUMAN = "VIEW:REQUEST_HUMAN";
const requestHumanById = () => ({ type: VIEW_REQUEST_HUMAN });


export const VIEW_RECEIVE_HUMAN = "VIEW:RECEIVE_HUMAN";
const receiveHumanById = human => ({ type: VIEW_RECEIVE_HUMAN, human });