import React, { useEffect, useState } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart();

  // Function to add a product to the cart
  const addToCart = product => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  // Fetch the products from the server on component mount
  useEffect(() => {
    fetch("https://sky-mart-servers.onrender.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto p-10 ">
      <h1 className="text-3xl font-bold mb-10">
        All <span className="text-sky-500">Product</span>
      </h1>
      <div className="lg:grid grid-cols-4 gap-8">
        {/* Map through the products and render a card for each */}
        {products.map(product => (
          <div key={product?._id}>
            <div className="card card-compact  bg-gray-100 h-[500px] mb-10 lg:mb-0">
              <figure>
                <img src={product?.image} alt={product?.title} />
              </figure>
              <div className="card-body bg-white border rounded-b-xl">
                <h2 className="card-title">{product?.title}</h2>
                <p>{product?.description.slice(0, 60)}</p>
                <div className="card-actions mt-5 justify-between items-center">
                  <div>
                    {/* Button to add the product to the cart */}
                    <button onClick={() => addToCart(product)} className="btn ">
                      <RiAddCircleFill className="text-lg" /> Add to cart
                    </button>
                  </div>
                  {/* Button to view product details */}
                  <Link to={`/product/${product?._id}`}>
                    <button className="btn btn-info text-white">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
