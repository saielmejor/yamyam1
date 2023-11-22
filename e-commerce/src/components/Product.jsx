import React,{useContext} from 'react' 
import {Button,Card} from 'react-bootstrap' 



export default function Product({product}  ) {
//   gets each product by destructuring 

  
    return (

        <Card  style={{ width: '18rem' ,borderStyle:"none"}}>
        <Card.Img variant="top" src={product.image} alt={product.name} style={{width: '280px', height: '200px', objectFit:"contain"}} /> 
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>{product.name}</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <div class="text-center"> <Button variant="dark" className='button'>ORDER</Button></div>
          
        </Card.Body>
      </Card>
  )
}
