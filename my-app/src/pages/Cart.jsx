import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/common/Navbar/Navbar'
import "./Cart.css"
import { AppContext } from '../context/AppContext'
import Sidebar from '../components/common/sidebar/Sidebar'

const Cart = () => {
    const {cartItems,setCartItems} = useContext(AppContext)
    const [total, setTotal] = useState(0)   

    useEffect(() => {
      let cart =  localStorage.getItem("cart");
        setCartItems(JSON.parse(cart))
        console.log("cartlocal", cart)
    },[])

    useEffect(() => {
    
        const sum =   cartItems.reduce((accumulator, item) => {
            return accumulator + item.price
        },0)
        setTotal(sum)
    },[cartItems])
  return (
    <div>
      <Sidebar/>

      <Navbar/>
      <section className='cart-section'>
        <div className='cart-container'> 
            {
                cartItems.map((cartItem) => (
                    <div key={cartItem.id} className='cart-item'>
                        <div className='image-title'>
                            <img className='cart-image' src={cartItem.image} />
                            <h3>{cartItem.title}</h3>
                        </div>
                        <div className='price-quantity boldText'>${cartItem.price}</div>
                    </div>
                    
                ))
            }
            <div>
             <hr className='horizontal'></hr>   
            </div>
            <div className='bill '> 
                <div className='boldText'>Total</div>
                <div className='boldText'>${total}</div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Cart
