import { useState } from "react";
import Utilisateur from "./Utilisateur";

const List_users = (props) => {
    const [activedId, setActivedId] = useState();

    const handleActivatedId = (id) => {

        setActivedId(id);

    }

    return (
        <>
            {props.utilisateurs.map(u =>
                <Utilisateur
                    key={u.id} 
                    activedId={activedId}
                    user={u}
                    handleActivatedId={handleActivatedId} />
            )}
        </>
    );
}

export default List_users;
