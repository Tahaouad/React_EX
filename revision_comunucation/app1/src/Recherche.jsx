import { useState } from "react"

const Recherche = (props) =>{
    const [cherche,setCherche]=useState('') ;

    const search=()=>{
        props.rechercher(cherche) 
    }
    return(
        <form action="#">
            <input type="text" onChange={e=>setCherche(e.target.value)}  />
            <button type="button" onClick={search}>Rechercher</button>
        </form>
    )
}
export default Recherche ;