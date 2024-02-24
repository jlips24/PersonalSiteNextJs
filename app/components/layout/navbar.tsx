"use client"

import { useEffect } from "react"

export default function Navbar() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js')
      })
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
            <a className="navbar-brand text-secondary fw-lighter" href="/">J L</a>
            <button className="navbar-toggler navbar-toggler-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-secondary"></span>
            </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ms-auto w-100 justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link text-secondary" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="/blog">Blog</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}