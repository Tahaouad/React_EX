import React from "react"

export default class Student extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {nom,prenom,diplomes} = this.props.student
        return(
            <div className="card p-0 w-25 bg-success">
                <div className="card-body m-auto">    
                <h1 className="card-title text-light">{nom} {prenom}</h1>
                    <ul>{
                        diplomes.map(
                            (d,i) => <li>{d}</li>
                          )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}