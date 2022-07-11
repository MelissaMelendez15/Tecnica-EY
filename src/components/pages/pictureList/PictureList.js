import React, { Component } from 'react'

import picturesService from '../../../service/pictures.service'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SpinnerContainer from '../../ui/spinner/Spinner';

import PictureCard from './PictureCard';

import  './PictureList.css';


class PictureList extends Component {

    constructor() {
        super()
        this.state = {
            pictures: [],
        }

        this.picturesService =  new picturesService()
    }

    componentDidMount = () => this.loadPictures()

    loadPictures() {
        this.picturesService
            .getAllPictures()
            .then(response => {this.setState({ pictures: response.data }) })
            .catch(error => console.log('Error', error))
    }

   
    removePicture = pictureId => {
        this.setState({
            pictures: this.state.pictures.filter(elm => elm.id !== pictureId)
        })
    }

  
    render() {
        
        return(
            <>
              <Container fluid>
               
                 <section className='listPictures'>

                    <h1>lista de imagenes</h1>
                    
                    {this.state.pictures.length ? 
                    
                        <Row>
                   
                          {this.state.pictures.map(elm => <PictureCard key={elm.id} {...elm} removePicture= {() => this.removePicture(elm.id)} />)}

                        </Row>
                        
                    :
                    
                       <SpinnerContainer /> 
                        
                    }

                 </section>
            
              </Container>
            </>
        )
    }
   
}

export default PictureList