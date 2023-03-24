import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
const ProductContext = createContext()
export const useProducts = ()=>{
     return useContext(ProductContext)
}
const pReducer = (state,action) => {
     switch(action.type){
          case 'FETCH_DATA':
               return {...state, products:action.payload}
          case 'SET_SEARCH':
               return {...state, search:action.payload}
          case 'SET_MIN_PRICE':
               return {...state, minPrice:action.payload}
          case 'SET_MAX_PRICE':
               return {...state, maxPrice:action.payload}
          case 'SET_CATEGORY':
               return {...state, categoryId:action.payload}
          case 'RESET_FILTERS':
               return initialPState
          default:
               return state
     }
}
const initialPState = {
     products:[],
     search:'',
     minPrice:'',
     maxPrice:'',
     categoryId:''
}
export const ProductContextProvider = ({children}) => {
const[pState,pDispatch] = useReducer(pReducer,initialPState)
     useEffect(()=>{
          fetchProducts()
     },[pState.search, pState.minPrice, pState.maxPrice,pState.categoryId])
     const fetchProducts = async() =>{
          // if(!pState.search){
               try {
                    const res = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=20&title=${pState.search}&price_min=${pState.minPrice}&price_max=${pState.maxPrice}&categoryId=${pState.categoryId}`)
                    const data = await res.data
                    pDispatch({type:'FETCH_DATA', payload:data})
                    
console.log(data);
                                
               } catch (error) {
                    console.log(error);
               }
               
          // }else{
          //      const res = await axios.get(`https://api.escuelajs.co/api/v1/products/?title=${pState.search}&offset=0&limit=20`)
          //      const data = await res.data
          //      pDispatch({type:'FETCH_DATA', payload:data})
          // } 
                
     }

     return (
          <ProductContext.Provider value={{pDispatch, pState}}>
            {children}
          </ProductContext.Provider>
        );

}