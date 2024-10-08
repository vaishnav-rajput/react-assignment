import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import "./Sidebar.css"
import { RiLayoutHorizontalFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const {sideBar, setSideBar, token} = useContext(AppContext)
  return (
    <div className='main-container'>
      {
        sideBar &&
        <div className='sidebar-container'>
            <ul className='side-list'>
                {!token && 
                <li>
                    Login
                </li>
                }
                
                <Link to={"/cart"} style={{ color: 'inherit', textDecoration: 'none' }}>
                <li>
                    Cart
                </li>
                </Link>

            { token &&    
             <Link to={"/addproduct"} style={{ color: 'inherit', textDecoration: 'none' }}>
                <li>
                    Add products
                </li>
                </Link>}
            </ul>

        </div>

      }
    </div>
  )
}

export default Sidebar
