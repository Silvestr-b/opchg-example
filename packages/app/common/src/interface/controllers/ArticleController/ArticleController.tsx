import * as React from 'react'
import { parse } from 'marked'
import { Article } from '../../componets/common/Article';
import { IArticleControllerProps, IArticleControllerFactory } from './IArticleController';


const ArticleControllerFactory: IArticleControllerFactory = (articlesStore) => {

   class ArticleController extends React.Component<IArticleControllerProps, {}> {
      render() {
         const article = articlesStore.getById(this.props.id);

         return article
            ? <Article
               image={article.image}
               title={article.title}
               text={parse(article.text)}
            />
            : null
      }
   }

   return ArticleController
}


export { ArticleControllerFactory }