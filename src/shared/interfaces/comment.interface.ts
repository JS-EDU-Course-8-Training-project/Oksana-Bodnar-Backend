import { Users } from "./user.interface";

interface Comments {
    comment: {
        id: number,
        createdAt: string,
        updatedAt: string,
        body: string,
        author: {
            username: string,
            bio: string,
            image: string,
            following: boolean
        }
    }
};

export default Comments;