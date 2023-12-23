import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Comments from './Comments';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const my_posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(my_posts.data);
    };
    getData(); // Correctif : Ajoutez des parenthèses pour appeler la fonction getData
  }, []);

  return (
    <div className="App"> {/* Ajoutez une classe pour styliser l'application */}
      {/* Utilisez Comments avec la bonne prop postes */}
      <Comments postes={posts} />
    </div>
  );
}

export default App;