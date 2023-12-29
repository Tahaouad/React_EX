import { useState } from "react"
import axios from 'axios';

const Post=(props)=>{

    const [comments,setComments] = useState([])

    const handlerComment=()=>{
        const getData=async()=>{
            const my_comments = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setComments(my_comments.data)
        }
        getData()
        props.handlerIdActivated(props.poste.id)
    }
    return(
        <div>
            <h2>{props.poste.title}</h2>
            <p>{props.poste.body}</p>
            <button type="button" onClick={handlerComment}>Afficher comments...!</button>
            {props.activePost==props.poste.id&&(comments.map(c=>{
                        <div>
                            <h3>{c.name}</h3>
                            <p>{c.body}</p>
                        </div>
                   } )
            )}
        </div>

    )

}

export default Post ; 