import React, { useState } from 'react';
import Card from './Card';
import '../styles/Liste.css'

const Liste = (props) => {

    //recupération des props
    const {data, onAdd, onRemove, cartItems} = props

    // var pour les input de type radio
    const[selectedRadio,setSelectedRadio] = useState();
    // var pour les label des input de type radio
    const radios = ["blanc", "lait", "noir", "noix", "fruit", "caramel", "liqueur"]
    // var pour l'input de type range Prix
    const[rangeValue, setRangeValue] = useState(20);
    // var pour l'input de type range Notes
    const[rangeValueNote, setRangeValueNote] = useState(5)

    return (
        <div className='container-fluid mx-0 row px-0 content'>

            {/* ttitre de la page */}
            <div className='text-center py-4 content'>
                <h1>BOUTIQUE</h1>
            </div>

            {/* realisation de la barre aside à droite, pour les filtres */}
            <div className='col-12 col-md-3 col-lg-2 pt-2 content'>
                <aside className='aside rounded p-3'>
                    <div>
                        <p>Filtres</p>
                        <h3>Categories</h3>
                        <ul className='list-unstyled'>
                            <li>
                                <input className="form-check-input" type="radio" name="tous" id="tous"/>
                                <label htmlFor="tous" className='ps-1'>Tous</label>
                            </li>
                            {radios.map((parfun) => (
                                <li>
                                    <input className='form-check-input' type='radio'  name="tous" id={parfun} onChange={(e) => setSelectedRadio(e.target.id)}/>
                                    <label  htmlFor={parfun} className='ps-1'>{parfun}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Prix</h3>
                        <ul className='list-unstyled'>
                            <li>
                                <input type='range' min='1' max='20' defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.value)}/>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Notes</h3>
                        <ul className='list-unstyled'>
                            <li>
                                <input type='range' min='3' max='5' defaultValue={rangeValueNote} onChange={(e) => setRangeValueNote(e.target.value)}/>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>

            {/* realisation de la liste des produits */}
            <ul className='list-unstyled col-12 col-md-8 col-lg-9 row mx-auto justify-content-between'>
                {data.filter((produit) => produit.price<=rangeValue)
                    .filter((produit) => produit.note<=rangeValueNote)
                    .map((produit,id) => (<Card key={id} produit={produit} onAdd={onAdd} onRemove={onRemove} item={cartItems.find((x) => x.id === produit.id)}/>))}
            </ul>
        </div>
    );
};

export default Liste;