import React from 'react';
import Liste from '../components/Liste';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Boutique = (props) => {

    // recupération de la data par les props
    const {data, onAdd, onRemove, countCartItems, cartItems} = props

    return (
        <div>
            <Navigation countCartItems={countCartItems} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
            <Liste data={data} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
            <Footer/>
        </div>
    );
};

export default Boutique;