import React, { createContext, useContext, useReducer } from "react";

// Define the initial state
const initialState = {
  cart: [],
};

// Create a context
const CartContext = createContext();

// Actions
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";

// Create a reducer function to handle actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: addToCart(state.cart, action.payload),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: removeFromCart(state.cart, action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: clearCart(),
      };

    default:
      return state;
  }
};

//  function to add a product to the cart
const addToCart = (cart, productToAdd) => {
  const existingProduct = cart.find(item => item._id === productToAdd._id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...productToAdd, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  return [...cart];
};

//function to remove a product from the cart
const removeFromCart = (cart, productIdToRemove) => {
  const updatedCart = cart.filter(item => item._id !== productIdToRemove);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return [...updatedCart];
};

//  function to clear the cart
const clearCart = () => {
  const updatedCart = [];
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return [...updatedCart];
};

// Create a CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

// Create a custom hook to access the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
export const clearCartAction = () => ({ type: CLEAR_CART });
