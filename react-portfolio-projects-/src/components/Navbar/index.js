import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (

        <header className="navbar">
            <div>
                <div>
                    <Link to="/">
                        <h1 className="">Andre Silva</h1>
                    </Link>
                    <p className="">I'm frontend developer.</p>
                </div>

                <div>
                    <Link className="" to="/about">
                        About
                    </Link>

                    <Link className="" to="/project">
                        Project
                    </Link>

                    <Link className="" to="/contact">
                        Contact
                    </Link>

                    <Link className="btn btn-lg btn-light m-2" to="/resume">
                        Resume
                    </Link>
                </div>


            </div>
        </header>
    )
}

// export default Navbar;