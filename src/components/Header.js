import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid py-2 mx-md-3">
                <Link className="navbar-brand border-2 rounded" to="/">
                    <span className='fs-4 fw-bolder text-uppercase'>
                        <span className='ms-1 border-y-2 text-green-400'>
                            Country
                        </span> <span className='text-orange-400 border-y-2 border-info me-1'>
                            API
                        </span>
                    </span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-info font-semibold" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-info font-semibold" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-info font-semibold" to="signup">Signup</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;