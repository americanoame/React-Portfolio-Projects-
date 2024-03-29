import React from 'react';
import photo1 from "../../images/photo1.jpeg";
import '../../styles/About.css';

export default function About() {
    return (
        <section className='py-5'>

            <div id='about' className='container'>
                <div className='row'>
                    <div className='col-lg-6 mx-auto text-center'>
                        <img src={photo1} alt='andre and Saul' className='img-fluid mb-5 rounded-circle' />
                        <h2 className='--Full-Stack-text'>Full-Stack Web Developer</h2>
                        <p className='--text-marketing'>Crafting experiences & Creating digital
                            solutions to make the world a better place.
                        </p>
                    </div>
                </div>
                <div id='--section-about-me-text' className='row'>
                    <div className='col-lg-6 mx-auto'>
                        <p className='-about-me-text'>Hello hello<span className='my-flags'>🇧🇷🇺🇸</span>  
                            <br/> I'm andre, a web developer recent
                            graduated from Rutgers Coding Bootcamp. and i am so happy to be able to share
                            my journey in this little peace of art. i will be shoing good succefull and my strougues
                            as we know thesre no short cut in this journey we always have to take the strugus as part
                            of the plan and learn from it.
                        </p>
                        <p className='-about-me-text'>Throughout my studies, I have consistently demonstrated
                            my passion for creating innovative and user-friendly websites that meet the needs of
                            diverse audiences.
                            I have had the opportunity to work on a variety of
                            projects and technologies, which has allowed me to develop a well-rounded skill set
                        </p>
                        <p className='-about-me-text'>and deep understanding of web development. I am always
                            eager to expand my knowledge and take on new challenges.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

