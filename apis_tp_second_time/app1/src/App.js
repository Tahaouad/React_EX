import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import List_users from './components/List_users';

function App() {
  const [utilisateur,setutilisateur] = useState([])
  useEffect(()=>{
    const getData=async()=>{
    const our_users = await axios.get('https://jsonplaceholder.typicode.com/users')
    setutilisateur(our_users.data)
  }
  getData()
  },[])
  return (
    <div className="App">
        <List_users utilisateurs ={utilisateur}/>
    </div>
  );
}

export default App;
