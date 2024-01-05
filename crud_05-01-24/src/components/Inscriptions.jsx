import React from 'react';
import { useState } from 'react';

const Inscription = () => {
  const villes = ["Casablanca", "Marakech", "Rabat", "Asfi", "Agadir"];
  const competences = ["Python", "Html", "CSS", "Java", "Mysql"];
  const sexes = ['Masculin', 'Feminin'];

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [ville, setVille] = useState(villes[0]);
  const [sexe, setSexe] = useState("");
  const [competence, setCompetence] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [db, setDb] = useState([]);

  const onChangeCompetences = (e) => {
    const newCompetence = e.target.value;
    if (!competence.includes(newCompetence)) {
      setCompetence([...competence, newCompetence]);
    } else {
      setCompetence(competence.filter((c) => c !== newCompetence));
    }
  };

  const inscrire = () => {
    const newCompte = {
      nom: nom,
      prenom: prenom,
      ville: ville,
      sexe: sexe,
      competence: competence,
      email: email,
      password: password
    }
    password === confirmPassword && setDb([...db, newCompte]);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <fieldset className="border p-4 rounded shadow">
            <legend className="text-center "><strong className='text-success fs-2'> Inscription</strong></legend>
            <form>
              <div className="mb-2">
                <label htmlFor="nom" className="form-label">
                  Nom:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="prenom" className="form-label">
                  Prenom:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="prenom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="ville" className="form-label">
                  Ville:
                </label>
                <select
                  className="form-select"
                  id="ville"
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                >
                  {villes.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-2">
                <label className="form-label">Sexe:</label>
                {sexes.map((s) => (
                  <div key={s} className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sexe"
                      value={s}
                      onChange={(e) => setSexe(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="sexe">
                      {s}
                    </label>
                  </div>
                ))}
              </div>
              <div className="mb-2">
                <label className="form-label">Compétences:</label>
                {competences.map((c) => (
                  <div key={c} className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={c}
                      onChange={onChangeCompetences}
                      checked={competence.includes(c)}
                    />
                    <label className="form-check-label">{c}</label>
                  </div>
                ))}
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={inscrire}
              >
                S'inscrire
              </button>
            </form>
            {db.map((d) => (
              <div key={d.email}>{d.competence.join(', ')}</div>
            ))}
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
