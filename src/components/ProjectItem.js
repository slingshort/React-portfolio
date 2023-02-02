import React from "react";

export default function ProjectCard(props) {
    return(
        <div className="card">
            <h4>{props.title}</h4>
            {/* <img
            className="image"
            alt={props.title}
            src={require('../assets/'+ props.image)}
            /> */}
            <p>{props.description}</p>
            <div>
                <a href={props.repo}><button className="card-button">repo</button></a>
                <a href={props.live}><button className="card-button">live</button></a>
            </div>
        </div>
    )
}