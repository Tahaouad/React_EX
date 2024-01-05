import { useDispatch, useSelector } from "react-redux"
import { deleteAction } from "./actions"
import { Link } from "react-router-dom"
const ListSalaries=()=>{
    const salaries = useSelector(result=>result)
    const dist = useDispatch()  
    function supprimer(mat){
        dist(deleteAction(mat))
    }
    return(
        <>
            <h1>Gestion des salarie</h1>
            <Link to={'/AjouterSalarier'}>
                <button type="button">
                    Ajouter
                </button>
            </Link>
            <table border={1} width='100%'>
                <tr>
                    <th>
                        Matricule
                    </th>
                    <th>
                        Nom
                    </th>
                    <th>
                        Prenom
                    </th>
                    <th>
                        sexe
                    </th>
                    <th colSpan={2}>
                        Acions
                    </th>
                </tr>
                {
                    salaries.map(e=>
                        <tr>
                            <td>{e.matricule}</td>
                            <td>{e.nom}</td>
                            <td>{e.prenom}</td>
                            <td>{e.sexe}</td>
                            <td>
                                <button type="button" onClick={()=>supprimer(e.matricule)}>Supprimer </button>
                            </td>
                            <td>
                                <button type="button">Modifier </button>
                            </td>                            
                        </tr>)
                }
            </table>
        </>
    )
}
export default ListSalaries ;