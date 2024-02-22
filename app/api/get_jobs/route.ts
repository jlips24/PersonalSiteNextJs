import jobsJson from '../../../jobs.json'

export async function GET() {
    return Response.json({ jobsJson })
}