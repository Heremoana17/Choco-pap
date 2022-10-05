import { NavLink } from 'react-router-dom';
import '../styles/Card.css'
import '../styles/Produit.css'

const Card = ({produit}) => {
    return (

        // lien vers la page <FicheProduit> ou doit apparaitre la description plus detailler du produit
        <NavLink to={'produit/' + produit.id} className='col-12 col-md-5 col-lg-3 my-3 my-md-2 mx-0 mx-md-3 px-0 rounded' id='card'>

            <li >

                {/* div pour le titre du produit */}
                <div>
                    <img src={produit.image} alt={produit.title} className='img-fluid rounded-top'/>
                </div>

                {/* div pour les infos du produit */}
                <div className='text-center p-3 '>
                    <h2>{produit.title}</h2>
                    <p>{produit.price+'€'}</p>
                    <p>{'Note: '+produit.note}</p>
                    <button className='btnCard' style={{backgroundColor: 'var(--jaune)'}}>Ajouter au panier</button>
                </div>
            </li>
        </NavLink>
    );
};

export default Card;