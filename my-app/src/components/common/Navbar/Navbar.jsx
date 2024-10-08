import React, { useContext, useState } from 'react'
import { IoMdCart } from "react-icons/io";
import "./Navbar.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import CustBtn from '../button/CustBtn';
import { get, useForm } from 'react-hook-form';
import { RiLayoutHorizontalFill } from "react-icons/ri";
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  const navigate = useNavigate()
  const {fetchItems, isLoggedIn, setIsLoggedIn, token ,setToken ,setLoading , sideBar, setSideBar} = useContext(AppContext)
  const {register, handleSubmit, setValue, formState: {errors}, getValues} = useForm()
  const [search, setSearch] = useState("")
  const [modal, setModal] = useState(false)

  function changeHandler(event) {
    setSearch(event.target.value)
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

  async function loginHandler() {
    const currentValues = getValues()
    const loginObj = {
      username: currentValues.username,
      password: currentValues.password
    }
    console.log("object")
    try {
      console.log("loginObj", loginObj)
      setLoading(true)
      const response = await fetch("https://fakestoreapi.com/auth/login",
        {
          method:"POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginObj)
        }
      )
      const loginResponse = await response.json()
      setToken(loginResponse)
      console.log("token", token)
      setModal(false)
      setLoading(false)
    } catch (error) {
      console.log("login user error............", error)
    }
  }

  function logoutHandler(){
    setToken(null)
    localStorage.clear()
  }
    
  return (

      <nav class="navbar">
        {
          // sidebar && 
          <div className='side-bar' onClick={() => setSideBar(!sideBar)}>
            <RiLayoutHorizontalFill color='white'  size={30} />
          </div>
        }
        
            <Link to={"/"}>
            <div class="site-name">YourBasket</div>
            </Link>
            {
              !token ?
              <CustBtn className="login" text={"Login"} onClick={() => setModal(true)}/> :
              <CustBtn className="login" text={"Logout"} onClick={() => logoutHandler()}/>
            }
            {
              modal &&
              <form onSubmit={handleSubmit(loginHandler)} className='login-container'>
                <input name='username' placeholder='username' {...register("username", {required: true})}/>
                <input name='password' placeholder='password' {...register("password", {required: true})}/>
               <button >Login</button>
              </form> 
            }

            {
              token &&
              <Link to={"/addproduct"} style={{ color: 'white', textDecoration: 'none' }}>
            <div className='add-products' >Add Products</div>

            </Link>
            }
            

            <div className="cart">
              <div className='searcher'>
              <input type='text' name='search'  onChange={changeHandler} value={search} placeholder='search category'/>
              <button onClick={searchHandler }>search</button>
              </div>
            <Link to={"/cart"} >
            <div className='cart-icon'>
              <IoMdCart  /> 
              </div>
              </Link>
            </div>
        </nav>
  )
}

export default Navbar
