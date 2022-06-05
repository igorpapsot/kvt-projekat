import { Community } from "./community";
import { Flair } from "./flair";
import { User } from "./user";

export class Post {

    text: string;
    title: string;
    image: string;
    user: User;
    flair: Flair;
    community: Community;

    constructor() {
        
    }
}