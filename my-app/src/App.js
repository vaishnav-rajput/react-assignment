import logo from './logo.svg';
import './App.css';
import {Route, Routes, useLocation, useSearchParams} from "react-router-dom"
import Home from './pages/Home';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const {fetchItems} = useContext(AppContext)

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
  },[location.pathname, location.search])
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={Home}/>
     </Routes>
    </div>
  );
}

export default App;
