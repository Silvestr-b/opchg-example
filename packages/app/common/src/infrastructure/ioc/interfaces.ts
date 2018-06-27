import { IArticlesLoader } from '../../application/loaders/ArticlesLoader'
import { ITeasersLoader } from '../../application/loaders/TeasersLoader'
import { IArticlesStore } from '../../interface/stores/ArticlesStore'
import { ITeasersStore } from '../../interface/stores/TeasersStore'
import { IArticleController } from '../../interface/controllers/ArticleController'
import { INewsFeedController } from '../../interface/controllers/NewsFeedController'


interface Interfaces {
   IArticlesLoader: IArticlesLoader;
   ITeasersLoader: ITeasersLoader
   IArticlesStore: IArticlesStore
   ITeasersStore: ITeasersStore
   IArticleController: IArticleController
   INewsFeedController: INewsFeedController
}


export { Interfaces }