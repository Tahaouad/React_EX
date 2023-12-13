import 'bootstrap/dist/css/bootstrap.min.css';



export default function Afficharge({list}) {
  return (
    <>
        <table className='table table-bordered t-center p-2 w-75 m-auto '>
            <tr className='border p-5' >
                <th className='p-2'>Nom</th>
                <th className='p-2'>Prenom</th>
                <th className='p-2'>Sexe</th>
                <th className='p-2'>Filter</th>
            </tr>
            {list.map(etudiant =>
                <tr>
                    <td className='p-1'>{etudiant.nom}</td>
                    <td className='p-1'>{etudiant.prenom}</td>
                    <td className='p-1'>{etudiant.Sexe}</td>
                    <td className='p-1'>{etudiant.filiere}</td>
                </tr>)
            
            }
            {
                list.length===0 && <tr><td className='alert alert-danger w-100' colSpan={4}>Not found</td></tr>
            }
            
        </table>
    </>
  )
}
