import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function Recherche(props) {
    const [filiere,setFiliere] = useState('')
    function rechercher(){
        props.cherche(filiere)
    }
  return (
    <div className='m-auto w-75'>
        <form action="#" className='form '>
            <input type="text" className='m-2' onChange={(e)=>setFiliere(e.target.value)} />
            <button type="button" onClick={rechercher} className='btn btn-primary m-2'>Rechercher</button>
        </form>
    </div>
  )
}

