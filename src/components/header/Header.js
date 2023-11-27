import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CartIcon from "../cart-overlay/CartIcon.js";
import SuccessMessage from "../SuccessMessage.js";
import CategoryMenu from "./CategoryMenu.js";
import CurrencyIcon from "../currency-overlay/CurrencyIcon.js";
import "./header.css";
import inactiveHamburger from "../../assets/images/inactive-hamburger.png";
import activeHamburger from "../../assets/images/active-hamburger.png";
import Bella from "../../assets/images/Bella.jpg";

const Navigation = ({ allCategories,
  changeCategory,
  activeCategory,
  selectedCurrency,
  allCurrencies,
  changeCurrency,
  amountOfItems,
  totalPayment,
  productsQuantity,
  handleRemoveProduct,
  handleAddProduct,
  cartItems, clearCart }) => {

  const [activeMenu, setInactiveMenu] = useState(false);

  const toggleMenu = () => {
    setInactiveMenu(!activeMenu);
  }
  const closeMenu = () => setInactiveMenu(false);

  return (
    <header>
      <img className="hamburger" src={activeMenu ? activeHamburger : inactiveHamburger} alt="toggle menu" onClick={toggleMenu} />
      <nav className={activeMenu ? "active-menu" : ""}>
        <NavLink
          to="/"
          onClick={() => {
            changeCategory("");
            closeMenu();
          }}
          className="header-one">
        <h1>
          <a href="home-link" style={{ 'textDecoration': 'none', 'fontSize': '28px', 'fontWeight': 'bold', 'color': '#333', 'opacity': '0.5' }}>
          <img width="65px" height="auto" src={Bella} alt="logo" style={{ verticalAlign: 'middle' }} />&nbsp;&nbsp;BELLA
          </a>
        </h1>
        </NavLink>
        <CategoryMenu
          allCategories={allCategories}
          changeCategory={changeCategory}
          activeCategory={activeCategory}
          closeMenu={closeMenu}
        />
        <section className="icons-section">
          <CurrencyIcon
            selectedCurrency={selectedCurrency}
            allCurrencies={allCurrencies}
            changeCurrency={changeCurrency}
          />

          <CartIcon
            handleRemoveProduct={handleRemoveProduct}
            handleAddProduct={handleAddProduct}
            productsQuantity={productsQuantity}
            amountOfItems={amountOfItems}
            totalPayment={totalPayment}
            cartItems={cartItems}
            selectedCurrency={selectedCurrency}
            activeMenu={activeMenu}
            clearCart={clearCart}
            closeMenu={closeMenu}
          />
        </section>
      </nav>
      <SuccessMessage />
    </header>
  );
}


export default Navigation;