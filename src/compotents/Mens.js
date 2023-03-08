import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
const url = "http://localhost:5000/api/shop/allproduct";

const Mens = () => {
    const products = useSelector((state)=>state.allProducts.products)
    const dispatch = useDispatch()
    useEffect(() => {
      (async function(){
        try {
            const response = await fetch(url)
            const data = await response.json();
            dispatch(setProducts(data.data))
          } catch (error) {
            console.log(error);
          }
      }())
    }, [dispatch])
    
  return <div>
    {products && <div>
            {Object.keys(products).map((data)=>{
                return <h1 key={data}>{products[data].slug}</h1>
            })}
        </div>}
  </div>;
};

export default Mens;
