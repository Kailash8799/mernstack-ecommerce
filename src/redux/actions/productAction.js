import { ActionType } from "../contants/action-type"

export const setProducts = (products)=>{
    return{
        type:ActionType.SET_PRODUCTS,
        payload:products
    }
}
export const selectedProducts = (product)=>{
    return{
        type:ActionType.SELECTED_PRODUCT,
        payload:product
    }
}
export const resetProducts = ()=>{
    return{
        type:ActionType.REMOVE_SELECTED_PRODUCT,
        payload:[]
    }
}