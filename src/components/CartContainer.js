import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { amount, cartItems, total } = useSelector((store) => store.cart);

  // if no amount in the stock
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently</h4>
        </header>
      </section>
    );
  }

  // if amounts available
  if (amount > 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
        </header>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>${total}</span>
            </h4>
          </div>
          <button
            onClick={() => dispatch(clearCart())}
            className="btn clear-btn"
          >
            clear cart
          </button>
        </footer>
      </section>
    );
  }
};

export default CartContainer;
