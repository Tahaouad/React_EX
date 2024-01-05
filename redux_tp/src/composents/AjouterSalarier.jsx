import { useState } from "react"
import { useDispatch } from "react-redux"
import { addAction } from "./actions"
import { useNavigate } from "react-router-dom"

const AjouterSalarier=()=>{
    const [matricule,setMatricule] = useState('')
    const [nom,setNom] = useState('')
    const [prenom,setPrenom] = useState('')
    const [sexe,setSexe] = useState('')
    const sexes = ['Masculin','Feminin']
    const dispatch = useDispatch()
    const navigateur = useNavigate()
    const ajouter=()=>{
        alert(sexe)
        const newSlaire = {
            matricule :matricule,
            nom : nom,
            prenom : prenom,
            sexe : sexe
        }
        dispatch(addAction(newSlaire))
        navigateur('/')
    }
    return(
        <>
            <form action="#">
                <p>
                    <input type="text" value={matricule} onChange={e=>setMatricule(e.target.value)} placeholder="Matricule..." />
                </p>
                <p>
                    <input type="text" value={nom} onChange={e=>setNom(e.target.value)} placeholder="Nom..." />
                </p>
                <p>
                    <input type="text" value={prenom} onChange={e=>setPrenom(e.target.value)} placeholder="Prenom..." />
                </p>
                <p>
                    {
                        sexes.map(s=>
                            <>
                                <input type="radio" name="sexe" value={s} onClick={e=>setSexe(e.target.value)}/> {s}
                            </>)
                    }
                </p>
                <p>
                    <button type="button" onClick={ajouter}>Ajouter</button>
                </p>
            </form>
        </>
    )
}
export default AjouterSalarier;
    