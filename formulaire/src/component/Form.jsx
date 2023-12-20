import { useState } from "react";

function Form(){
    const [email,setEmail]=useState('');
    const [pwd,setPwd]=useState('');
    const handleChange=(event)=>{
         setEmail(event.target.value);
    }
    const handdleChangepwd=(event)=>{
        setPwd(event.target.value)
    }
    const handleSubmit=(event)=>{
        alert(`L'email est :${email} Password est : ${pwd}` )
        event.preventDefault();
    }
    const handleFocus=(event)=>{
        setPwd("")
    }
    return(
        <div>
        
            <form action="#" className="container w-75 m-auto text-center p-3" onSubmit={handleSubmit} >
                <div className="form-group ">
                    <label htmlFor="email" className="p-3"> Email </label>
                    <input className="form-control w-50 m-auto " type="text" name="email" id="email" placeholder="Entrer votre email" onChange={handleChange}/>
                </div>
                <div className="form-group ">
                    <label htmlFor="Password" className="p-3"> Password  </label>
                    <input className="form-control w-50 m-auto " type="password"  name="Password" id="Password" placeholder="Entrer votre Password" onChange={handdleChangepwd} onFocus={handleFocus}/>
                </div>
                <input type="submit" value="Envoyer" className="btn btn-primary m-3" />

            </form>
        </div>
    )
}
export default Form;