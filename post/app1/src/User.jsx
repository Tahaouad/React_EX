import axios from "axios";
import { useState, useEffect } from "react";

const User = (props) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const handlePosts = async () => {
    const myPosts = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${props.user.id}`
    );
    setPosts(myPosts.data);
    props.handleChangeActiveId(props.user.id);
  };

  const handleComments = async (postId) => {
    const myComments = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    setComments(myComments.data);
  };

  return (
    <div className="user">
      <h4>
        {props.user.name} {props.user.username}
      </h4>
      <p>
        <b>Email : </b>
        {props.user.email}
      </p>
      <p>
        <b>Ville : </b>
        {props.user.address.city}
      </p>
      <p>
        <br />
        <button type="button" onClick={handlePosts}>
          Afficher les posts
        </button>
        {props.activeId === props.user.id && (
          posts.map((p) => (
            <div className="post" key={p.id}>
              <h5>{p.title}</h5>
              <p>{p.body}</p>
              <button type="button" onClick={() => handleComments(p.id)}>
                Afficher les commentaires
              </button>
              {comments.map((comment) => (
                <div className="comment" key={comment.id}>
                  <p>{comment.body}</p>
                </div>
              ))}
            </div>
          ))
        )}
      </p>
    </div>
  );
};

export default User;
