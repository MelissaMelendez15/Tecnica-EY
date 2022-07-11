import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

import './PictureCard.css'


const PictureCard = ({ url, removePicture}) => {
   
    return(
        
        <Col xs={5} sm={5} md={6} lg={3}>

            <div className='card'>
               
                <img src={url} onClick={removePicture} alt='pictures'/>
               
            </div>
        
        </Col>
    )
}



export default PictureCard