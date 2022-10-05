import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import JsonData from '../json/products.json'
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Produit from '../components/Produit';

const FicheProduit = () => {
    
    // variable pour utiliser l'id du produit dans l'url
    const { id } = useParams();
    const [produit, setProduit] = useState([]);
    
    useEffect(() => {
        JsonData.map((item) => {
            if (item.id === id) {
                setProduit(item)
            }
        })
    }, []);

    return (
        <div>
            <Navigation/>
            <Produit produit={produit} />
            <Footer/>
        </div>
    );
};

export default FicheProduit;