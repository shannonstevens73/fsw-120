import React from "react"

function SuperHero(props) {

    const handleTheClick = () => {
        alert(props.catchPhrase) }

    return (
        <div onClick = {handleTheClick}>
            <p className="name" >{props.name}</p>
            <img className="image" src={props.imageName}/>
           
        </div>
    )
}

export default SuperHero