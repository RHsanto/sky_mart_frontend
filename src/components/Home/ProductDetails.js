import React from "react";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl my-10 font-bold">Product Details </h1>
      <div className="w-3/4 mx-auto card lg:card-side bg-gray-100 ">
        <div className="bg-white border rounded-l-lg">
          <img src="https://i.ibb.co/y0wnkkd/8.png" alt="Album" />
        </div>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-between">
            <div>
              {" "}
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline ml-2">Products</div>
            </div>
            <Link to="">
              <button className="btn btn-info text-white">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
