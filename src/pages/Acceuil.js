import React from 'react';
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Acceuil = (props) => {
    const {countCartItems, cartItems} = props
    return (
        <div>
            <Navigation countCartItems={cartItems.length} cartItems={cartItems}/>
            <Carrousel/>
            <Footer/>
        </div>
    );
};

export default Acceuil;