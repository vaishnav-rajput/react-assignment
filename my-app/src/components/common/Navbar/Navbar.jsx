import React, { useContext, useState } from 'react'
import { IoMdCart } from "react-icons/io";
import "./Navbar.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate()
  const {fetchItems} = useContext(AppContext)
  const [search, setSearch] = useState("electronics")
  function changeHandler(event) {
    setSearch(event.target.value)
    console.log("search", search)
  }

  // function searchHandler(){
  //   const encoded = encodeURIComponent(search)

  //   const url = `/category/${encoded}`
  //   navigate(url)
  // }

  function searchHandler(){
    const encoded = encodeURIComponent(search)
    fetchItems(encoded)
  }
  return (

      <nav class="navbar">
        <Link to={"/"}>
            <div class="site-name">YourBasket</div></Link>
            <Link to={"/addproduct"}>
            <div >Add Products</div>

            </Link>

            <div class="cart">
              <div className='searcher'>
              <input type='text' name='search'  onChange={changeHandler} value={search} placeholder='search category'/>
              <button onClick={searchHandler }>search</button>
              </div>
            <Link to={"/cart"} >
              <IoMdCart />
              </Link>
            </div>
        </nav>
  )
}

export default Navbar
