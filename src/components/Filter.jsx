import React,{useState, useEffect} from 'react'
import {Form, Offcanvas,Row, Col, Collapse} from 'react-bootstrap'
import axios from 'axios'
import {FiFilter} from 'react-icons/fi'
import { useProducts } from '../context/ProductContext'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
const Filter = () => {
     const[cats,setCats] = useState([])
     const{pState,pDispatch} = useProducts()
     const [show, setShow] = useState(false)
     const [openPrice,setOpenPrice] = useState(false)
     const [openCat,setOpenCat] = useState(false)
  useEffect(()=>{
    fetchCat(); 
  },[])
  const fetchCat = async() =>{
    if(cats.length == 0 ){await axios.get('https://api.escuelajs.co/api/v1/categories').then(res =>setCats(res.data) )}else{return cats}
  }

const handleChange = (e) => {
 e.preventDefault()
 const catName = e.target.value;
 const selectedCat = cats.filter(cat=> cat.name == catName)
 pDispatch({type:'SET_CATEGORY',payload:selectedCat[0].id})

}

  return (
    <div className='filters'>
     <FiFilter onClick={() => setShow(true)}/>
     <Offcanvas show={show} onHide={()=>setShow(false)}  >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-dark text-light'>
          <div>
     <Form.Label>Price {!openPrice ? <IoIosArrowDown onClick={()=>{setOpenPrice(true)}} /> : <IoIosArrowUp onClick={()=>{setOpenPrice(false)}} />}</Form.Label>
     <Collapse in={openPrice}>
     <Row className='my-2'>
      <Col>
      <Form.Control
        type="number"
        id="minPrice"
        min='0'
        step='10'
        onChange={(e)=>pDispatch({type:'SET_MIN_PRICE',payload:e.target.value})}
        placeholder='min price'
      />
      </Col>
      to
      <Col>
      <Form.Control
        type="number"
        id="maxPrice"
        min={pState.minPrice}
        step='10'
        onChange={(e)=>pDispatch({type:'SET_MAX_PRICE',payload:e.target.value})}
        placeholder='max price'
      />
      </Col>
     </Row>
      </Collapse>
      </div>
          <div>
              <Form.Label>Category {!openCat ? <IoIosArrowDown onClick={()=>{setOpenCat(true)}} /> : <IoIosArrowUp onClick={()=>{setOpenCat(false)}} />}</Form.Label>
            <Collapse in={openCat} >
              <Form.Select  onChange={handleChange} >
                <option>Choose the category</option>
                {cats.map(cat => (

                <option value={cat.name} key={cat.id}>{cat.name}</option>
                ))}
        
              </Form.Select>
             </Collapse>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

     
    </div>
  )
}

export default Filter