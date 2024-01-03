const { useState } = require("react");

const Emploies = () => {
  const [emploies, setEmploies] = useState([]);
  const [id, setId] = useState(0);
  const [matricule, setMatricule] = useState("");
  const [nom, setNom] = useState("");
  const [ville, setVille] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [salaire, setSalaire] = useState("");
  const [emploies2, setEmploies2] = useState([]);

  const Ajouter = () => {
    const ValidMatricule = emploies.find((e) => e.matricule === matricule);

    if (!(ValidMatricule) && salaire >= 3800) {
      const newEmploie = {
        id: id,
        matricule: matricule,
        nom: nom,
        ville: ville,
        codePostal: codePostal,
        salaire: salaire,
      };
      setEmploies([...emploies, newEmploie]);
      setId(id + 1);
    }
  };

  const supprimer = (id) => {
    setEmploies(emploies.filter((e) => parseInt(e.id) !== parseInt(id)));
  };

  const modifier = (i) => {
    const employeAModifier = emploies.find((e) => parseInt(e.id) === parseInt(i));

    if (employeAModifier) {
      setId(employeAModifier.id);
      setMatricule(employeAModifier.matricule);
      setNom(employeAModifier.nom);
      setVille(employeAModifier.ville);
      setCodePostal(employeAModifier.codePostal);
      setSalaire(employeAModifier.salaire);
    }
  };

  const vider = () => {
    setMatricule("");
    setNom("");
    setVille("");
    setCodePostal("");
    setSalaire("");
  };

  const filtrer = () => {
    setEmploies2(emploies.filter((e) => e.nom == nom || e.ville == ville));
  };
  const initialiserRecherche = () => {
    setEmploies2([]);
  };

  return (
    <>
      {emploies.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Matricule</th>
              <th>Nom</th>
              <th>Ville</th>
              <th>Code Postal</th>
              <th>Salaire</th>
              <th>Supprimer</th>
              <th>Modifier</th>
            </tr>
          </thead>
          <tbody>
            {emploies.map((employe) => (
              <tr key={employe.id}>
                <td>{employe.id}</td>
                <td>{employe.matricule}</td>
                <td>{employe.nom}</td>
                <td>{employe.ville}</td>
                <td>{employe.codePostal}</td>
                <td>{employe.salaire}</td>
                <td>
                  <button type="button" onClick={() => supprimer(employe.id)}>
                    Supprimer
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => modifier(employe.id)}
                  >
                    Modifier
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Aucun employé</div>
      )}
      <form action="#">
        <p>
          Id :
          <input
            required
            readOnly
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </p>
        <p>
          Matricule :
          <input
            required
            type="text"
            value={matricule}
            onChange={(e) => setMatricule(e.target.value)}
          />
        </p>
        <p>
          Nom :
          <input
            required
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </p>
        <p>
          Ville :
          <input
            required
            type="text"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
          />
        </p>
        <p>
          Code Postal :
          <input
            required
            type="text"
            value={codePostal}
            onChange={(e) => setCodePostal(e.target.value)}
          />
        </p>
        <p>
          Salaire :
          <input
            required
            type="text"
            value={salaire}
            onChange={(e) => setSalaire(e.target.value)}
          />
        </p>
        <p>
          <button type="button" onClick={Ajouter}>
            Ajouter
          </button>
          <button type="button" onClick={filtrer}>
            Filtrer ville et nom
          </button>
          <button type="button" onClick={vider}>
            Vider
          </button>
          <button type="button">Inistialiser recherche</button>
        </p>
      </form>
      {emploies2.length > 0 && (
        <ul>
          {emploies2.map((e) => (
            <li key={e.id}>{`${e.nom} / ${e.matricule}`}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Emploies;
