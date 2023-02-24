import React from 'react';
import '../styles/Project.css';

export default function Projects({ images }) {

    console.log(images)
    return (
        <>
            {images.map(({ src, alt, title, description,}) => (
                <div id='backgoun2' className="col-12 col-sm-6 col-lg-4" key={alt}>

                    <div className="container">
                        <img src={src} className="card-img-top" alt={alt} />

                    </div>
                    <div className="card-body">
                        <button href='https://github.com/americanoame/Redux-e-commerce-platform' className="card-title pt-2">{title}</button>
                        <p className="card-text pb-3">{description}</p>
                    </div>

                    

                    {/* <div id='2' className="card-body">
                        <button href='https://github.com/americanoame/Note-Taker' className="card-title pt-2">{title}</button>
                        <p className="card-text pb-3">{description}</p>
                    </div> */}
                   

                </div>
            ))}
        </>
    );
}