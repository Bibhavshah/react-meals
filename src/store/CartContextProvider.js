import React, { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM_TO_CART") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCarthandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM_TO_CART", item: item });
  };

  const removeItemFromCarthandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM_FROM_CART", id: id });
  };

  const cartContextState = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCarthandler,
    removeItem: removeItemFromCarthandler,
  };
  return (
    <CartContext.Provider value={cartContextState}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
