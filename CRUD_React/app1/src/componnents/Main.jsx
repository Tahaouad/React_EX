
import React, { useEffect, useState } from 'react'

function Main() {
    const filieres = [{id:1, fil:'Developpemnet digital'},
                    {id:2, fil:'Infrastructure digital'},
                    {id:3, fil:'Gestion des entreprise'}]


    const [etudiants,setEtudiants] =useState([])
    const [nom,setNom] = useState('')
    const [prenom,setPrenom] = useState('')
    const [filier,setFiliere] = useState(filieres[0].fil)
    const [cherche,setCherche] = useState('')
    const [result,setResult] = useState([])
    const Ajouter=()=>{
        const etudiant ={nom:nom,prenom:prenom,filier:filier}
        setEtudiants([...etudiants,etudiant])
        
    }
    useEffect(()=>{
        setResult(etudiants)
    },[etudiants])
    const chercher=()=>{
        setResult(etudiants.filter(e=>e.filier==cherche))
    }
    const initialiser = () => {
        setResult(etudiants);
    };
  return (
    <div>
      <form action="#">

        <label htmlFor="nom">nom: 
            <input type="text" name="nom" id="nom" value={nom} onChange={e=>setNom(e.target.value)}/>
        </label>

        <label htmlFor="prenom">Prenom: 
            <input type="text" name="prenom" id="prenom"  onChange={e=>setPrenom(e.target.value)}/>
        </label>

        <label htmlFor="filiere">Filiere:
            <select  onChange={e=>setFiliere(e.target.value)}>
                {filieres.map((f,i)=><option value={f.fil} key={i}>{f.fil}</option>)}
            </select>
        </label>

        <label htmlFor="">
            <button type="button" onClick={Ajouter}>Ajouter</button>
        </label>
      </form>
      <h2>List des etudiants</h2>
      <table width={'100%'} style={{textAlign:'center'}}>
        <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Filiere</th>
            <th colSpan={2}>Action</th>
        </tr>
        {
            result.map(e=>
                <tr>
                    <td>{e.nom}</td>
                    <td>{e.prenom}</td>
                    <td>{e.filier}</td>
                    <td><button>Supprimer</button></td>
                    <td><button>Modifier</button></td>
                </tr>
                    )
        }
      </table>
      <fieldset>
        <legend>Recherche</legend>

      <form action="#">
        <input type="text" onChange={e=>setCherche(e.target.value)}/>
        <button type="button" onClick={chercher}>Chercher</button>
        <button type="button" onClick={initialiser}>Réinitialiser</button>

      </form>
      </fieldset>
    </div>
  )
}

export default Main
