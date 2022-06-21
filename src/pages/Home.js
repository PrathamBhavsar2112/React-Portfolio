import React from "react";
import avtar from "./../images/logo.png";

function Home() {
    return (
        <div className="min-h-screen">
            <div className="container pt-5 d-flex flex-column align-items-center">
                <img src={avtar} width={200} alt="Pratham Bhavsar" />
                <h1>Pratham Bhavsar</h1>
                <h4>(Software Engineer)</h4>
                <p className="text-center border-bottom pb-3">An aspiring computer engineer with skills in developing amazing solutions for real-time problems and possesing love for the web development. </p>
                <p className="text-center">
                    <span className="d-mobile-block">Email: bhavsarpratham2112@gmail.com</span>
                    <span className="d-none d-web-contents"> | </span>
                    <span className="d-mobile-block">Phone: +91-7016808730</span>
                </p>
                <p className="text-center">Address: C5, 304 Shukan Smile City, New ranip, Ahedabad, Gujrat, India.</p>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-3">Skills</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">HTML</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }}>80%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">CSS</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "70%" }} >70%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">Java Script</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "50%" }}>40%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">Python</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} >80%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-3">Hobbies</h5>
                                <span class="badge bg-primary me-3 mb-3 p-2">Cricket</span>
                                <span class="badge bg-secondary me-3 mb-3 p-2">Video games</span>
                                <span class="badge bg-success me-3 mb-3 p-2">Music</span>
                                <span class="badge bg-danger me-3 mb-3 p-2">Reading Books</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;