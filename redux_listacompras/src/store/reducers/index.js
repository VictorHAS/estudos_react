import { combineReducers } from "redux";

import list from "./list";
import form from "./form";

const reducers = combineReducers({
  list,
  form
});

export default reducers;
