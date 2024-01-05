const init = [{matricule:1,nom:'Jadid',prenom:'Khadija',sexe:'Feminin'}]
export default function reducer(state=init,actions) {
  switch(actions.type){
    case 'add' :return [...state,actions.payload]
    case 'delete':return state.filter(s=>s.matricule !== actions.payload)
    case 'edit':{
        const salarie = state.find(s=>s.matricule === actions.payload.matricule)
        salarie.nom = actions.payload.nom
        salarie.prenom = actions.payload.prenom
        return [...state]
    }
    default : return [...state]
  }
}
