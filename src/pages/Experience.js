import React from "react";

function Experience() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Experience</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Internship<span className="h6">at Coding Gujju</span></h5>
                                    <p className="mb-0">Jun 2022 - PRESENT</p>
                                    <small>Learn about HTML,CSS and create a personal portfolio using figma app. Learn how to host your website in localhost using React.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">FrontEnd Developer <span className="h6">at Microsoft</span></h5>
                                    <p className="mb-0">APR 2018 - APR 2020</p>
                                    <small>Work as Frontend Developer at Microsoft. learn about backend as well frontend.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Experience;