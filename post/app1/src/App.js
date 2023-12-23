import axios from "axios";
import { useEffect, useState } from "react";
import UsersList from "./UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const myUsers = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(myUsers.data);
    };

    getData();
  }, []);

  return <UsersList utilisateurs={users} />;
};

export default App;
