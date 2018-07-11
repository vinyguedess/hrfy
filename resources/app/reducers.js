import { combineReducers } from "redux";
import home from "./components/Home/reducer";
import view from "./components/View/reducer";


export default combineReducers({
    home,
    view
});