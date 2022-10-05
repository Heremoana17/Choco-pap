import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Produit from '../components/Produit';

const FicheProduit = () => {
    return (
        <div>
            <Navigation/>
            <Produit/>
            <Footer/>
        </div>
    );
};

export default FicheProduit;