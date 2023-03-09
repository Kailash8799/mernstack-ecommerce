import { combineReducers } from "redux";
import { productReducer,selectedProductReducer,addTocartReducer } from "./productreducer";

const reducers = combineReducers({
    allProducts : productReducer,
    product : selectedProductReducer,
    cart : addTocartReducer,
})

export default reducers