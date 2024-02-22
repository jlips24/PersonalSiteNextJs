"use client"

import { useEffect, useState } from 'react'

import WorkCard from "./work_card"
import WorkCardLoading from './work_card_loading'
import JobExperience from '../../types/job'
import JobsContainer from '@/app/types/jobsContainer'

function Jobs() {
    const [jobsData, setJobsData] = useState<JobsContainer | null>(null)
    const [jobsLoading, setJobsLoading] = useState(true)
    
    useEffect(() => {
        fetch('/api/get_jobs')
        .then((res) => res.json())
        .then((data) => {
            setJobsData(data)
            setJobsLoading(false)
        })
    
    }, [])

    
    if (jobsLoading) return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    // <div className="container">
    //     <div className="row row-cols-1 row-cols-md-3 mb-3 g-3">
    //         <WorkCardLoading />
    //         <WorkCardLoading />
    //         <WorkCardLoading />
    //         <WorkCardLoading />
    //         <WorkCardLoading />
    //     </div>
    // </div>
    )
    if (!jobsData) return <p>No jobs data</p>

    return (
        <div className="container m-3">
            <div className='row'>
                <div className="col-1">
                    <svg width="10" height="20px" className="timeline-top">
                        <rect width="10" height="100%" x="0" y="0" fill="rgb(222, 143, 110)" />
                    </svg>
                </div>
            </div>
            <div className="row">
                {jobsData.jobsJson.map((job: JobExperience) => (
                        <WorkCard job={job} key={job.id} />
                ))}
            </div>
            <div className='row'>
                <div className="col-1">
                    <svg width="10" height="20px" className="timeline-bottom">
                        <rect width="10" height="100%" x="0" y="0" fill="rgb(222, 143, 110)" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default function WorkHistory() {
    return (
        <div className="container">
            <Jobs />
        </div>
    )
}