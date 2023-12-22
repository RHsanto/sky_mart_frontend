import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const items = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];
  return (
    <div className="container mx-auto p-10 h-[1500px]">
      <h1 className="text-3xl font-bold my-5">All Product</h1>
      <div className="grid grid-cols-4 gap-8">
        {items.map(item => (
          <div>
            <div className="card card-compact  bg-gray-100 ">
              <figure>
                <img src="https://i.ibb.co/y0wnkkd/8.png" alt="Shoes" />
              </figure>
              <div className="card-body bg-white border rounded-b-xl">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-between items-center">
                  <div>
                    {" "}
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline ml-2">Products</div>
                  </div>
                  <Link to={`/product/${item?.id}`}>
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
