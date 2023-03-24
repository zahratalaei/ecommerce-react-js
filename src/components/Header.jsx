import React, { useState } from 'react'
import {Navbar,Container,FormControl,Nav, Dropdown,Badge} from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCart } from '../context/Context'
import { useProducts } from '../context/ProductContext'
import Filter from './Filter'
const Header = () => {
     const {pDispatch,pState} = useProducts()
     // const [search, setSearch] = useState('')
     const searchHandler = (e) => {
          e.preventDefault()
          // setSearch(e.target.value)
         pDispatch({type:'SET_SEARCH', payload: e.target.value})
          
     }
     console.log(pState);
  return (
    <Navbar bg='dark' variant='dark'>
     <Container>
          <Navbar.Brand>
               <Link to="/">EaseShop </Link>
          </Navbar.Brand>
          <div className='d-flex align-items-center'>
          <Filter/>

          <Navbar.Text className='search mx-2'>
               <FormControl style={{maxWidth:500}} 
                    placeholder='Search a product' onChange={searchHandler} type='search' aria-label='Search'/>
          </Navbar.Text>
          </div>
          <Nav>
               <Dropdown>
                    <Dropdown.Toggle variant='success'size='sm' >
                         <FaShoppingCart color='white' fontSize="25px"/>
                         <Badge>{10}</Badge>
                         <Dropdown.Menu style={{minWith:370}}>
                              <span style={{padding: 10}}>Cart is empty!</span>
                         </Dropdown.Menu>
                    </Dropdown.Toggle>
               </Dropdown>
          </Nav>
     </Container>
    </Navbar>
  )
}

export default Header