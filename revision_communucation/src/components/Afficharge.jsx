import "bootstrap/dist/css/bootstrap.css"
export default function Affichage(props) {
  return (
    <div className="bg-dark" >
      <table className="container table table-dark table-striped w-100">
        <thead className="thead-dark">
          <tr>
            <th>Marque</th>
            <th>Description de Marque</th>
            <th>Date creation</th>
          </tr>
        </thead>
        <tbody>
          {props.list_marque.map((et, index) => (
            <tr key={index}>
              <td>{et.Marque}</td>
              <td>{et.Description_de_Marque}</td>
              <td>{et.Date_creation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
