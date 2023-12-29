import { useState } from "react"
import Post from "./Post"

const ListPost=(props)=>{
    const [activeId,setActiveId] =useState('') 
    const handlerActivatedId=(id)=>{
        setActiveId(id)
    } 
    return(
            props.posts.map(p=><Post post={p} handlerActivatedId={handlerActivatedId} activeId={activeId}/>)
        
    )
}
export default ListPost ;