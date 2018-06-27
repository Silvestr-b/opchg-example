import { IArticle } from "./IArticle";


interface IArticlesStore {
   getById(id: string): IArticle;
}


export { IArticlesStore }