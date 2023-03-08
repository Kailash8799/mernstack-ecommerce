import { ActionType } from "../contants/action-type";

const initialState = {
    products:[]
}

export const productReducer = (state=initialState, {type,payload})=>{
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return {...state, products:payload}
        
        case ActionType.SELECTED_PRODUCT:
            return {...state,products:payload}
        
        case ActionType.REMOVE_SELECTED_PRODUCT:
            return {...state,products:[]}
        
        default:
            return state
    }
}