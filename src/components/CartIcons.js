import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../actions/actions";

function CartIcons({ id }) {
  const dispatch = useDispatch();
  const add = () => dispatch(addToCart(id));
  const remove = () => dispatch(removeFromCart(id));
  return (
    <div className="d-flex">
      <i
        onClick={add}
        className="CartIcon fas fa-plus text-success m-3"
      />
      <i
        onClick={remove}
        className="CartIcon fas fa-minus text-danger m-3"
      />
    </div>
  );
}

export default CartIcons;