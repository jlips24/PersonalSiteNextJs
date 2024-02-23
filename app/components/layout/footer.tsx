export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-secondary">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 mt-2 text-secondary text-decoration-none lh-1">
                        JL
                    </a>
                    <span className="mb-3 mt-2 mb-md-0 text-secondary">© {currentYear} Jake Lipson</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="svg-secondary" href="https://www.linkedin.com/in/jakelipson/" target="_blank">
                            <img src="/svgs/linkedin.svg" className="bi" width="24" height="24" />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="svg-secondary" href="https://github.com/jlips24" target="_blank">
                        <img src="/svgs/github.svg" className="bi" width="27" height="27" />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}