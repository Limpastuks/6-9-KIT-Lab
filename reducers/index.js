import { combineReducers } from "redux";
import friendlist from "./userselect";

const allReducers = combineReducers({
  friends: friendlist
});

export default allReducers;
