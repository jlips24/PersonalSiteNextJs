"use client"

import { useEffect, useState } from 'react'

import WorkCard from "./work_card"
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
    )
    if (!jobsData) return <p>No jobs data</p>

    return (
        <div className='container'>
        <section className='pt-5 mx-4'>
            <ul className='timeline'>
            {jobsData.jobsJson.map((job: JobExperience) => (
                <WorkCard job={job} key={job.id} />
            ))}
            </ul>
        </section>
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