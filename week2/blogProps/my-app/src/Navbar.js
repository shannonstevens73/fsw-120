import React from "react"

function Navbar() {
    return (
        <div>
                <ul style={{
                        listStyleType: "none", 
                        display: "flex", 
                        flexFlow: "row",
                        paddingTop: "10px"}}>

                        <li style={{color: "white", fontSize: "10px", fontWeight: "bold", paddingLeft: "180px", paddingRight: "250px", fontFamily: "sans-serif"}}><a style={{color: "white", fontSize: "10px", textDecoration: "none"}} href="#">Start Bootstrap</a></li>
                        <li style={{paddingRight: "13px"}}><a style={{color: "white", fontSize: "10px", textDecoration: "none"}} href="#">Home</a></li>
                        <li style={{paddingRight: "13px"}}><a style={{color: "white", fontSize: "10px", textDecoration: "none"}} href="#">About</a></li>
                        <li style={{paddingRight: "13px"}}><a style={{color: "white", fontSize: "10px", textDecoration: "none"}} href="#">Sample Blog</a></li>
                        <li><a style={{color: "white", fontSize: "10px", textDecoration: "none"}} href="#">Contact</a></li>
                </ul>                     
        </div>
    )
}

export default Navbar