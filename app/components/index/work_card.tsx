"use client"

import JobExperience from "@/app/types/job";
import Link from "next/link";
import Image from "next/image";

export default function WorkCard({ job }: { job: JobExperience }) {
    if (!job.hidden) {
            return (
            <>
                <div className="row">
                    <div className="col-1">
                        <svg width="40" height="100%">
                            <rect width="10" height="100%" x="0" y="0" fill="rgb(222, 143, 110)" />
                            <rect width="80%" height="10" x="0" y="13" fill="rgb(222, 143, 110)" />
                            <circle cx="80%" cy="18" r="5" fill="rgb(222, 143, 110)" />
                        </svg>
                    </div>
                    <div className="col-11 text-light">
                        <Image 
                            src={"/images/timeline_logos/".concat(job.employer, ".png")}
                            width={180}
                            height={36}
                            alt={job.employer.concat(" logo")}
                        />
                        <h4 className="pt-2">{job.title}</h4>
                        <h6>{job.start_date} - {job.end_date}</h6>
                        <p className="pb-5">{job.short_description}</p>
                        <Link href={`/jobs/${job.id}`}>
                             <button className="btn btn-info">More Info</button>
                         </Link>
                    </div>
                </div>
            </>
        )
    }
    else return <></>
}