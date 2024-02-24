"use client"

import BlogPost from "@/app/interfaces/blogPost"
import Image from "next/image"
import { useEffect, useState } from "react"

function PostDisplay({ post_slug }: {post_slug: number}) {
    const [postData, setPostData] = useState<BlogPost | null>(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch('/api/blog/get_post?slug='.concat(post_slug.toString()))
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch post data')
            }
            return res.json();
        })
        .then((data) => {
            if (data.error) {
                throw new Error(data.error)
            }
            console.log(data)
            setPostData(data[0])
            setLoading(false)
        })
        .catch((error: Error) => {
            setError(error.message)
        })
        .finally(() => setLoading(false))
    }, [post_slug])

    if (isLoading) return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )

    if (error) return <h1>{error}</h1>

    if (!postData || postData.draft) return (
        <h1>The requested job does not exist.</h1>
    )
    
    return (
        <div className="container text-light-gray">
            <Image 
                src="/images/job_headers/spotify.jpg"
                width={1000}
                height={400}
                alt="alt text"
                style={{
                    width: "80%",
                    height: "auto",
                }}
                className="d-block mx-auto rounded my-3"
            />
            <h1 className="display-1 text-light">{postData.title}</h1>
            <p>By {postData.author}</p>
            {postData.paragraphs.map((paragraph: string, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    )
}

export default function Post({ params }: { params: { slug: number } }) {
    return <div className="container">
        <PostDisplay post_slug={params.slug} />
    </div>
}