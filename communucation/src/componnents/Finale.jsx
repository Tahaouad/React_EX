import React, { useState } from 'react'
import Recherche from './Recherche'
import Afficharge from './Afficharge'

const M = 'Masculin'
const F = 'Feminin'
const DD = 'Developement digital'
const ID = 'Infrastructure digital'
const GE = 'Gestion des entreprises'
const List_etudiant = [
    {
        nom : 'Ouad',
        prenom : 'Taha',
        Sexe : M,
        filiere : DD
    },
    {
        nom : 'Allaoui',
        prenom : 'Achrraf',
        Sexe : M,
        filiere : ID
    },
    {
        nom : 'Jadid',
        prenom : 'Khadija',
        Sexe : F,
        filiere : GE
    },
    {
        nom : 'Douiry',
        prenom : 'Ahmad',
        Sexe : M,
        filiere : DD
    },
    {
        nom : 'Douiry',
        prenom : 'Youssef',
        Sexe : M,
        filiere : ID
    },
    {
        nom : 'Dafir',
        prenom : 'Khalil',
        Sexe : M,
        filiere : ID
    },
    {
        nom : 'Douiry',
        prenom : 'Hamza',
        Sexe : M,
        filiere :DD
    }
]


export default function Finale() {
    const[result,setResult] = useState(List_etudiant)
    function chercher(V){
        const list =List_etudiant.filter(
            (et) =>
                et.Sexe.toLowerCase() === V.toLowerCase() ||
                et.nom.toLowerCase() === V.toLowerCase() ||
                et.prenom.toLowerCase() === V.toLowerCase()
        )
        const sortedList = list.sort((a, b) =>
        a.nom.localeCompare(b.nom)
    );
    setResult(sortedList)

    V===""&&setResult(List_etudiant)

    }
  return (
    <div>
        <Recherche cherche = {chercher}/>
        <Afficharge list={result}/>
    </div>
  )
}
