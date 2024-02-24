import BlogPost from "./blogPost";

export default interface BlogPostsContainer {
    [x: string]: any;
    jobsJson: BlogPost[];
};