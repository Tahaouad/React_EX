import {Link } from 'react-router-dom';
import Navbar from './Navbar';

const Products=({products})=>{
    
    
    return(
        <>
        <Navbar />
        <img className='img w-100 mb-3' src={require('../images/cover.PNG')} />
        <h1 className='m-auto fw-bold text-center text-success '>EXPLORATION EXCLUSIVE</h1>
        <h6 className='m-auto text-center fw-lighter'>Les dernières tendances du Raja</h6>
        <div className="d-flex flex-wrap w-100 justify-content mt-3">
            {
                products.map(product=>
                    <div className="card p-1  m-2" style={{width:'360px'}}>
                        <Link to={`/ProductsDetails/${product.id}`}>
                        <img src={require(`../images/${product.image}`)} alt="test" />
                        </Link>
                        <h4 className="card-title ">{product.libelle}</h4>
                        <h6>{product.prix}</h6>
                        <button className="btn btn-success">Buy</button>
                    </div>
                )
            }
        </div>

        </>
    )
}
export default Products ;  