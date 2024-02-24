export default interface BlogPost {
    slug: number;
    title: string;
    author: string;
    date: string;
    paragraphs: string[];
    draft: boolean;
}