import { useState } from "react"
import R_list from "./R_List"
import Recherche from "./Recherche"

const R_App=()=>{
    const listFiliere=[{id:1,filiere:'DD'},{id:2,filiere:'Id'},{id:3,filiere:'GE'}]
    const [result,setResult]=useState(listFiliere)

    const rechercher=(x)=>{
        setResult(listFiliere.filter(e=>e.filiere===x))
    }

    return(
        <>
            <Recherche rechercher={rechercher}/> 
            <hr />
            <R_list listFiliere={result}/>
        </>
    )
}
export default R_App  ;