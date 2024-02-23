"use client"

export default function Header() {
    return (
        <div className="container p-5 mb-4 g-3 text-tangerine">
            <div className="row align-items-center">
                <div className="col-4 text-end">
                    <h1 className="display-3">Jake Lipson</h1>
                </div>
                <div className="col-8">
                    <h1 className="display-1 fw-bold">
                        {"I'm a software engineer based out of New York City."}
                    </h1>
                </div>
            </div>
        </div>
    )
}