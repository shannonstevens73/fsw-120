import React from "react"

import Navbar from "./Navbar"

function Header() {
    return (
        <div style={{
            textAlign: "center",
            backgroundColor: "slategray",
            height: "200px",
            width: "100%",
            color: "white"
            }}>
            <Navbar />
            <h2 style={{textAlign: "center", paddingTop: "30px"}}>Clean Blog</h2>

                      
        </div>
    )
}

export default Header