import React from 'react';
import '../styles/Project.css';

export default function Projects({ images }) {

    console.log(images)
    return (
        <>
            {images.map(({ src, alt, title, description, deployed, github }) => (
                <div id='backgoun2' className="col-12 col-sm-6 col-lg-4" key={alt}>

                    <div className="image-container">
                        <img src={src} className="card-img-top" alt={alt} />

                    </div>
                    <div className="card-body">
                        <h4 className="card-title pt-2">{title}</h4>
                        <p className="card-text pb-3">{description}</p>
                    </div>
                </div>
            ))}
        </>
    );
}