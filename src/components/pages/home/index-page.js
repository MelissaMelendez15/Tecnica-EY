import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import './index-page.css'

const IndexPage = () => {
   return(
     
     <Container fluid className='index-page'>
        
         <Row className='justify-content-center align-items-center'>
        
            <Col md={12}>
               
               <header>
                  <h1>¡Imagenes!</h1>
               </header>
              
               <p>una sencilla SPA de imagenes</p>
               
               <Link className='link-btn' style={{ margin: '40px auto' }} to='/imagen'>Ver imagenes</Link>
           
            </Col>
         
        </Row>
      
    </Container>

    )
}


export default IndexPage