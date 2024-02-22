"use client"

import { useEffect, useState } from "react"
import JobExperience from "@/app/types/job"
import LinkContainer from "@/app/types/linkContainer"

function JobDisplay({ job_id }: {job_id: number}) {
    const [jobData, setJobData] = useState<JobExperience | null>(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    
    useEffect(() => {
        fetch('/api/get_job?id='.concat(job_id.toString()))
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch job data')
            }
            return res.json();
        })
        .then((data) => {
            if (data.error) {
                throw new Error(data.error)
            }
            console.log(data)
            setJobData(data[0])
            setLoading(false)
        })
        .catch((error: Error) => {
            setError(error.message)
        })
        .finally(() => setLoading(false))
    }, [job_id])

    if (isLoading) return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )

    if (error) return <h1>{error}</h1>

    if (!jobData || jobData.hidden) return (
        <h1>The requested job does not exist.</h1>
    )
    
    return (
        <>
        <div className="container text-light-gray">
            <img src={"/images/job_headers/".concat(jobData.employer, ".jpg")} className="w-75 d-block mx-auto rounded-3 mb-3 mt-2" />
            <h1 className="display-5 fw-bold text-white text-center">{jobData.employer}</h1>
            <h1 className="display-5 text-center">{jobData.title}</h1>
            <p className="text-center">{jobData.location}</p>
            <p className="text-center">{jobData.start_date} - {jobData.end_date}</p>
            <h6 className="display-6 col-md-12 fs-4">{jobData.short_description}</h6>
            {/* <div className="row align-items-start text-center">
                <div className="col">
                    <p>{jobData.start_date} - {jobData.end_date}</p>
                </div>
                <div className="col">
                    <p>{jobData.location}</p>
                </div>
            </div> */}
            <ul className="list-group list-group-flush rounded-4">
                {jobData.bullet_points.map((bullet_point, index) => (
                    <li className="list-group-item list-group-item-tertiary p-3" key={index}>{bullet_point}</li>
                ))}
            </ul>

            <div className="accordion accordion-primary" id="accordionExample">
                <div className="accordion-item job-accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed job-accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        External Links
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse bg-primary" data-bs-parent="#accordionExample">
                        {jobData.links.map((link: LinkContainer, index) => (
                            <div className="accordian-body p-2">
                                <a href={link.url} className="text-light-gray" key={index}>{link.title}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default function Job({ params }: { params: { id: number } }) {
    return <div className="container">
        <JobDisplay job_id={params.id} />
    </div>
}