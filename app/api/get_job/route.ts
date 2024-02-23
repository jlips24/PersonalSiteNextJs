import { NextRequest } from 'next/server'
import jobsJson from '../../../jobs.json'

export async function GET(request: NextRequest) {
    const jobIdParam = request.nextUrl.searchParams.get("id");
    const job_id = Number(jobIdParam); // Convert the parameter to a number

    // Validate that the parameter is a valid number and within the range of available job IDs
    if (!isNaN(job_id) && job_id > 0 && job_id <= jobsJson.length) {
        const job = jobsJson.filter((job) => job.id === job_id);
        if (!job[0].hidden) {
            return new Response(JSON.stringify(job), {
                headers: { 'Content-Type': 'application/json' },
            });
        }
        else {
            // Return an error response if validation fails
            return new Response(JSON.stringify({ error: "Invalid job ID" }), {
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