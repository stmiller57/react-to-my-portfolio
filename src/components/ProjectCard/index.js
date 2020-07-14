import React from "react";
import "./style.css";

function ProjectCard(props) {
    console.log(props);
    return (
        <div className="card border-success">
            <img alt={props.title} src={props.image} className="img-responsive" width="100%" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.body}</p>
                <p className="card-text">Technologies used: {props.technology}</p>
                <a className="text-success"
                    href={props.project}>Deployed project</a>
                <br></br>
                <a className="text-success"
                    href={props.github}>GitHub repo</a>
            </div>
        </div>
    );
}

export default ProjectCard;