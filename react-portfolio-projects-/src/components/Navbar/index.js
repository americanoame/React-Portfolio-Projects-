import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className='navbar d-flex justify-content-evenly'>
            <h3 className='andreSilva'>Andre Silva</h3>
            <ul className={isMobile ? 'nav-links-mobile' : 'navLinks'}
            onClick={() => setIsMobile(false)}
            >
                <Link to='/' className='about'>
                    <li>About</li>
                </Link>
                <Link to='/portfolio' className='portfolio'>
                    <li>Portfolio</li>
                </Link>
                <Link to='/contact' className='contact'>
                    <li>Contact</li>
                </Link>
                <Link to='/resume' className='resume'>
                    <li>Resume</li>
                </Link>

            </ul>

            <button className='mobile-menu-icon'
            onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (
                    <i className='fas fa-times'></i>
                ) : (
                    <i className='fas fa-bars'></i>
                )}
            </button>

        </nav>
    )
}





























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