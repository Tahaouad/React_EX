import { useState } from "react";
import List_comments from "./List_comments"; 

const Comments = (props) => {
  const [activatedId, setActiveId] = useState(1); 
  const handleChangeActivitedId = (id) => {
    setActiveId(id);
  };

  return (
    <div>
      {props.postes.map((p) => (
        <List_comments
          key={p.id} // Ajoutez une clé unique pour chaque élément de la liste
          post={p}
          handleChangeActivitedId={handleChangeActivitedId} // Correctif : handleChangeActivatedId au lieu de handleChangeActivitedId
          activatedId={activatedId}
        />
      ))}
    </div>
  );
};

export default Comments;