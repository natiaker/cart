import React from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useGlobalContext } from './context';

const CartItem = ({id, title, price, img, amount}) => {
  const {increase, decrease, remove} = useGlobalContext();

  return (
    <article key={id} className='cart-item'>
        <img src={img} alt="item" />
        <div className="item-info">
            <h4>{title}</h4>
            <p>${price}</p>
            <button className='remove' onClick={()=>remove(id)}>remove</button>
        </div>
        <div className="item-amount">
            <FaArrowUp className='arrow-icon' onClick={()=>increase(id)}/>
            {amount}
            <FaArrowDown className='arrow-icon' onClick={()=>decrease(id)}/>
        </div>
    </article>
  )
}

export default CartItem