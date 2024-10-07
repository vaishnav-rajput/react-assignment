import logo from './logo.svg';
import './App.css';
import {Route, Routes, useLocation, useSearchParams} from "react-router-dom"
import Home from './pages/Home';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import Cart from './pages/Cart';
import AddProduct from './pages/addproduct/AddProduct';

export default function App() {
  const {fetchItems, items} = useContext(AppContext)

  const [serchParams, setSearchParams] = useSearchParams()
  const location = useLocation()

  useEffect(() => {
    if(location.pathname.includes("category")){
      const category = location.pathname.split("/").at(-1)
      fetchItems(category)

    }
    else{
      fetchItems()
    }
    
    if(localStorage.getItem("newItem")){
      const newItem = localStorage.getItem("newItem")
      console.log("new item to add ", newItem)
      items.push(newItem)
  }
  },[location.pathname, location.search])
  return (
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/addproduct' element={<AddProduct/>} />
     </Routes>
  );
}

