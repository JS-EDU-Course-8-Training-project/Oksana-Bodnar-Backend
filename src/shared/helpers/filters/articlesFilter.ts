import Articles from "../../interfaces/article.interface";
import RequestUser from "../../interfaces/requestUser.interface";
import { Users } from "../../interfaces/user.interface";

export const filterFavoritedArticles = (articles: Array<Articles>, user: Users) => {
    const userFavorited = user.favorites.map((val: any) => val.article._id.toString()).toString();
    if (userFavorited) {
        articles = articles.filter(val => userFavorited.includes(val._id.toString()));
    } else if (!userFavorited) {
        articles = [];
    }
    return articles;
};

export const filterOwnArticles = (articles: Array<Articles>, reqAuthor: string) => {
    return articles = articles.filter(val => val.author.username.includes(reqAuthor));
};

export const filterFeedArticles = (articles: Array<Articles>, req: RequestUser) => {
    return articles = articles.filter(val => val.author.username.includes(req.user!.following.map(val => val.username).toString()));
};

