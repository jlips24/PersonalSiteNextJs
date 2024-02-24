import jobsJson from '@/data/jobs.json'

export async function GET() {
    return Response.json({ jobsJson })
}