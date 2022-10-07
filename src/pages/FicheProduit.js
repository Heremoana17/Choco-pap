import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import JsonData from '../json/products.json'
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Produit from '../components/Produit';

const FicheProduit = (props) => {
    
    const {countCartItems, cartItems, onAdd, onRemove} = props

    // variable pour utiliser l'id du produit dans l'url
    const { id } = useParams();
    const [produit, setProduit] = useState([]);
    
    useEffect(() => {
        JsonData.map((item) => {
            if (item.id === id); {
                setProduit(item)
            }
        })
    }, []);

    return (
        <div>
            <Navigation countCartItems={cartItems.length} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
            <Produit produit={produit} onAdd={onAdd} onRemove={onRemove} item={cartItems.find((x) => x.id === produit.id)}/>
            <Footer/>
        </div>
    );
};

export default FicheProduit;