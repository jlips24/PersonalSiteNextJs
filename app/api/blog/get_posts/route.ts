import postsJson from '@/data/blogPosts.json'

export async function GET() {
    return Response.json({ postsJson })
}