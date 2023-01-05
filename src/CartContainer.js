import React from 'react'
import CartItem from './CartItem';
import { useGlobalContext } from './context';

const CartContainer = () => {
  const {cart, clearCart, ...state} = useGlobalContext();
  if(cart.length === 0) {
      return (
          <section className='cart-section'>
              <header>
                  <h1>your bag</h1>
              </header>
              <h2>is currently empty</h2>
          </section>
      )
  }
  return (
    <section className='cart-section'>
        <header>
            <h1>your bag</h1>
        </header>
        <div className="container">
            {cart.map((item) => {
                return <CartItem key={item.id} {...item}/>
            })}
        </div>
        <footer>
            <h3>Total <span>${state.total}</span></h3>
            <button className='clear-btn' onClick={clearCart}>clear cart</button>
        </footer>
    </section>
  )
}

export default CartContainer