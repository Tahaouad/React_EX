import axios from 'axios';
import { useState } from "react";

const List_comments = (props) => {
  const [Comments, setComments] = useState([]);

  const handleComments = () => {
    const getData = async () => {
      const my_Comments = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setComments(my_Comments.data.filter(c => c.postId == props.post.id));
    };
    getData();
    props.handleChangeActivitedId(props.post.id);
  };

  return (
    <>
      <div className='card w-75 m-auto p-3'>
        <h5 className='card-title'>{props.post.title}</h5>
        <p className='card-text'>{props.post.body}</p>
        <button type='button' className='btn btn-primary w-25' onClick={handleComments}>
          Comments
        </button>
      </div>

      {props.activatedId === props.post.id && (
        Comments.map(c => (
          <div key={c.id} className='card w-75 mb-5 mt-1 m-auto bg-dark p-3'>
            <h6 className='card-subtitle mb-2 text-white'>{c.email}</h6>
            <h5 className='card-title text-white'>{c.name}</h5>
            <p className='card-text text-white'>{c.body}</p>
          </div>
        ))
      )}
    </>
  );
};

export default List_comments;
