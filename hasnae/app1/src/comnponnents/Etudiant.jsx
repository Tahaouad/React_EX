const Etudiant=(props)=>{
    return(
        <div>
            <table>
                <tr>
                    <th>Nom</th>
                <th>Prenom</th>
                </tr>
                {
                props.liste.map(e=>
                    <tr>
                    <td>{e.nom}</td>
                <td>{e.prenom}</td>
                    </tr>
                )
            }
            </table>
        </div>
    )
}    
export default Etudiant ;