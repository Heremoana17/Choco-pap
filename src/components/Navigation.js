import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navigation.css'

const Navigation = (props) => {
    
    //recupération des props
    const {countCartItems, onAdd, onRemove, cartItems} = props

    // variable pour afficher ou masquer le panier
    const[panier, setPanier] = useState(false)
    const showPanier = () => setPanier(!panier)

    //déclaration de la variable qui contient le prix du panier
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)

    return (
        <Navbar expand="lg" style={{backgroundColor:'var(--marron)'}}>
            <Container fluid >
                <Navbar.Brand className='ms-2'>
                    <NavLink to={'/'}><img src="./images/logo.png" alt="logo" width={70}/></NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto offset-lg-7 offset-xl-8 fs-4" style={{ maxHeight: '100px' }} navbarScroll>
                        <ul className='d-lg-flex mb-0 px-0' >
                            <NavLink to={'/'} className='me-2 lien pt-md-2 px-4'><li title='vers la page accueil'>Acceuil</li> </NavLink>
                            <NavLink to={'/boutique'} className='me-2 lien pt-md-2 pe-4'> <li title='vers la boutique'>Boutique</li></NavLink>
                            <NavLink  className='me-2 lien pt-md-2 pe-4' onClick={showPanier}><li title='ouvrir le panier'><span>{countCartItems ? countCartItems : ' '}</span><img src="./images/panier.png" alt="iconPanier" className='panier'/></li></NavLink> 
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            {/* code pour le panier */}
            <div>
                {/* ternaire pour afficher ou masquer le panier */}
                <div className={panier ? 'sidePanier active' : 'sidePanier'}>
                    <div className='d-flex flex-column'>
                        <header className='row m-0 p-5 ' id='headerPanier'>
                            <div className='col-1 btnClose'>
                                <img src="./images/close.png" alt="" style={{width:40}} onClick={showPanier} />
                            </div>
                            <h2 className='col-2 offset-4 h1'>PANIER</h2>
                        </header>
                        <div id='divPanier'>
                            {/* ternaire pour afficher la divPanier s'il y'a des produit dans le panier ou pas*/}
                            {countCartItems === 0 && <div className='text-center m-5'><h2>Votre panier est vide</h2></div>}
                            {cartItems.map((item) => 
                                <div key={item.id} className=' m-2 p-2 itemContainer rounded'>
                                    <div className='col m-1'>
                                        <img src={item.image} alt={item.title} className='img-fluid rounded' />
                                    </div>
                                    <div className='col text-center'>
                                        <h3 className='h4 m-0 mt-3'>{item.title}</h3>
                                        <p>{item.price + ' €'}</p>
                                    </div>
                                    <div className='col '>
                                        <button className='addremPanier' onClick={() => onRemove(item)}> - </button>
                                        <span>{item.qty}</span>
                                        <button className='addremPanier' onClick={() => onAdd(item)}> + </button>
                                    </div>
                                </div>)}
                        </div>
                        {/* ternaire pour afficher le footer si le panier n'est pas vide */}
                        {countCartItems !== 0 && 
                        <footer className='d-flex flex-column justify-content-center text-center pb-4 mt-auto' id='footerPanier'>
                            <h2 className='my-5'>TOTAL : {itemsPrice.toFixed(2)} €</h2>
                            <input type='button' className='offset-2 col-8 mb-4 btnPanier' value='REINITIALISER LE PANIER'/>
                            <input type='submit' className='offset-2 col-8 btnPanier' value='VALIDER LE PANIER' onClick={() => alert('Votre commande a bien été pris en compte')}/>
                        </footer>}
                    </div>
                </div>
            </div>
        </Navbar>
    );
};

export default Navigation;