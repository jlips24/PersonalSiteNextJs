"use client"

import Image from "next/image"

export default function Categories() {
    const categories = [
        "Japan",
        "Spain",
        "New York City",
    ]
    
    return (
        <div className="container p-5 mb-4 g-3 text-tangerine bg-dark">
            {categories.map(category => (
                <div key={category}>
                    <h4>{category}</h4>
                    <hr/>
                </div>
            ))}
        </div>
    )
}