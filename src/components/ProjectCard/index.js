import React from "react";
import "./style.css";

function ProjectCard(props) {
    console.log(props);
    return (
        <div className="card text-white">
            <img alt={props.title} src={props.image} className="img-responsive" width="100%" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.body}</p>
                <p className="card-text">Technologies used: {props.technology}</p>
                <br></br>
                <div className="text-center">
                    <a className="btn" id="project"
                        href={props.link} target="_blank">Project</a>
                    <a className="btn" id="repo"
                        href={props.github} target="_blank">Repo</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard