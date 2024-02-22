export default function WorkCardLoading() { // TODO: Use interface to define type of parameter 'job'
    return (
        <div className='col'>
            <div className="card h-100 text-bg-secondary border-0" aria-hidden="true">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                <div className="card-body">
                    <h5 className="card-title placeholder-glow"></h5>
                    <h6 className='card-subtitle placeholder-glow'></h6>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                    </p>
                    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                </div>
            </div>
        </div>
    )
}