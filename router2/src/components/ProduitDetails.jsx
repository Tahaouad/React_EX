import { useState } from "react";
import { useParams } from "react-router-dom";

const ProduitDetails = (props) => {
    const { id } = useParams();
    const produitActuel = props.products.find((produit) => produit.id ==id);
    const [Panier,setPanier]=useState([])
    
    const ajouter=()=>{
        setPanier(produitActuel.libelle)
    }
    if (!produitActuel) {
        return <div>Produit non trouvé</div>;
    }
    return (
        <div className="container mt-3">
            <div className="card d-flex">
                <img
                    src={require(`../images/${produitActuel.img}`)}
                    className="card-img w-50" />
                <div className="card-body">
                    <h5 className="card-title">{produitActuel.libelle}</h5>
                    <p className="card-text">
                        {produitActuel.description}
                    </p>
                    <h4>{produitActuel.prix}Dhs</h4>
                    <button className="btn btn-primary" onClick={()=>ajouter()}>Ajouter au panier</button>
                </div>
            </div>
        </div>
    )
}
export default ProduitDetails;
