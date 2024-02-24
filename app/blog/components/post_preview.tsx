export default function PostPreview () {
    return (
        <div className="card my-3 bg-dark font-monospace">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="/images/job_headers/Spotify.jpg" className="img-fluid rounded h-100" style={{ objectFit: "cover" }} alt="..." />
                    {/* TODO: Use <Image> tage here instead of <img> */}
                </div>
                <div className="col-md-8">
                    <div className="card-body bg-dark text-light">
                        <h5 className="card-title">Post title</h5>
                        <p><small>February 24th, 2024</small></p>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}