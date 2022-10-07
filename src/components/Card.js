import { NavLink } from 'react-router-dom';
import '../styles/Card.css'
import '../styles/Produit.css'

const Card = (props) => {

    //recupération des props
    const{produit, onAdd, onRemove, item} = props

    const stop = (e) => {
        e.stopPropagation();
    }

    return (
        // lien vers la page <FicheProduit> ou doit apparaitre la description plus detailler du produit
        <NavLink to={`/produit${produit.id}`} className='col-12 col-md-5 col-lg-3 my-3 my-md-2 mx-0 mx-md-3 px-0 rounded' id='card' onClick={(e) => e.preventDefault()}>
            <li >
                    {/* div pour l'image' du produit */}
                    <div>
                        <img src={produit.image} alt={produit.title} className='img-fluid rounded-top'/>
                    </div>

                    {/* div pour les infos du produit */}
                    <div className='text-center p-3 '>
                        <h2>{produit.title}</h2>
                        <p>{produit.price+'€'}</p>
                        <p>{'Note: '+produit.note}</p>
                        <div onClick={(e) => e.stopPropagation()}>
                            {item ? <div>
                                <button className='addRemProduit' onClick={() => onRemove(produit)}> - </button>
                                <span>{item.qty}</span>
                                <button className='addRemProduit' onClick={() => onAdd(produit)}> + </button>
                            </div> :
                            <button className='btnCard' style={{backgroundColor: 'var(--jaune)'}} onClick={() => onAdd(produit)}>Ajouter au panier</button>
                            }
                        </div>
                    </div>
            </li>
        </NavLink>
    );
};

export default Card;