"use client"

import { useState, useEffect } from 'react'

import WorkCard from "./work_card"
import WorkCardLoading from './work_card_loading'
import JobExperience from '../../types/job'
import JobsContainer from '@/app/types/jobsContainer'

function Jobs() {
    const [jobsData, setJobsData] = useState<JobsContainer | null>(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/get_jobs')
        .then((res) => res.json())
        .then((data) => {
            setJobsData(data)
            setLoading(false)
        })
    }, [])

    if (isLoading) return (
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
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 mb-3 g-4">
                {jobsData.jobsJson.map((job: JobExperience) => (
                        <WorkCard job={job} />
                ))}
            </div>
        </div>
    )
}

export default async function WorkHistory() {
    return (
        <div className="container">
            <Jobs />
        </div>
    )
}