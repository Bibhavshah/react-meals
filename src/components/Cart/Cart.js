import "./Cart.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
  ].map((item) => <li>{item.name}</li>);
  return (
    <Modal onClickBackdrop={props.onHideCart}>
      <ul className="cart-items">{cartItems}</ul>
      <div className="total">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onHideCart}>
          Close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
