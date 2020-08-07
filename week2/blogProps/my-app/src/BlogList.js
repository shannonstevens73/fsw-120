import React from "react"

function BlogList(props) {
    return (
        <div style={{textAlign: "center"}}>
            <h1>{props.title}</h1>
            <h3>{props.subTitle}</h3>
            <p>Posted by {props.author}<span> on {props.date}</span></p>            
        </div>
    )
}

export default BlogList