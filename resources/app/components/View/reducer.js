import { VIEW_RECEIVE_HUMAN } from "./actions";


export default (state, action) => 
{
    switch (action.type) 
    {
    case VIEW_RECEIVE_HUMAN:
        return {
            ...state,
            human: action.human
        };
    default:
        return state || {
            human: null
        };
    }
};