import BlogPost from "@/app/interfaces/blogPost";

export default function PostPreview ({ post }: { post: BlogPost}) {
    return (
        <a href={"/blog/".concat(post.slug.toString())}>
            <div className="card my-3 bg-dark font-monospace">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="/images/job_headers/Spotify.jpg" className="img-fluid rounded h-100" style={{ objectFit: "cover" }} alt="..." />
                        {/* TODO: Use <Image> tage here instead of <img> */}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body bg-dark text-light-gray">
                            <h5 className="card-title text-light">{post.title}</h5>
                            <p><small>{post.date}</small></p>
                            <p className="card-text">{post.paragraphs[0]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}