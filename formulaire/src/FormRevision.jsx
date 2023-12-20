import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const FormRevision = (props) => {
  const [identifiant, setIdentifiant] = useState("");
  const [pwd, setPwd] = useState("");
  const [datenaiss, setDatenaiss] = useState("");
  const [ville, setVille] = useState("");
  const [genre, setGenre] = useState("");
  const [loisir, setLoisirs] = useState([]);
  const [image, setImage] = useState(null);
  const [affichage, setAffichage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAffichage(
      `Je suis ${identifiant} né le ${datenaiss} à ${ville} et mes loisirs sont : ${loisir}`
    );
  };

  const handleLoisire = (e) => {
    if (!loisir.includes(e.target.value)) {
      setLoisirs([...loisir, e.target.value]);
    } else {
      setLoisirs(loisir.filter((L) => L !== e.target.value));
    }
  };

  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="mb-4 text-center">Inscription</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="identifiant" className="form-label">
                Identifiant :
              </label>
              <input
                type="text"
                className="form-control"
                id="identifiant"
                onChange={(e) => setIdentifiant(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pwd" className="form-label">
                Mot de passe :
              </label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="datenaiss" className="form-label">
                Date de naissance :
              </label>
              <input
                type="date"
                className="form-control"
                id="datenaiss"
                onChange={(e) => setDatenaiss(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ville" className="form-label">
                Ville :
              </label>
              <select
                className="form-select"
                name="ville"
                id="ville"
                onChange={(e) => setVille(e.target.value)}
              >
                {
                    props.listville.map(LV=><option value={LV}>{LV}</option>)
                }
                
                
              </select>
            </div>
            <div className="mb-3">
              <label className="form-check-label d-block">Genre :</label>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="sexe"
                  id="Masculin"
                  value="Masculin"
                  onChange={(e) => setGenre(e.target.value)}
                />
                <label htmlFor="Masculin" className="form-check-label">
                  Masculin
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="sexe"
                  id="Feminin"
                  value="Feminin"
                  onChange={(e) => setGenre(e.target.value)}
                />
                <label htmlFor="Feminin" className="form-check-label">
                  Feminin
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-check-label d-block">Loisirs :</label>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="sport"
                  onChange={handleLoisire}
                />
                <label className="form-check-label">Sport</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="Music"
                  onChange={handleLoisire}
                />
                <label className="form-check-label">Music</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="Lecture"
                  onChange={handleLoisire}
                />
                <label className="form-check-label">Lecture</label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="photo" className="form-label">
                Photo :
              </label>
              <input
                type="file"
                className="form-control"
                id="photo"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-primary">
                S'inscrire
              </button>
            </div>
          </form>
          {affichage && <div className="mt-3 text-center">{affichage}</div>}
        </div>
      </div>
    </div>
  );
};

export default FormRevision;
