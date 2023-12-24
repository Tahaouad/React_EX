import axios from "axios"
import { useState } from "react"

const Utilisateur=(props)=>{
    const [post,setPost] = useState([])

    const handlePost=()=>{
        const getData=async()=>{
            const my_post=await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPost(my_post.data.filter(p=>p.userId===props.user.id))
        }
        getData() 
        props.handleActivatedId(props.user.id)
    }
    return (
        <>
            <div className="card">
                <h3 className="card-title">
                        {props.user.username}
                </h3>
                <button type="button" className='btn btn-primary w-25 m-auto'onClick={handlePost} >Posts d'utilisateur</button>
                {props.activedId==props.user.id&& (
                    <>
                    <p>

                        {post.map(p=>
                        <div className="bg-dark text-light w-75 m-auto">
                            <h1>Post</h1>
                            <h3>{p.title}</h3>
                            <p>{p.body}</p>
                            
                        </div>
                        
                        )}
                    </p>
                    </>
                )
                    
                }
            </div>
        </>
    )
}
export default Utilisateur ;