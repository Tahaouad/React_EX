import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ListPost from './ListPost';

function App() {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    const getData=async()=>{
      const My_Posts=await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(My_Posts.data)
    }
    getData()
  })
  return (
    <div>
        LIst posts
        <ListPost posts={posts}/>
    </div>
  );
}

export default App;
