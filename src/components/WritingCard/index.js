import React from "react";
import "./style.css";

function WritingCard(props) {
    console.log(props);
    return (
        <div className="card text-white bg-dark border-success">
            <img alt={props.title} src={props.image} className="img-responsive" width="100%" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.body}</p>
                <div className="text-center">
                    <a className="btn btn-success" id="project"
                        href={props.link} target="_blank">Article</a>
                </div>
            </div>
        </div>
    );
}

export default WritingCard;