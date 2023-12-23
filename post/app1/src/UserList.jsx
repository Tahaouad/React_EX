import { useState } from "react";
import User from "./User";

const UsersList = (props) => {
  const [activeId, setActiveId] = useState(0);

  const handleChangeActiveId = (id) => {
    setActiveId(id);
  };

  return (
    <>
      <h1>Le nombre des utilisateurs est {props.utilisateurs.length}</h1>
      <hr />
      {props.utilisateurs.map((u) => (
        <User
          key={u.id}
          handleChangeActiveId={handleChangeActiveId}
          user={u}
          activeId={activeId}
        />
      ))}
    </>
  );
};

export default UsersList;
