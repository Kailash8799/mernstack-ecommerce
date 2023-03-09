import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import { Link } from "react-router-dom";
const url = "http://localhost:5000/api/shop/allproduct";

const Mens = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            gender: "Men",
          }),
        });
        const data = await response.json();
        dispatch(setProducts(data.data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  return (
    <div>
      {products && (
        <div>
          <section style={{ backgroundColor: "#eee" }}>
            <div class="text-center container py-5">
              <h4 class="mt-4 mb-5">
                <strong>Bestsellers</strong>
              </h4>
              <div class="row mx-4">
                {Object.keys(products).map((data) => {
                  return (
                    <div key={data} class="col-lg-3 col-md-6 mb-4">
                          <Link  to={`/product/${products[data].slug}`}>
                          <div class="card">
                            <div
                              class="bg-image hover-zoom ripple"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src={products[data].image}
                                class="w-72 h-72 max-h-72 mx-auto"
                                alt=""
                              />
                              <Link to={`/product/${products[data].slug}`}>
                                <div class="mask">
                                  <div class="d-flex justify-content-start align-items-end h-100">
                                    <h5>
                                      <span class="badge bg-danger ms-2">
                                        {products[data].discount * 100}%
                                      </span>
                                    </h5>
                                  </div>
                                </div>
                                <div class="hover-overlay">
                                  <div
                                    class="mask"
                                    style={{
                                      backgroundColor:
                                        "rgba(251, 251, 251, 0.15)",
                                    }}
                                  ></div>
                                </div>
                              </Link>
                            </div>
                            <div class="card-body">
                              <Link to={`/product/${products[data].slug}`} class="text-reset">
                                <h5 class="card-title mb-3">{products[data].title}</h5>
                              </Link>
                              <Link to={`/product/${products[data].slug}`} class="text-reset">
                                <p>{products[data].category}</p>
                              </Link>
                              <h6 class="mb-3">
                                <s>₹{products[data].price}</s>
                                <strong class="ms-2 text-danger">₹{products[data].price - (products[data].price * products[data].discount)}</strong>
                              </h6>
                            </div>
                          </div>
                      </Link>
                        </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Mens;
