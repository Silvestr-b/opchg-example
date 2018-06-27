import { IArticlesStore } from "./IArticlesStore";
import { IArticle } from "./IArticle";
import { IArticlesLoader } from "../../../application/loaders/ArticlesLoader";


class ArticlesStore implements IArticlesStore {
   
   constructor(
      private articlesLoader: IArticlesLoader
   ) { }

   getById(id: string): IArticle {
      throw new Error("Method not implemented.");
   }

}


export { ArticlesStore }