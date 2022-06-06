import { Community } from "./community";
import { Flair } from "./flair";
import { User } from "./user";

export class Post {

    text: string;
    title: string;
    imagePath: string;
    user: User;
    flair: Flair;
    community: Community;

    constructor() {
        
    }
}