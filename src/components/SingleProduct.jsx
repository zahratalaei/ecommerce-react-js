import React from 'react'
import{Card,Col,Carousel} from 'react-bootstrap'
import { formatCurrency } from '../utilities/FormatCurrency'
const SingleProduct = ({product}) => {
  return (
     <Col>
    <Card className='h-100'>
     {/* <Card.Img variant='top' src={product.images[0]}/> */}
     
     <Carousel wrap={true}>
     {product.images.map(img => (
                    <Carousel.Item key={img}>
          
                    <img
                      className="d-block w-100"
                      src={img}
                    />
                  </Carousel.Item>
               ))}

      
      </Carousel>
    
     <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
               <span>{formatCurrency(product.price)}</span>
          </Card.Text>
     </Card.Body>
    </Card>
    </Col>
  )
}

export default SingleProduct