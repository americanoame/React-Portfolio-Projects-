// import React from 'react';
// import React, { useState } from 'react';
import Cv1 from "../../images/Cv1.jpg";
import Cv2 from "../../images/Resume.pdf";
import '../../styles/Resume.css';


// const PDF_FILE_URL = 'http://localhost:3000/andreSilva-Resume.pdf'


export default function Resume() {
    console.log('button clicked');


    const downloadFileAtURL = (url) => {
        fetch(url).then(response => response.blob()).then(blob => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]))
            
            const fileName = url.split('/').pop();
            const aTag = document.createElement('a');
            aTag.href = blobURL;
            aTag.setAttribute('download', fileName);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();

        })

    };

    return (

        <div className="container my-5">

            <div className='d-flex justify-content-end'>

                {/* <a href={Cv2} download>Click to download</a> */}


                <button onClick={() => { downloadFileAtURL(Cv2) }}>Download PDF</button>
            </div>

            <div className="row">

                <div className="col-lg-2">
                    <img src={Cv1} alt='andre' className='img-fluid mb-5 rounded-circle cv-image' />
                    <hr />
                </div>

                <div className="col-lg-8">
                    <h1 className="header-name">Andre Silva</h1>
                    <h2 className="header-task">
                        Full Stack Web Developer / Caddie
                    </h2>
                    <hr />
                    <div className="header-summary">

                        <p>Highly motivated individual with a passion for
                            web development and a strong background in customer
                            service. Committed to providing excellent customer
                            service and delivering results. Seeking a career
                            transition to web development where I can leverage
                            my customer service experience to provide exceptional
                            web development solutions.
                        </p>
                    </div>

                    <h2 className="work-experience">WORK EXPERIENCE</h2>
                    <hr />
                    <div className="all-companies">
                        <div className="Mountain-ridge">
                            <h3>Mountain Ridge Country Club</h3>
                        </div>
                        <p className="role">Caddie</p>
                        <p className="time-range">April 2009 - Present</p>
                        <ul>
                            <li>
                                provide support and assistance to golfers during their round of golf,
                                helping them to navigate the course and make the most of their game.
                            </li>
                            <li>
                                Managed day-to-day operations of the golf course, including scheduling,
                                and customer service
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="all-companies">
                        <div className="Mountain-ridge">
                            <h3>Amazon Flex</h3>
                        </div>
                        <p className="role">Driver</p>
                        <p className="time-range">April 2017 - march 2020</p>
                        <ul>
                            <li>
                                helping Amazon meet its customer delivery commitments while providing
                                a great costumer service work.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="all-companies">
                        <div className="Mountain-ridge">
                            <h3>Uber</h3>
                        </div>
                        <p className="role">Driver</p>
                        <p className="time-range">April 2015 -  2019</p>
                        <ul>
                            <li>
                                providing safe, reliable transportation to passengers
                                while also representing the Uber brand and providing a positive customer experience.
                                <li>
                                    Throughout this task. i did 4293 trips and 1610 deliveries with no accident and always providing
                                    good costumer service and always safety first.
                                </li>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <h3 className="mb-3">Skills</h3>
                    <ul className="">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Node</li>
                        <li>React</li>
                        <li>MongoDb/ Mongoose</li>
                    </ul>

                    <div className="card mt-5 mb-2">
                        <div className="card-body">
                            <h2 className="education-text">Education</h2>
                            <h3 className="card-title">Full Stack Web Developer</h3>
                            <h4 className="card-subtitle mb-2 text-muted">
                                Rutgers University Coding Bootcamp</h4>
                            <p className="card-text">Nov 17 2022 - Feb 17 2023</p>
                        </div>
                    </div>
                    <button onClick={() => { downloadFileAtURL(Cv2) }}>Download PDF</button>
                </div>
            </div>
            {/* )} */}
        </div>



    )
}

