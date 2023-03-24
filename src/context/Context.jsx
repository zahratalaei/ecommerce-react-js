import { createContext, useContext, useEffect, useReducer, useState } from "react"
import axios from "axios"
import {cartReducer, productReducer} from './Reducers'
const Cart = createContext()
const Context = ({children}) => {
  // const[products,setProducts] = useState([])
  useEffect(()=>{
    
    
    if(productState.search){
  console.log(productState.search);

      searchProducts(productState.search)
    }else{fetchProducts()}
      },[])
      const fetchProducts = async()=>{ 
       
          const res = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
          const data = await res.data;
          dispatch({type:'FETCH_PRODUCTS',payload:data})
          
      }
      const searchProducts = async(search)=>{ 
       
          const res = await axios.get(`https://api.escuelajs.co/api/v1/products/?title=${search}?offset=0&limit=20`)
          const data = await res.data;
          dispatch({type:'FETCH_PRODUCTS',payload:data})
          
      }
  // console.log(products);  
  const [state, dispatch] = useReducer(cartReducer, { cart:[]})
  const [productState, productDispatch] = useReducer(productReducer, {products:[],search:""})
  return (
    <Cart.Provider value={{state, dispatch,productDispatch,productState}}>
          {children}
    </Cart.Provider>
  )
}

export const useCart =  () =>   useContext(Cart)

export default Context
