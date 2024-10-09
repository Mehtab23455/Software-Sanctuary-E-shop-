const Cart = require("../models/cart.models");

function initializeCart() {
  let cart;
  if (!req.session.cart) {
    cart = new Cart();
  } else {
    const sessionCart = req.session.cart;
    cart = new Cart(
    sessionCart.items, 
    sessionCart.totalQuantity,
    sessioncart.totalPrice
    );
  }

  res.locals.cart = cart;

  next();
}

module.exports = initializeCart;
