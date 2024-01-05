import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const connecter =()=>{ 
  
    window.location.href = '/Welcomming-page'          
}
  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6">
          <form className="p-4 border rounded shadow w-75 m-auto">
            <legend className="text-center mb-4">
              <strong className="text-success fs-2">Se connecter</strong>
            </legend>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                placeholder="Entrer votre email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                placeholder="Entrer votre mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 text-center">
              <button type="button" className="btn btn-success p-2" onClick={connecter}>
                Se connecter
              </button>
              <div>
                <h6>
                  Vous n'avez pas de compte{" "}
                  <Link to={`/inscription`}>
                    S'inscrire
                  </Link>
                </h6>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
