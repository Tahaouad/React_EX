import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Users() {
    const [Users,setUsers] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((result)=>setUsers(result.data))
    },[])
  return (
    <div className='d-flex flex-wrap container-fluid ' >
        {
            Users.map(user=>
                <div className="card bg-info  w-25 m-1" >
                    <h1 className="card-title">{user.name}</h1>
                        <div className="card-body">
                            <ul>
                                <li>{user.address.city}</li>
                                <li>{user.email}</li>
                                <li>{user.username}</li>
    
                            </ul>
                        </div>
                </div>
                )
        }    
       
    </div>
  )
}
swwsxdc