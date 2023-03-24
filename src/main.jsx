import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Context from './context/Context'
import { ProductContextProvider } from './context/ProductContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ProductContextProvider>
    <Context>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Context>
   </ProductContextProvider>
  // </React.StrictMode>,
)
