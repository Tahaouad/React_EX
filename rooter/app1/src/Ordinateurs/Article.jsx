import React from 'react'

export default function Article(props) {
  return (
    <div className='container'>
        {props.ordinateurs.map(pc=>
            <div>
                <h3>{pc.titre}</h3>
                <img src={require(pc.image)} alt='img'/>
                <h4>{pc.prix}</h4>
            </div>
        )}
    </div>
  )
}
