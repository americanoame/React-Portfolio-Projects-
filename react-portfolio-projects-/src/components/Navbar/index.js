import '../../styles/Navbar.css';

function Navbar({ currentPage, handlePageChange }) {
    return (

        <nav className="navbar  navbar-expand-lg ">
            <a className="navbar-brand" href="#about" onClick={() => handlePageChange('About')}>
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
        
    );
}

export default Navbar;





















