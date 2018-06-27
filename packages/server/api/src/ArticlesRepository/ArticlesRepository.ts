import { IArticlesStore } from "./IArticlesStore";
import { ITeasersStore } from "./ITeasersStore";
import { ITeaser } from "./ITeaser";


class ArticlesRepository {

   constructor(
      private articleStore: IArticlesStore,
      private teaserStore: ITeasersStore
   ) { }

   getArticle(articleId: string) {
      return this.articleStore[articleId] || null;
   }

   getTeasers() {
      const teasers: ITeaser[] = [];
      for(let teaserId in this.teaserStore) {
         teasers.push(this.teaserStore[teaserId]);
      }
      return teasers
   }

}


export { ArticlesRepository }