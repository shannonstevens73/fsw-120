import React from "react"

function Navbar() {
    return (
        <div>
                <ul style={{
                        listStyleType: "none", 
                        display: "flex", 
                        flexFlow: "row",
                        paddingTop: "10px", 
                        color: "white",
                        fontSize: "150"}}>

                        <li style={{fontWeight: "bold", paddingLeft: "180px", paddingRight: "225px"}}>Start Bootstrap</li>
                        <li style={{paddingRight: "13px"}}><a href="#">Home</a></li>
                        <li style={{paddingRight: "13px"}}>About</li>
                        <li style={{paddingRight: "13px"}}>Sample Blog</li>
                        <li>Contact</li>
                </ul>                     
        </div>
    )
}

export default Navbar