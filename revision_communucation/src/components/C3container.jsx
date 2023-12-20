import { useState } from "react";
import C1rechercher from "./C1rechercher";
import C2afficharge from "./C2afficharge";


export default function C3container() {
    
    const [result,setResult]=useState()

    function search1(nom1){
        setResult(nom1.toUpperCase())
    }
    return(
        <div> 
            <C1rechercher search={search1}/>
            <C2afficharge value={result}/>
        </div>
        
    )
    
}