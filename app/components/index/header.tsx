"use client"

export default function Header() {
    return (
        <div className="container p-5 mb-4 g-3 text-tangerine bg-dark">
            <div className="row align-items-center">
                <div className="col-5 text-end">
                    <h1 className="display-3">Jake Lipson</h1>
                </div>
                <div className="col-7">
                    <h1 className="display-1 fw-bold">
                        {"I'm a software engineer based out of New York City."}
                    </h1>
                </div>
            </div>
        </div>
    )
}