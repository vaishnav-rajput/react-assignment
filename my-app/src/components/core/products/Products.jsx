import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import Card from '../../common/card/Card'
import "./Products.css"

const Products = () => {
    const {items, loading} = useContext(AppContext)
  return (
    <div className='products-container'>
      {/* Products section */}
      <section className='products-section'>
        {
          loading ? (<div>Loading...</div>) :
            items.map((item) => (
                <Card item = {item} key={item.id} />
            ))
        }
      </section>
    </div>
  )
}

export default Products
