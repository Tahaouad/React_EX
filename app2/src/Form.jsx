import React, { useState } from 'react'

export default function Form() {
    const [pwd,setPwd]=useState()
    const [cpwd,setCpwd]=useState()
    return (
   
    <form>Mot de passe
        <input type="password" name="pwd" id="pwd"   
        onChange={(ev)=>setPwd(ev.target.value)}/>
        confirmation mot de passe
        <input type="password" name="cpwd" id="cpwd" 
        onChange={(ev)=>setCpwd(ev.target.value)}/>
        {
        cpwd===pwd?<p></p>:<p>Les deux mot de passe sont pas compatible </p>
    }
    </form>
    
  )
}
