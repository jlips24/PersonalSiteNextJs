import { NextRequest } from 'next/server'
import postsJson from '@/data/blogPosts.json'

export async function GET(request: NextRequest) {
    const postSlugParam = request.nextUrl.searchParams.get("slug");
    const postSlug = Number(postSlugParam); // Convert the parameter to a number

    // Validate that the parameter is a valid number and within the range of available job IDs
    if (!isNaN(postSlug) && postSlug > 0 && postSlug <= postsJson.length) {
        const post = postsJson.filter((post) => post.slug === postSlug);
        if (!post[0].draft) {
            return new Response(JSON.stringify(post), {
                headers: { 'Content-Type': 'application/json' },
            });
        }
        else {
            // Return an error response if validation fails
            return new Response(JSON.stringify({ error: "Invalid post ID" }), {
                status: 400, // Bad Request
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } else {
        // Return an error response if validation fails
        return new Response(JSON.stringify({ error: "Invalid job ID" }), {
            status: 400, // Bad Request
            headers: { 'Content-Type': 'application/json' },
        });
    }
}