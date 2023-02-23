// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import './Navbar.css';


function Navbar({ currentPage, handlePageChange }) {
    return (

        <div>

            <nav className="navbar navbar-expand-lg">
                <a  className="navbar-brand" href="#about" onClick={() => handlePageChange('About')}>
                    <span href='/' className="brand">Andre Silva</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} aria-current="page">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                                Contact
                            </a>

                        </li>
                        <li className="nav-item">
                            <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>








        /* // <div className="navbar d-flex justify-content-center">

        //  <nav className="navbar fixed-top navbar-expand-lg justify-content-end">
        //         <div className="container-fluid">
        //             <a className="navbar-brand" href="#about" onClick={() => handlePageChange('About')}>
        //                 <span className="brand">Andre Silva</span>
        //             </a>
        //             <button */
        /* //                 className="navbar-toggler"
            //                 type="button"
            //                 data-bs-toggle="collapse"
            //                 data-bs-target="#navbarNavDropdown"
            //                 aria-controls="navbarNavDropdown"
            //                 aria-expanded="false"
            //                 aria-label="Toggle navigation"
            //             >
            //                 <span className="navbar-toggler-icon"></span>
            //             </button> */
        /* //             <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            //                 <ul className="navbar-nav">
            //                     <li className="nav-item">
            //                         <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} aria-current="page">
            //                             About
            //                         </a>
            //                     </li>
            //                     <li className="nav-item">
            //                         <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
            //                             Portfolio
            //                         </a>
            //                     </li>
            //                     <li className="nav-item">
            //                         <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
            //                             Contact
            //                         </a>
            //                     </li>
            //                     <li className="nav-item">
            //                         <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
            //                             Resume
            //                         </a>
            //                     </li>
            //                 </ul>
            //             </div>
            //         </div> */
        /* //     </nav> * /
        /* // </div> */
    );
}

export default Navbar;





















// export default function Navbar() {
//     const [isMobile, setIsMobile] = useState(false);
//     return (
//         <nav className='navbar d-flex justify-content-evenly'>
//             <a href='/' className='andreSilva'>Andre Silva</a>
//             <ul className={isMobile ? 'nav-links-mobile' : 'navLinks'}
//                 onClick={() => setIsMobile(false)}>
//                 <Link to='/' className='about'>
//                     <li>About</li>
//                 </Link>
//                 <Link to='/portfolio' className='portfolio'>
//                     <li>Portfolio</li>
//                 </Link>
//                 <Link to='/contact' className='contact'>
//                     <li>Contact</li>
//                 </Link>
//                 <Link to='/resume' className='resume'>
//                     <li>Resume</li>
//                 </Link>

//             </ul>

//             <button className='mobile-menu-icon'
//                 onClick={() => setIsMobile(!isMobile)}>
//                 {isMobile ? (
//                     <i className='fas fa-times'></i>
//                 ) : (
//                     <i className='fas fa-bars'></i>
//                 )}
//             </button>

//         </nav>
//     )
// }





























// import * as AiIcons  from 'react-icons/ai';
// import * as FaIcons from 'react-icons/fa';
// import { SidebarData } from '../SidebarData';
// import './Navbar.css';
// import { IconContext } from 'react-icons/lib';

// export default function Navbar() {
//     const [sidebar, setSidebar] = useState(false)

//     const showSidebar = () => setSidebar(!sidebar);
//     return (
//         <>
//         <IconContext.Provider value={{color: 'blue'}}>
//             <div className="navbar">
//                 <Link to='#' className='menu-bars'>
//                     <FaIcons.FaBars onClick={showSidebar} />
//                 </Link>
//             </div>
//             <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//                 <ul className='nav-menu-items' onClick={showSidebar}>
//                     <li className='navbar-toggle'>
//                         <Link to='#' className='menu-bars'>
//                         <AiIcons.AiOutlineClose />
//                         </Link>
//                     </li>
//                     {SidebarData.map((item, index) => {
//                         return(
//                             <li key={index} className={item.mLamb}>
//                                 <Link to={item.path}>
//                                     {item.icon}
//                                     <span>{item.title}</span>
//                                 </Link>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </nav>
//             </IconContext.Provider>
//         </>
//     )
// }

// // export default Navbar;