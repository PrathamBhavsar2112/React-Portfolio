import React from "react";

function Education() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Education</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Bachelor of Engineering <span className="h6">from Silver Oak University</span></h5>
                                    <p className="mb-0">September,2020 - PRESENT</p>
                                    <small>I am a student of silver oak university currently persuing Bachelor's degree in Information Technology.  </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">12th(science) GHSEB <span className="h6">from Mangaldeep School</span></h5>
                                    <p className="mb-0">July 2019 - MAR 2019</p>
                                    <small>I study my highschool year in mangaldeep school. spend most of the time prepering for GHSEB and JEE exam. </small>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </React.Fragment>
    );
}

export default Education;