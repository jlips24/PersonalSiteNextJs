import PostPreview from "./components/post_preview";

export default function Blog() {
    return (
        <div className="container">
            <h1 className="font-monospace">
                Welcome to the Blog
            </h1>
            <p className="font-monospace text-light-gray">
                Under construction
            </p>
            <PostPreview />
            <PostPreview />
            <PostPreview />
        </div>
    )
}