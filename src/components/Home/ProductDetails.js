import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { RiAddCircleFill } from "react-icons/ri";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { dispatch } = useCart();

  // Function to add a product to the cart
  const addToCart = product => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  // Fetch the product details from the server based on the 'id' parameter
  useEffect(() => {
    fetch(`https://sky-mart-servers.onrender.com/product/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  return (
    <>
      <div className="container mx-auto p-10">
        <h1 className="text-3xl my-10 font-bold ">
          <span className="text-sky-500">Product</span> Details{" "}
        </h1>
        {/* Card to display product details */}
        <div className="lg:w-3/4 mx-auto card lg:card-side bg-white border shadow-lg">
          {/* Product image */}
          <div className="bg-gray-100 border rounded-l-lg">
            <img src={product?.image} alt={product.title} />
          </div>
          {/* Product details */}
          <div className="card-body">
            <h2 className="card-title">{product?.title}</h2>
            <p>{product?.description}</p>
            {/* Color variations */}
            <div className="card-actions justify-between items-center">
              <div className="flex flex-col gap-5">
                <div>
                  <ul className="lg:flex gap-4 items-center">
                    <h3 className="font-bold">Color :</h3>
                    {/* Map through color variations and display */}
                    {product?.variations?.map(variation => (
                      <li
                        className="border bg-white px-4 py-2 rounded-lg mb-2 lg:mb-0 shadow-lg"
                        key={variation?.id}
                      >
                        {variation?.color}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Size variations */}
                <div>
                  <ul className="lg:flex gap-4 items-center">
                    <h3 className="font-bold">Size :</h3>
                    {/* Map through size variations and display */}
                    {product?.variations?.map(variation => (
                      <li
                        className="mb-3 lg:mb-0 shadow-lg border bg-white px-4 py-2 rounded-lg"
                        key={variation?.id}
                      >
                        {variation?.size}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Button to add the product to the cart */}
              <button onClick={() => addToCart(product)} className="btn btn-info text-white">
                <RiAddCircleFill className="text-lg" /> Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
