import React from 'react'
import { useCart } from '../context/Context';
import Filter from './Filter';
import SingleProduct from './SingleProduct';
import {Row} from 'react-bootstrap';
import { useProducts } from '../context/ProductContext';
const Home = () => {
  //  const {state} = useCart()
  const {pState} = useProducts()
  
  console.log("state");
  return (
    <div className='d-flex'>
      
      <Filter/>
      <Row xs={1} md={3} xl={4} className="g-2">
      {pState.products.map(product => (
          <SingleProduct key={product.id} product={product}/>
      ))}
      </Row>
    </div>
  )
}

export default Home