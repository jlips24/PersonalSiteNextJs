import LinkContainer from "./linkContainer";

export default interface JobExperience {
    id: number;
    title: string;
    employer: string;
    location: string;
    start_date: string;
    end_date: string;
    short_description: string;
    bullet_points: string[];
    hidden: boolean;
    links: LinkContainer[];
  }