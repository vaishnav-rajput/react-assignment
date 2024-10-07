import React from 'react'
import { createContext , useState} from 'react'
import { baseUrl } from '../baseUrl'

export const AppContext = createContext()

export default function AppContextProvider({children}) {
  const [items, setItems] = useState([])
  const [ cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchItems = async (category) => {
    setLoading(true)
    let url = `${baseUrl}`;
    if(category){
        url += `/category/${category}`

    }
    try {
        const result = await fetch(url);
        const data = await result.json();
        if (!data || data.length === 0)
            throw new Error("Something Went Wrong");
        console.log("api res" , data)
        setItems(data)
    } catch (error) {
        console.log("Error in Fetching products", error);
        setItems([]);
    }
    setLoading(false)
  }
  
  const value = {
    items,
    setItems,
    cartItems,
    setCartItems,
    loading,
    setLoading,
    fetchItems,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

