import React from 'react';
import Cv1 from "../../images/Cv1.jpg";

export default function Resume() {




    return (

        <div className="container my-5">

            <div className='d-flex justify-content-end'>
                <button onClick={Resume} className="btn btn-lg btn-primary download-button">Download PDF</button>
            </div>

            <div className="row">
                <div class="col-lg-4">
                    <img src={Cv1} alt='andre' className='img-fluid mb-5 rounded-circle' />
                    <h2 className="mb-4">John Doe</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac est eu est aliquam dictum. Integer tristique mauris eu malesuada rutrum. Aenean luctus malesuada neque, eu posuere felis bibendum non. Suspendisse nec risus sit amet lacus fringilla elementum. Donec vestibulum massa vel lacus vehicula faucibus.</p>
                    <h3 className="mb-3">Skills</h3>
                    <ul className="list-unstyled">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="col-lg-8">
                    <h2 className="mb-4">Education</h2>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h3 className="card-title">Bachelor of Science, Computer Science</h3>
                            <h4 className="card-subtitle mb-2 text-muted">University of California, Los Angeles</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac est eu est aliquam dictum. Integer tristique mauris eu malesuada rutrum.</p>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h3 className="card-title">Master of Science, Computer Science</h3>
                            <h4 className="card-subtitle mb-2 text-muted">Stanford University</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac est eu est aliquam dictum. Integer tristique mauris eu malesuada rutrum.</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

