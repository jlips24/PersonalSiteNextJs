"use client"

import JobExperience from "@/app/types/job";
import Link from "next/link";

export default function WorkCard({ job }: { job: JobExperience }) {
    if (!job.hidden) {
            return (
            <div className="col mb-5">
                <div className="card h-100 border-0 bg-primary"> 
                    <img id="employerLogo" src={"/images/job_card_headers/".concat(job.employer, ".png")} className="card-img-top bg-primary pb-3 pt-1" alt={ job.employer } />
                    <div className="card-body d-flex flex-column rounded-3 text-bg-secondary ">
                        <div>
                        <h5 className="card-title">{ job.title } @ { job.employer }</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{ job.start_date } - { job.end_date }</h6>
                        <p className="card-text">{ job.short_description }</p>
                        </div>
                        <div className="mt-auto">
                        <Link href={`/jobs/${job.id}`}>
                            <button className="btn btn-tertiary mb-1 mt-2">More Info</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else return <></>
}