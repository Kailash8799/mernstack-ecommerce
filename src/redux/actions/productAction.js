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
    }
}

export const addTocart = (product)=>{
    return{
        type:ActionType.ADD_TO_CART,
        payload:product
    }
}
export const removeFromcart = ()=>{
    return{
        type:ActionType.REMOVE_FROM_CART
    }
}

export const incrementCartItem = (slug,price,title,size,color)=>{
    const product = {slug,price,title,size,color}
    return{
        type:ActionType.ADD_TO_CART,
        payload:product
    }
}
export const decrementCartItem = (slug)=>{
    const product = {slug}
    return{
        type:ActionType.DEC_ITEM_IN_CART,
        payload:product
    }
}