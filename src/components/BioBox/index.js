import React from "react";
import "./style.css";

function BioBox() {
    return (
        <div className="container">
            <div className="row">
                <div className="card text-white bg-dark mb-3 border-success" id="bio-card">
                    <div className="row no-gutters">
                        <div className="col-sm-4">
                            <img className="card-img border border-dark rounded-circle" src="./assets/Profile.jpeg"
                                alt="Stephen Miller" />
                        </div>
                        <div className="col-sm-8">
                            <div className="card-body">
                                <h3 id="About" className="card-title text-center">About Me</h3>
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
                                <h5 id="contact">Let's Connect!</h5>
                                <h6 className="text-center">
                                    <br>
                                    </br>
                                    <a href="mailto:samiller57@gmail.com"><img src="./assets/Gmail.svg" alt="Phone" className="img-responsive"
                                        width="5%" /></a>
                                    <a href="tel:2672352317"><img src="./assets/Phone.svg" alt="Phone" className="img-responsive"
                                        width="5%" /></a>
                                    <a href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:41c59448-a10a-48b8-b370-a24dfb2ccda6" target="_blank"><img src="./assets/Resume.svg" alt="Resume" className="img-responsive"
                                        width="5%" /></a>
                                    <a href="https://github.com/stmiller57" target="_blank">
                                        <img src="./assets/GitHub.svg" alt="GitHub Logo" className="img-responsive"
                                            width="5%" /></a>
                                    <a href="https://www.linkedin.com/in/stephenmiller57/" target="_blank">
                                        <img src="./assets/LinkedIn.svg" alt="LinkedIn Logo" className="img-responsive" width="5%" /></a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BioBox;