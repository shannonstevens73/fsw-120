import React from "react"

function Spot(props) {
    return (
        <div style={{textAlign: "center", color: "blue"}}>
            <h3>Place: {props.place}</h3>
            <h3>Price: {props.price}</h3>
            <h3>timeToGo: {props.time}</h3>
            <hr style={{marginLeft: "100px", marginRight: "100px"}}/>
        </div>
    )
}

export default Spot