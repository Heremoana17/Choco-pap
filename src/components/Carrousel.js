import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { NavLink } from 'react-router-dom';
import '../styles/Carrousel.css'

const Carrousel = () => {
    return (
        <div>
            <div className='col-6 offset-3 text-center position-absolute mt-5' style={{zIndex:1, color: 'var(--orange)', height:200}}>
                <h1 className='display-2'>CHOCO PAP</h1>
            </div>
            <div >
                <div className='position-absolute btnBoutique' >
                    <NavLink to={'/boutique'} id='btnCaroussel' className='btn btn-lg mt-md-5'>VOIR LA BOUTIQUE</NavLink>
                </div>
            </div>
            <Carousel >
                <Carousel.Item className='carousel'>
                    <img
                    className="d-block w-100 imgFlou img-fluid"
                    src='./images/accueil1.jpg'
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className='carousel'>
                    <img
                    className="d-block w-100 imgFlou"
                    src='./images/accueil2.jpg'
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className='carousel'>
                    <img
                    className="d-block w-100 imgFlou"
                    src='./images/accueil3.jpg'
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        
    );
};

export default Carrousel;