import React, { useState } from 'react'

export default function C1rechercher(props) {
    const [nom,setNom]=useState('')
    function rechercher(){
        props.search(nom)
        
    }

  return (
    <div>
        <form action="">
            <input type="text" onChange={(e=>setNom(e.target.value))} />
            <button type='button' onClick={rechercher}>rechercher</button>

        </form>
    </div>
  )
}
