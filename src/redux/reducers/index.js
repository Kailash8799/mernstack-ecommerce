import { combineReducers } from "redux";
import { productReducer } from "./productreducer";

const reducers = combineReducers({
    allProducts : productReducer
})

export default reducers