"use client"

import JobExperience from "@/app/types/job";
import Link from "next/link";
import Image from "next/image";

export default function WorkCard({ job }: { job: JobExperience }) {
    if (!job.hidden) {
            return (
            <>
            <li className="timeline-item mb-5">
                <Image 
                    src={"/images/timeline_logos/".concat(job.employer, ".png")}
                    width={180}
                    height={36}
                    alt={job.employer.concat(" logo")}
                />
                <h4 className="pt-2">{job.title}</h4>
                <h6>{job.start_date} - {job.end_date}</h6>
                <p>{job.short_description}</p>
                <Link href={`/jobs/${job.id}`}>
                    <button className="btn btn-custom-grey mb-5">More Info</button>
                </Link>
            </li>
            </>
        )
    }
    else return <></>
}