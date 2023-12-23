import React from "react";
import { useCart } from "../../context/CartContext";
import { LuMinusCircle } from "react-icons/lu";

const ShoppingCart = () => {
  const { state, dispatch } = useCart();

  // Function to remove a product from the cart
  const removeFromCart = item => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  return (
    <div className="container mx-auto p-10">
      <h2 className="text-2xl font-bold">
        Products <span className="text-sky-500">Cart</span>
      </h2>
      <div>
        <div className="lg:grid grid-cols-3">
          {/* Cart items */}
          <div className="col-span-2 p-5">
            {/* Check if the cart is empty */}
            {state?.cart?.length === 0 ? <div>Cart is empty</div> : ""}
            {/* Map through cart items and display details */}
            {state?.cart?.map(product => (
              <div key={product?._id} className="flex justify-between my-10 border-b pb-10">
                <div className="lg:flex gap-5 items-center">
                  {/* Product image */}
                  <img
                    className="lg:w-52 lg:h-52 bg-[#F1F5F9] rounded-lg"
                    src={product?.image}
                    alt="img"
                  />
                  {/* Product details */}
                  <div>
                    <h1 className="mb-3 text-2xl font-bold">{product?.title}</h1>
                    <span>{product?.description}</span> <br />
                    {/* Variation section */}
                    <div className="lg:flex items-center justify-between">
                      {/* Color variations */}
                      <div className="flex flex-col gap-4 mt-5">
                        <div>
                          <ul className="lg:flex gap-2 items-center">
                            <h3 className="font-bold">Color :</h3>
                            {product?.variations?.map(variation => (
                              <li
                                className="shadow border bg-white px-4 py-2 rounded-lg mb-3 lg:mb-0"
                                key={variation?.id}
                              >
                                {variation?.color}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Size variations */}
                        <div>
                          <ul className="flex gap-2 items-center">
                            <h3 className="font-bold">Size :</h3>
                            {product?.variations?.map(variation => (
                              <li
                                className="shadow border bg-white px-4 py-2 rounded-lg"
                                key={variation?.id}
                              >
                                {variation?.size}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {/* Button to remove the product from the cart */}
                      <div>
                        <button
                          className="mt-10 lg:mt-0 text-red-600 flex items-center gap-2"
                          onClick={() => removeFromCart(product._id)}
                        >
                          <LuMinusCircle className="text-lg" /> Remove from Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
