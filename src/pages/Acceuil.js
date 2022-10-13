import React from 'react';
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Acceuil = (props) => {

    //recupération des props
    const {cartItems, onAdd, onRemove, onDelete} = props
    
    return (
        <div>
            <Navigation countCartItems={cartItems.length} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete}/>
            <Carrousel/>
            <Footer/>
        </div>
    );
};

export default Acceuil;