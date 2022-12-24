import React from "react";
import mealsImg from "../../assets/meals.jpg";
import CartButton from "./CartButton";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>React Meals</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={mealsImg} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
