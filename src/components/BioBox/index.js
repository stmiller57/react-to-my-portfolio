import React from "react";
import "./style.css";

function BioBox() {
    return (
        <div className="row">
            <div className="card mb-3" id="bio-card">
                <div className="row no-gutters">
                    <div className="col-sm-4">
                        <img className="card-img border border-dark rounded-circle" src="public/assets/Profile.jpeg"
                            alt="Stephen Miller" />
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h3 id="About" className="card-title">About Me</h3>
                            <p className="card-text">I'm a junior web developer pursuing
                            full-stack
                            certification from the Penn LPS coding bootcamp. I spent 20 years as a journalist,
                            covering everything from the Philadelphia Phillies to college basketball to high
                            school
                            football.</p>
                            <p>I love to watch sports, read, listen to music and spend
                            time
                            with my wife and two boys. I somehow ended up a fan of the Philadelphia Eagles,
                            New
                            York Mets and Boston Celtics. Ask me if you want the whole story.</p>
                            <h5 id="contact">Contact information</h5>
                            <h6 className="text-center"> <a href="mailto:samiller57@gmail.com">samiller57@gmail.com</a>
                            ||
                            <a href="tel:2672352317">267-235-2317</a> || <a
                                    href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:fdfcb4da-a6e8-4ea8-b5d1-8b46533d1649">Resume</a>
                            || <a href="https://github.com/stmiller57">
                                    <img src="public/assets/GitHub.png" className="img-responsive rounded-circle"
                                        width="4%"></img></a> || <a href="https://www.linkedin.com/in/stephenmiller57/">
                                    <img src="public/assets/LI-In-Bug.png" className="img-responsive" width="4%"></img></a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BioBox;