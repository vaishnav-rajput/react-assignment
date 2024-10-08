import React from 'react'
import Navbar from '../components/common/Navbar/Navbar'
import Products from '../components/core/products/Products'
import CustBtn from '../components/common/button/CustBtn'
import Sidebar from '../components/common/sidebar/Sidebar'
 const Home = () => {
  return (
    <div>
      <Sidebar/>

      <Navbar/>
      <Products/>

    </div>
  )
}

export default Home;
