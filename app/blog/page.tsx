"use client"

import { useEffect, useState } from "react";
import PostPreview from "./components/post_preview";
import BlogPostsContainer from "../interfaces/blogPostContainer";
import BlogPost from "../interfaces/blogPost";

function Posts() {
    const [postsData, setPostsData] = useState<BlogPostsContainer | null>(null)
    const [postsLoading, setPostsLoading] = useState(true)

    useEffect(() => {
        fetch('/api/blog/get_posts')
        .then((res) => res.json())
        .then((data) => {
            setPostsData(data)
            setPostsLoading(false)
        })
    
    }, [])

    if (postsLoading) return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
    if (!postsData) return <p>No posts data</p>

    return (
        <div className="container">
            <h1 className="font-monospace">
                Welcome to the Blog
            </h1>
            <p className="font-monospace text-light-gray">
                Under construction
            </p>

            {postsData.postsJson.map((post: BlogPost) => (
                <PostPreview post={post} key={post.slug} />
            ))}
        </div>
    )
}

export default function Blog() {
    return (
        <div className="container">
            <Posts />
        </div>
    )
}