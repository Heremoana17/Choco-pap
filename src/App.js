import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import Boutique from './pages/Boutique';
import FicheProduit from './pages/FicheProduit';
import NotFound from './pages/NotFound';
import jsonData from './json/products.json'

const App = () => {

  // recupération de la data provenant du fichier json
  const [data, setData] = useState([])
  useEffect(() => {setData(jsonData)},[])

  const [cartItems, setCartItems] = useState([])
  // creation des variable onAdd et onRemove
  const onAdd = (produit) => {
    const exist = cartItems.find((x) => x.id === produit.id);
    if (exist) {
      const newCartItems = cartItems.map((x) => 
      x.id === produit.id ? {...exist, qty: exist.qty + 1 } : x );
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, {...produit, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  }
  const onRemove = (produit) => {
    const exist = cartItems.find((x) => x.id === produit.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== produit.id);
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }else{
      const newCartItems = cartItems.map((x) =>
      x.id === produit.id ? {...exist, qty: exist.qty - 1} : x);
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  }

  useEffect(() => {
    setCartItems(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [] );
  },[])

  return (
    <BrowserRouter>
      <Routes>
        {/* route ver la page d'accueil */}
        <Route path='/' element={<Acceuil countCartItems={cartItems.length} cartItems={cartItems}/>}/>
        {/* route ver la boutique */}
        <Route path='/boutique' element={<Boutique data={data} onAdd={onAdd} onRemove={onRemove} countCartItems={cartItems.length} cartItems={cartItems}/> }/>
        {/* route vers la page fiche produit */}
        <Route path='/boutique/produit/:id' element={<FicheProduit/>}/>
        {/* route vers la page acceuil en cas d'erreur 404 */}
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
