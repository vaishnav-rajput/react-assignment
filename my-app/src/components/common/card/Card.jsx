import React, { useContext, useState } from 'react'
import "./Card.css"
import CustBtn from '../button/CustBtn'
import { AppContext } from '../../../context/AppContext'

const Card = ({item}) => {
    const [readMore, setReadMore] = useState(false)
    const {cartItems, setCartItems} = useContext(AppContext)
    const addItemHandler = (item) => {
        cartItems.push(item)
        setCartItems(cartItems)
        console.log("cartItems ", cartItems)
        localStorage.setItem("cart" , JSON.stringify(cartItems))
    }
  return (
    <div className="card">
            <div className="card-title">{item.title}</div>
            <img 
                src={`${item.image}`}
                alt="Product" 
                className="card-image" 
            />
            <div className="card-description">
            {
                readMore ? item.description : 
                item.description.slice(0,100)
            
            } <p className='read-more' onClick={() => setReadMore(!readMore)}>..read more</p>            </div>
            <div className="card-footer">
                <div className="card-price"> ${`${item.price}`}</div>
                <CustBtn onClick={() => addItemHandler(item)}  text={"add"}/>
            </div>
        </div>
  )
}

export default Card
