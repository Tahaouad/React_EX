import axios from "axios"
import { useState } from "react"

const Post=(props)=>{
    const [comments,setComment] = useState([])

    const handlerComment=()=>{
        const getData=async()=>{
            const my_comment = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setComment(my_comment.data)
        }
        getData()
        props.handlerActivatedId(props.post.id)
    }
    return(
        <div>
            <h3>{props.post.titre}</h3>
            <p>
                {props.post.body}
            </p>
            <button onClick={handlerComment}>Afficher commentaire...</button>
            {props.activeId&&(
                comments.map(e=>
                    <div>
                        <h3>{e.titre}</h3>
                        <p>{e.body}</p>
                    </div>
                )
            )}
        </div>
    )
}

export default Post ; 