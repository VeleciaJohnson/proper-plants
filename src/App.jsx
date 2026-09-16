import { useState } from "react";
import "./App.css";
import PLANTS from "./data";
import Header from "./Header";
import PlantList from "./Planetlist";
import Cart from "./Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart((currentCart) => {
      const plantAlreadyInCart = currentCart.find(
        (cartItem) => cartItem.id === plant.id,
      );

      if (plantAlreadyInCart) {
        return currentCart.map((cartItem) => {
          if (cartItem.id === plant.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }

          return cartItem;
        });
      }

      return [...currentCart, { ...plant, quantity: 1 }];
    });
  }

  function updateQuantity(plantId, amount) {
    setCart((currentCart) => {
      return currentCart
        .map((cartItem) => {
          if (cartItem.id === plantId) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + amount,
            };
          }

          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);
    });
  }

  const cartItemCount = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <>
      <Header cartItemCount={cartItemCount} />

      <main className="app-layout">
        <section className="plants-section">
          <div className="section-heading">
            <p className="eyebrow">Fresh from the nursery</p>
            <h1>Find your next favorite plant</h1>
            <p>
              Browse plants for your home, garden, or next landscaping project.
            </p>
          </div>

          <PlantList plants={PLANTS} onAddToCart={addToCart} />
        </section>

        <aside className="cart-section">
          <Cart cart={cart} onUpdateQuantity={updateQuantity} />
        </aside>
      </main>
    </>
  );
}