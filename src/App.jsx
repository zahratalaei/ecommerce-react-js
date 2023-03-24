
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
// import Store from './components/Store'

function App() {
 
  return (
    <>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        {/* <Route path="/store" element={<Store/>}/> */}
        
      </Routes>
    </>
  )
}

export default App
