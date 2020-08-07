import React from "react"

function InfoBox(props) {
    return(
        <div style={{backgroundColor: props.backColor}}>
            <h3 style={{textAlign: "center", paddingTop: "10px"}}>Title: {props.title}{props.backColor}</h3>
            <h3 style={{textAlign: "center"}}>Subtitle: {props.subtitle}{props.backColor}</h3>
            <h3 style={{
                        textAlign: "justify", 
                        marginLeft: "10px", 
                        marginRight: "10px",
                        paddingBottom: "10px"}}>Information: {props.info}{props.backColor}</h3>
        </div>
        
    )
}

export default InfoBox