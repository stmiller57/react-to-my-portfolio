import React from "react";
import "./style.css";

function BioBox() {
    return (
        <div className="container">
            <div className="row">
                <div className="card text-white mb-3" id="bio-card">
                    <div className="row no-gutters">
                        <div className="col-sm-4">
                            <img className="card-img border border-dark rounded-circle" src="./assets/Profile.PNG"
                                alt="Stephen Miller" />
                        </div>
                        <div className="col-sm-8">
                            <div className="card-body">
                                <h3 id="About" className="card-title text-center">About Me</h3>
                                <p className="card-text">I'm a junior web developer who recently graduated from the Penn LPS coding bootcamp with a certificate in full-stack web development. I spent 20 years as a journalist,
                                covering everything from the Philadelphia Phillies to college basketball to high
                                school
                            football.</p>
                                <p>I love to watch sports, read, listen to music and spend
                                time
                                with my wife and two boys. I somehow ended up a fan of the Philadelphia Eagles,
                                New
                            York Mets and Boston Celtics. Ask me if you want the whole story.</p>
                                <h5 id="contact">Let's Connect!</h5>
                                <h6 className="text-center">
                                    <br>
                                    </br>
                                    <a href="mailto:samiller57@gmail.com"><img src="./assets/Gmail.svg" alt="Phone" className="img-responsive"
                                        width="8%" /></a>
                                    <a href="tel:2672352317"><img src="./assets/Phone.svg" alt="Phone" className="img-responsive"
                                        width="8%" /></a>
                                    <a href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:857c0407-abf7-479d-aa28-df6833325d8a" target="_blank"><img src="./assets/Resume.svg" alt="Resume" className="img-responsive"
                                        width="8%" /></a>
                                    <a href="https://github.com/stmiller57" target="_blank">
                                        <img src="./assets/GitHub.svg" alt="GitHub Logo" className="img-responsive"
                                            width="8%" /></a>
                                    <a href="https://www.linkedin.com/in/stephenmiller57/" target="_blank">
                                        <img src="./assets/LinkedIn.svg" alt="LinkedIn Logo" className="img-responsive" width="8%" /></a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BioBox;