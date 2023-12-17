export default function Card(props) {
  return (
        <div className='d-flex flex-wrap'>
            {props.product.map((produit)=>
            <div className="card p-2 m-5" style={{width:'18%',height:'350px',boxShadow:'0 0 10px '}}>
                <img src={require('./450x300.jpg')}  className="card-img-top"/>
                <h3 className="card-text  " style={{textAlign:'center' ,fontWeight:'bold',padding:'8px'}}>{produit.nom}</h3>
                <h6 className='card-text ' style={{textAlign:'center'}}>${produit.prix}.00</h6>
                <button className="btn btn-outline-secondary w-50 m-auto" >Add to cart</button>
            </div>
            )}
        </div>
    
    
  )
}
