import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const {...state} = useGlobalContext();
  return (
    <nav>
        <div className="nav-center">
            <h2>UseReducer</h2>
            <div className="cart-icon-container">
                <FaShoppingCart className='cart-icon' size={28}/>
                <div className="total-amount">
                    <p>{state.amount}</p>
                </div>
            </div>
        </div>            
    </nav>
  )
}

export default Navbar