import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import Boutique from './pages/Boutique';
import FicheProduit from './pages/FicheProduit';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* route ver la page d'accueil */}
        <Route path='/' element={<Acceuil/>}/>
        {/* route ver la boutique */}
        <Route path='/boutique' element={<Boutique/>}/>
        {/* route ver la page fiche produit */}
        <Route path='/ficheproduit' element={<FicheProduit/>}/>
        {/* route vers la page acceuil en cas d'erreur 404 */}
        <Route path='/*' element={<Acceuil/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
