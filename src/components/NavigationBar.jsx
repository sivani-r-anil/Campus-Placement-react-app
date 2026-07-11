import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>

            <nav
                className="navbar navbar-expand-lg shadow"
                style={{ background: "linear-gradient(to right, #1565C0, #1976D2, #42A5F5)" }}
            >
                <div className="container-fluid">
                    <a className="navbar-brand text-warning fw-bold fs-4" href="#">
                        🎓 CAMPUS PLACEMENT APP
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link text-white px-3 fw-semibold" to="/">Register Student</Link>
                            <Link className="nav-link text-white px-3 fw-semibold" to="/search">Search Registrations</Link>
                            <Link className="nav-link text-white px-3 fw-semibold" to="/delete">Delete Registrations</Link>
                            <Link className="nav-link text-white px-3 fw-semibold" to="/view">View Registrations</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavigationBar