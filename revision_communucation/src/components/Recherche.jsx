import React, { useState } from "react";

export default function Recherche(props) {
  const [recherche_par, setRecherchePar] = useState("");

  function rechercher() {
    props.cherche(recherche_par);
  }

  return (
    <div className="container  d-flex  align-items-center bg-dark text-light m-0  w-100 ">
      <form className="form-inline">
        <div className="form-group m-1">
          <label htmlFor="recherche" className="mr-2">
            Recherche :
          </label>
          <input
            type="text"
            id="recherche"
            className="form-control"
            onChange={(e) => setRecherchePar(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary p-1 h-25 ml-2"
          onClick={rechercher}
        >
          <strong>Rechercher</strong>
        </button>
      </form>
    </div>
  );
}
