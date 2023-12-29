const R_list=(props)=>{
    return(
        <table>
            <tr>
                <th>Id</th>
                <th>Filiere</th>
            </tr>
            {props.listFiliere.map(l=>
                <tr>
                    <td>{l.id}</td>
                    <td>{l.filiere}</td>
                </tr> )}
        </table>
    )
}
export default R_list ;
