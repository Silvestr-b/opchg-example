import { IArticle } from "./IArticle";


interface IArticlesStore {
   [articleId: string]: IArticle;
}


export { IArticlesStore }