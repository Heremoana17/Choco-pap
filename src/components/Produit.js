import React from 'react';
import '../styles/Produit.css'

const Produit = (props) => {

    const{produit, onAdd, onRemove, item} = props

    return (
        <div id='divProduit'>
            <div className='container-fluid d-flex flex-column flex-md-row pt-5'>
                <div className='col-6 order-2 order-md-1'>
                    <img src={produit.image} alt={produit.title} className='img-fluid p-4'/>
                </div>
                <div className='col-6 p-4 order-1'>
                    <h1 className='mb-4' id='h1'>{produit.title}</h1>
                    <h2 className='mb-4'>{produit.price} €</h2>
                    <p className='mb-4'>{produit.description}</p>
                    {item ? 
                        <div className='mt-5'>
                            <button className='addRemProduit' onClick={() => onRemove(item)}> - </button>
                            <span>{item.qty}</span>
                            <button className='addRemProduit' onClick={() => onAdd(item)}> + </button>
                        </div> : 
                        <button type='button' id='btnProduit' className='rounded mt-4' onClick={() => onAdd(produit)}>AJOUTER AU PANIER</button>}
                    {/* <div>
                        <input type="number" id='inputNumber' className='rounded me-4' placeholder='Nombre de produit'/>
                    </div> */}
                </div>
            </div>
            <div className='col-12 p-5'>
                <h3>Ingredients</h3>
                <p>{produit.ingredients}</p>
            </div>
        </div>
    );
};

export default Produit;