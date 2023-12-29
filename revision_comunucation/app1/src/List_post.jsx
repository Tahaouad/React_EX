import { useState } from "react"
import Post from "./Post"


const List_post=(props)=>{ 
    const [activeId,setActiveId]= useState('')
    const handlerIdActivated=(id)=>{
        setActiveId(id)
    }

    return(
        props.posts.map(p=><Post poste={p} activePost={activeId} handlerIdActivated={handlerIdActivated}/>)
    )
}

export default List_post ;