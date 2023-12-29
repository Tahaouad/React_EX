import './App.css';
import List_post from './List_post';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    const getData=async()=>{
      const my_posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(my_posts.data)
    }
    getData()
  })
  return (
    <List_post posts={posts}/>
  );
}

export default App;
